"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive flame rendered with Three.js (ShaderMaterial on a fullscreen
 * quad). FBM/domain-warped noise rises from the base and leans toward the
 * cursor; composited with `mix-blend-mode: screen` so it glows over the maroon.
 * Pauses offscreen, caps DPR, reduced-motion renders a single frame.
 */
const FRAGMENT = `
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_heat;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2((uv.x - 0.5) * aspect + 0.5, uv.y);

  float mx = (u_mouse.x - 0.5) * aspect + 0.5;
  float lean = (mx - p.x) * 0.16;

  vec2 q = vec2(p.x * 3.0 + lean, p.y * 2.3 - u_time * 0.95);
  float warp = fbm(q * 1.6 + u_time * 0.18);
  float n = fbm(q + warp * 0.65);

  // Horizontal envelope across the FULL section width (uv-based so it doesn't
  // collapse to the centre on wide sections); only a gentle dim at the edges.
  float horiz = pow(clamp(1.0 - abs(uv.x - 0.5) * 0.8, 0.0, 1.0), 0.5);
  float rise = pow(1.0 - uv.y, 1.25);
  float flame = n * horiz * rise;

  float md = distance(vec2(p.x, uv.y), vec2(mx, u_mouse.y));
  flame += smoothstep(0.34, 0.0, md) * (0.18 + 0.28 * u_heat) * rise;

  flame = pow(flame, 1.7) * 2.25;

  vec3 c1 = vec3(0.40, 0.06, 0.03);
  vec3 c2 = vec3(0.78, 0.19, 0.06);
  vec3 c3 = vec3(0.97, 0.49, 0.16);
  vec3 c4 = vec3(1.00, 0.86, 0.58);
  vec3 col = mix(c1, c2, smoothstep(0.10, 0.50, flame));
  col = mix(col, c3, smoothstep(0.50, 0.92, flame));
  col = mix(col, c4, smoothstep(0.92, 1.40, flame));

  float alpha = smoothstep(0.05, 0.5, flame) * 0.92;
  gl_FragColor = vec4(col, alpha);
}
`;

const VERTEX = `
void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

export default function FlameCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(1, 1) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.42) },
      u_heat: { value: 0 },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const mouse = { x: 0.5, y: 0.42, tx: 0.5, ty: 0.42, heat: 0 };

    const resize = () => {
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      renderer.setSize(w, h, false);
      const dpr = renderer.getPixelRatio();
      uniforms.u_res.value.set(w * dpr, h * dpr);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const parent = canvas.parentElement;
    const onMove = (e: PointerEvent) => {
      const r = (parent ?? canvas).getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = 1 - (e.clientY - r.top) / r.height;
      mouse.heat = 1;
    };
    const onLeave = () => {
      mouse.heat = 0;
    };
    parent?.addEventListener("pointermove", onMove, { passive: true });
    parent?.addEventListener("pointerleave", onLeave, { passive: true });

    let raf = 0;
    let visible = true;
    const start = performance.now();
    const render = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      mouse.heat += ((mouse.heat > 0.5 ? 1 : 0) - mouse.heat) * 0.04;
      uniforms.u_time.value = (performance.now() - start) / 1000;
      uniforms.u_mouse.value.set(mouse.x, mouse.y);
      uniforms.u_heat.value = mouse.heat;
      renderer.render(scene, camera);
    };
    const loop = () => {
      cancelAnimationFrame(raf);
      const frame = () => {
        if (!visible) return;
        render();
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduce) loop();
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.02 }
    );
    io.observe(canvas);

    if (reduce) render();
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} className="flame-canvas" aria-hidden />;
}
