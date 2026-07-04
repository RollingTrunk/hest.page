import Link from 'next/link';
import { getAllPosts, PostMeta } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, comparisons, and insights on household management, meal planning, task organization, and how Hest helps families stay coordinated.',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] p-[var(--spacing-lg)] text-inherit no-underline transition-all hover:-translate-y-0.5 hover:border-[var(--color-primary-light)] hover:shadow-[var(--shadow-md)]">
      <article>
        <div className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-sm)] text-[0.85rem] text-[var(--color-text-secondary)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="opacity-40">·</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="mb-[var(--spacing-sm)] text-[1.35rem] max-[640px]:text-[1.15rem] font-semibold leading-tight tracking-[-0.01em] text-[var(--color-text)]">{post.title}</h2>
        <p className="mb-[var(--spacing-md)] text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">{post.description}</p>
        <div className="flex flex-wrap gap-[var(--spacing-sm)]">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block rounded-[var(--radius-pill)] bg-[var(--color-primary-subtle)] px-[10px] py-[2px] text-[0.75rem] font-medium tracking-[0.01em] text-[var(--color-primary)]">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-[800px] px-[var(--spacing-lg)] pt-[var(--spacing-xxxl)] max-[640px]:pt-[100px] pb-[var(--spacing-xxl)]">
      <header className="mb-[var(--spacing-xl)]">
        <h1 className="mb-[var(--spacing-sm)] text-[2.5rem] max-[640px]:text-[2rem] font-bold tracking-[-0.02em] text-[var(--color-text)]">Hest Blog</h1>
        <p className="max-w-[540px] text-[1.1rem] leading-relaxed text-[var(--color-text-secondary)]">
          Insights on household management, productivity, and how Hest helps
          families stay in sync.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="py-[var(--spacing-xxl)] text-center text-[1.05rem] text-[var(--color-text-secondary)]">
          <p>Posts coming soon — stay tuned!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-[var(--spacing-md)]">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
