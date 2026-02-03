---
name: Netlify Deployment
description: Best practices for deploying Next.js apps to Netlify
---

# Netlify Deployment Guidelines

## Configuration
- Ensure a `netlify.toml` exists if custom build settings are needed (though auto-detection usually works).
- Use the **Netlify Plugin for Next.js** (essential for App Router support).

## Operations
- **Functions**: Place Netlify Functions in `netlify/functions` or use Next.js API routes (automatically handled).
- **Environment Variables**: Manage sensitive keys in Netlify UI, public keys in `.env.local`.
- **Preview Deploys**: Use Deploy Previews for every PR to test changes in a live environment.
- **Edge Functions**: Use Netlify Edge Functions for low-latency middleware.

## Troubleshooting
- If build fails, check the `Next.js Runtime` version in logs.
- Clear build cache and redeploy if weird dependency issues occur.
