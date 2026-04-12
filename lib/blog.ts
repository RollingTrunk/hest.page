import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Get all blog post slugs from the content/blog directory.
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get a single blog post by slug, including its raw MDX content and frontmatter.
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? 'Hest Team',
    tags: data.tags ?? [],
    readingTime: stats.text,
    coverImage: data.coverImage,
    content,
  };
}

/**
 * Get all blog posts sorted by date (newest first).
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      // Strip the raw content for listing purposes
      const { content: _, ...meta } = post;
      return meta;
    })
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
