---
name: TypeScript Best Practices
description: Strict TypeScript usage for robust application development
---

# TypeScript Guidelines

## Strictness
- **No `any`**: Avoid `any` at all costs. Use `unknown` or specific types.
- **Strict Mode**: Ensure `strict: true` is set in `tsconfig.json`.

## React Patterns
- **Props**: Define component props using `interface` or `type`.
  ```typescript
  type MyComponentProps = {
    title: string;
    isActive?: boolean;
    children: React.ReactNode;
  };
  ```
- **Hooks**: Infer types where possible, but explicit generics for complex state (e.g., `useState<User | null>(null)`).
- **Event Handlers**: Use React types for events, e.g., `React.ChangeEvent<HTMLInputElement>`.

## Utility Types
- Leverage `Pick`, `Omit`, `Partial`, and `Record` to avoid duplication.
- Use `zod` for runtime validation if dealing with external API data.
