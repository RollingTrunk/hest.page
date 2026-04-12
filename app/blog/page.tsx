import Link from 'next/link';
import { getAllPosts, PostMeta } from '@/lib/blog';
import styles from './blog.module.css';
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
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <article>
        <div className={styles.cardMeta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className={styles.dot}>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className={styles.cardTitle}>{post.title}</h2>
        <p className={styles.cardDescription}>{post.description}</p>
        <div className={styles.cardTags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
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
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hest Blog</h1>
        <p className={styles.subtitle}>
          Insights on household management, productivity, and how Hest helps
          families stay in sync.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <p>Posts coming soon — stay tuned!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
