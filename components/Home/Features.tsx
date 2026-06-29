"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./landing.module.css";
import Reveal from "./Reveal";
import LayoutDashboardIcon from "../icons-animated/LayoutDashboardIcon";
import CheckedIcon from "../icons-animated/CheckedIcon";
import SoupIcon from "../icons-animated/SoupIcon";
import FileDescriptionIcon from "../icons-animated/FileDescriptionIcon";

const FEATURES = [
  {
    icon: LayoutDashboardIcon,
    chip: "Calendar",
    title: "Every schedule, one view",
    text: "Every schedule, together in one shared view.",
    image: "/feature-calendar-v3.png",
    alt: "A person checking the family schedule on their phone",
    pos: "50% 28%",
  },
  {
    icon: CheckedIcon,
    chip: "Tasks",
    title: "Chores that share themselves",
    text: "Assign chores so it's not all on one person.",
    image: "/feature-tasks-v3.png",
    alt: "A family tidying the house together",
    pos: "50% 32%",
  },
  {
    icon: SoupIcon,
    chip: "Meals",
    title: "End the dinner debate",
    text: "Plan meals and auto-build the grocery list.",
    image: "/feature-meals-v3.png",
    alt: "Someone preparing a meal in a bright kitchen",
    pos: "50% 40%",
  },
  {
    icon: FileDescriptionIcon,
    chip: "Records",
    title: "Docs kept safe",
    text: "Warranties and docs, safe and easy to find.",
    image: "/feature-records-v3.png",
    alt: "A person organizing household documents",
    pos: "70% 28%",
  },
];

const N = FEATURES.length;
const SETS = 4;
const AUTO_MS = 3200;
// Four identical sets rendered once and NEVER reordered. We slide the whole
// track with a transform and, because the content repeats every N cards, we can
// jump back by exactly one set-width at the periodic boundary with zero visible
// change. Staying in the middle sets keeps a card buffered on both sides.
const CARDS = Array.from({ length: SETS }, () => FEATURES).flat();

export default function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLDivElement>(null);
  const step = useRef(N); // current card index offset; kept within [N, 2N)
  const translate = useRef(0);
  const transitioning = useRef(false);
  const paused = useRef(false);
  const drag = useRef({ down: false, lastX: 0, moved: false });
  const resume = useRef<number | undefined>(undefined);

  // Exact per-card stride (width + gap), measured from real layout.
  const stride = () => {
    const cards = trackRef.current?.querySelectorAll("article");
    if (!cards || cards.length < 2) return 0;
    return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
  };
  const apply = (smooth: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = smooth
      ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
      : "none";
    el.style.transform = `translateX(${translate.current}px)`;
  };
  // Keep step within [N, 2N) by shifting whole set-widths — invisible because
  // the content is periodic, and it guarantees buffer cards on both sides.
  const normalizeStep = () => {
    const w = stride();
    if (w <= 0) return;
    while (step.current >= 2 * N) step.current -= N;
    while (step.current < N) step.current += N;
    translate.current = -step.current * w;
  };
  const advance = (dir: number) => {
    if (transitioning.current) return;
    const w = stride();
    if (w <= 0) return;
    step.current += dir;
    translate.current = -step.current * w;
    transitioning.current = true;
    apply(true);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let visible = true;
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(el);

    const settle = () => {
      step.current = Math.round(-translate.current / (stride() || 1));
      normalizeStep();
      apply(false);
    };
    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "transform") return;
      transitioning.current = false;
      settle();
    };
    el.addEventListener("transitionend", onEnd);

    // Position into the middle buffer (identical content, no visible jump).
    normalizeStep();
    apply(false);

    const onResize = () => {
      if (transitioning.current || drag.current.down) return;
      translate.current = -step.current * stride();
      apply(false);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const tick = () => {
      const w = stride();
      if (w > 0 && progRef.current) {
        let liveX = translate.current;
        try {
          liveX = new DOMMatrixReadOnly(getComputedStyle(el).transform).m41;
        } catch {
          /* keep target */
        }
        const pos = -liveX / w;
        const p = (((pos % N) + N) % N) / N;
        progRef.current.style.transform = `scaleX(${Math.max(0.04, p)})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    let timer: number | undefined;
    if (!reduce) {
      timer = window.setInterval(() => {
        if (paused.current || drag.current.down || transitioning.current || !visible)
          return;
        advance(1);
      }, AUTO_MS);
    }

    return () => {
      io.disconnect();
      el.removeEventListener("transitionend", onEnd);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      if (timer) window.clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pauseFor = (ms: number) => {
    paused.current = true;
    window.clearTimeout(resume.current);
    resume.current = window.setTimeout(() => {
      paused.current = false;
    }, ms);
  };

  // Drag uses incremental deltas so mid-drag normalization isn't overwritten.
  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (transitioning.current) return;
    drag.current = { down: true, lastX: e.clientX, moved: false };
    trackRef.current?.classList.add(styles.dragging);
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.lastX;
    drag.current.lastX = e.clientX;
    if (Math.abs(dx) > 0) drag.current.moved = true;
    translate.current += dx;
    apply(false);
    // Keep the periodic buffer centered so we never slide past rendered cards.
    const w = stride();
    if (w > 0) {
      while (-translate.current / w >= 2 * N) translate.current += N * w;
      while (-translate.current / w < N) translate.current -= N * w;
      apply(false);
    }
  };
  const endDrag = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    trackRef.current?.classList.remove(styles.dragging);
    const w = stride();
    if (w > 0 && drag.current.moved) {
      step.current = Math.round(-translate.current / w);
      translate.current = -step.current * w;
      transitioning.current = true;
      apply(true);
    }
    pauseFor(4500);
  };

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="features">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <Reveal as="span" className={styles.eyebrow}>
            What Hest does
          </Reveal>
          <Reveal as="div">
            <h2 className={styles.sectionTitle}>One home for everything</h2>
          </Reveal>
          <Reveal as="div" delay={0.05}>
            <p className={styles.sectionSub}>
              Four tools that work together, so your household runs on one source
              of truth instead of five group chats.
            </p>
          </Reveal>
        </div>
      </div>

      <div className={styles.featuresSlider}>
        <div className={styles.sliderViewport}>
          <div
            ref={trackRef}
            className={styles.sliderTrack}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
            onMouseEnter={() => {
              paused.current = true;
            }}
            onMouseLeave={() => {
              paused.current = false;
            }}
          >
            {CARDS.map((f, i) => {
              const Icon = f.icon;
              const dup = i >= N;
              return (
                <article
                  className={styles.featureCard}
                  key={i}
                  aria-hidden={dup || undefined}
                >
                  <div className={styles.featureMedia}>
                    <Image
                      src={f.image}
                      alt={dup ? "" : f.alt}
                      width={560}
                      height={380}
                      draggable={false}
                      style={{ objectFit: "cover", objectPosition: f.pos }}
                    />
                  </div>
                  <div className={styles.featureBody}>
                    <span className={styles.featureChip}>
                      <Icon size={15} />
                      {f.chip}
                    </span>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.sliderControls}>
            <div className={styles.sliderProgress}>
              <div ref={progRef} className={styles.sliderProgressFill} />
            </div>
            <div className={styles.sliderArrows}>
              <button
                className={styles.sliderArrow}
                onClick={() => {
                  advance(-1);
                  pauseFor(4500);
                }}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                className={styles.sliderArrow}
                onClick={() => {
                  advance(1);
                  pauseFor(4500);
                }}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
