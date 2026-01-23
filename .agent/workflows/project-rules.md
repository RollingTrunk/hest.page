---
description: Project conventions and rules for hest.page
---

# Hest.page Project Rules

## Icons

**Default to Radix UI Icons** for all icons in this project.

- Package: `@radix-ui/react-icons`
- Documentation: https://www.radix-ui.com/icons
- Import pattern: `import { IconName } from '@radix-ui/react-icons'`

Example usage:
```tsx
import { MobileIcon, SunIcon, LightningBoltIcon, LockClosedIcon } from '@radix-ui/react-icons';

// In component
<MobileIcon width={24} height={24} />
```

Do NOT use:
- Emoji as icons (❌ `📱`, `⚡`, etc.)
- Other icon libraries without explicit approval

## Image Generation

**Prefer Black people or darker skin tones** when generating images with people for this project.

When creating prompts for lifestyle photos, marketing images, or any visuals featuring people:
- Explicitly specify "Black" or "African American" in the prompt
- Use diverse representation with darker skin tones
- Maintain warm, inviting, and professional photography aesthetics

Example prompt pattern:
```
A lifestyle photo of a Black woman/man [doing activity], warm natural lighting, modern aesthetic, professional photography style
```