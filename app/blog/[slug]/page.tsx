import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {
  CheckCircledIcon,
  CrossCircledIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import styles from './post.module.css';
import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

/**
 * Generate static paths for all blog posts at build time.
 */
export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

/**
 * Generate dynamic metadata for each blog post.
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Inline icon components for use in MDX comparison tables.
 */
function Yes({ children }: { children?: React.ReactNode }) {
  return (
    <span className={styles.iconYes}>
      <CheckCircledIcon width={16} height={16} />
      {children && <span>{children}</span>}
    </span>
  );
}

function No({ children }: { children?: React.ReactNode }) {
  return (
    <span className={styles.iconNo}>
      <CrossCircledIcon width={16} height={16} />
      {children && <span>{children}</span>}
    </span>
  );
}

function Paid({ children }: { children?: React.ReactNode }) {
  return (
    <span className={styles.iconPaid}>
      <InfoCircledIcon width={16} height={16} />
      {children && <span>{children}</span>}
    </span>
  );
}

/**
 * Custom MDX components to style rendered content.
 */
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={styles.h2} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={styles.h3} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={styles.paragraph} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={styles.list} {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className={styles.orderedList} {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={styles.listItem} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className={styles.link} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className={styles.tableWrapper}>
      <table className={styles.table} {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className={styles.th} {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className={styles.td} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className={styles.strong} {...props} />
  ),
  hr: () => <hr className={styles.hr} />,
  Yes,
  No,
  Paid,
};

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        {/* Back link */}
        <Link href="/blog" className={styles.backLink}>
          ← All Posts
        </Link>

        {/* Post header */}
        <header className={styles.header}>
          <div className={styles.meta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className={styles.dot}>·</span>
            <span>{post.readingTime}</span>
            <span className={styles.dot}>·</span>
            <span>{post.author}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Rendered MDX content */}
        <div className={styles.content}>
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* CTA */}
        <aside className={styles.cta}>
          <h3 className={styles.ctaTitle}>Ready to simplify your household?</h3>
          <p className={styles.ctaText}>
            Hest brings your calendar, tasks, meals, and records into one
            beautiful, shared space.
          </p>
          <a
            href="https://apps.apple.com/app/apple-store/id6759582460?pt=128418226&ct=Hest%20Website&mt=8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Download Hest — Free on iOS
          </a>
        </aside>
      </article>
    </main>
  );
}
