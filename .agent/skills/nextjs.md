---
name: Next.js App Router
description: Expert guidelines for Next.js 14+ App Router development
---

# Next.js App Router Guidelines

## Core Principles
- **Server Components by Default**: Use Server Components for everything unless interactivity is strictly required. Add 'use client' only to leaf components.
- **File Structure**: leverage the `app/` directory conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`).
- **Data Fetching**: Fetch data directly in Server Components using async/await. Avoid `useEffect` for data fetching.

## Coding Standards
1. Use `next/image` for all images with proper width/height or fill.
2. Use `next/link` for internal navigation.
3. Optimize font loading with `next/font`.
4. Implement Metadata API for SEO in `layout.tsx` or `page.tsx`.

## Common Tasks
- **New Page**: Create `app/[route]/page.tsx`.
- **API Route**: Create `app/api/[route]/route.ts`.
- **Middleware**: Use `middleware.ts` in the root (or src) for request interception.
