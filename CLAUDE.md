# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro static site project (v5.17.1) using TypeScript with strict mode enabled. Frontend development is based on designs from Pencil.dev.

## Commands

```bash
npm run dev          # Start development server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands (e.g., astro add, astro check)
npx astro check      # Verify types
npx astro sync       # Generate types for content collections
```

## Project Structure (Obligatory)

```
src/
├── components/
│   ├── ui/              # Atomic components (Button, Input, Card, Badge)
│   ├── blocks/          # Reusable blocks (Hero, Features, Pricing)
│   ├── sections/        # Page-specific sections
│   └── layouts/         # Layouts (BaseLayout, PageLayout)
├── content/
│   ├── config.ts        # Zod schemas for content collections
│   ├── sections/        # .md files for section content
│   ├── pages/           # .md files for page metadata
│   └── [collection]/    # Other collections as needed
├── pages/
│   └── [routes].astro   # Routing only, minimal logic
├── styles/
│   ├── global.css       # CSS variables, reset, utilities
│   └── tokens.css       # Design tokens
├── lib/
│   ├── utils.ts         # Helper functions
│   └── constants.ts     # Project constants
└── types/
    └── index.ts         # Global TypeScript types
```

## Content Collections

### Schema First (Always)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    order: z.number(),
    visible: z.boolean().default(true),
    cta: z.object({
      text: z.string(),
      href: z.string(),
      variant: z.enum(['primary', 'secondary', 'ghost']),
    }).optional(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
  }),
});
```

### .md File Naming Convention

```
src/content/sections/
├── home/
│   ├── 01-hero.md
│   ├── 02-features.md
│   ├── 03-how-it-works.md
│   ├── 04-pricing.md
│   └── 05-cta.md
├── about/
│   ├── 01-intro.md
│   └── 02-team.md
└── shared/
    ├── footer.md
    └── newsletter.md
```

### .md File Structure

```markdown
---
title: "Simplifica tu flujo de trabajo"
subtitle: "La herramienta que necesitas"
order: 1
visible: true
cta:
  text: "Comenzar gratis"
  href: "/signup"
  variant: "primary"
items:
  - title: "Rápido"
    description: "Velocidad incomparable"
    icon: "rocket"
---

<!-- Body = extended content (optional) -->
Extended content with **markdown** support.
```

## Component Hierarchy

| Type | Responsibility | Receives Props | Fetches Data |
|------|----------------|----------------|--------------|
| `ui/` | Pure presentation | ✅ Yes | ❌ No |
| `blocks/` | UI composition | ✅ Yes | ❌ No |
| `sections/` | Render content collection | ✅ Yes | ✅ Optional |
| `layouts/` | Page structure | ✅ Yes | ✅ Yes |
| `pages/` | Routing + Query data | ❌ Minimal | ✅ Yes |

### Props Interface (Always Typed)

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  class?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href,
  class: className
} = Astro.props;
---
```

### Composition Over Configuration

```astro
<!-- ❌ AVOID: Excessive props -->
<Card title="..." description="..." image="..." imagePosition="left" />

<!-- ✅ PREFER: Composition with slots -->
<Card variant="elevated">
  <Card.Image slot="media" src="..." />
  <Card.Title>...</Card.Title>
  <Card.Description>...</Card.Description>
</Card>
```

## Design Tokens (Required)

```css
/* src/styles/tokens.css */
:root {
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Semantic colors */
  --color-primary: ...;
  --color-primary-hover: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-border: ...;

  /* Typography */
  --font-sans: ...;
  --font-mono: ...;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  /* Radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-full: 9999px;
}
```

### CSS Priority (In Order)

1. **CSS Variables** - For system tokens
2. **Scoped Styles in Astro** - For component styles
3. **Tailwind (if installed)** - For quick utilities
4. **CSS Modules** - For React/Vue islands

## Page Implementation Pattern

```astro
---
// src/pages/index.astro
import { getCollection } from 'astro:content';
import BaseLayout from '@/layouts/BaseLayout.astro';
import Hero from '@/components/sections/Hero.astro';
import Features from '@/components/sections/Features.astro';

// 1. Query content collections
const sections = await getCollection('sections',
  ({ id }) => id.startsWith('home/')
);

// 2. Sort by frontmatter.order
const sorted = sections.sort((a, b) => a.data.order - b.data.order);

// 3. Map to components
const sectionComponents = {
  'hero': Hero,
  'features': Features,
};
---

<BaseLayout>
  {sorted.map((section) => {
    const Component = sectionComponents[section.slug.split('-')[1]];
    return Component ? <Component data={section.data} /> : null;
  })}
</BaseLayout>
```

## Implementation Workflow (Pencil.dev Designs)

1. **Analyze** → Identify sections, UI components, and data structure
2. **Schema** → Define/update `content/config.ts`
3. **Content** → Create `.md` files with design data
4. **UI Components** → Create/reuse atomic components
5. **Section Component** → Create component that consumes content
6. **Page Integration** → Connect in corresponding page
7. **Polish** → Responsive, accessibility, animations

### Component Checklist

- [ ] Typed props with interface
- [ ] Sensible default values
- [ ] Responsive (mobile-first)
- [ ] Accessibility (aria-labels, semantics)
- [ ] States (hover, focus, active)
- [ ] Dark mode ready (if applicable)

## Strict Rules

### ❌ NEVER

- Hardcode text in components (always from .md or props)
- Use `any` in TypeScript
- Inline styles except for dynamic values
- Fetch data in UI components
- Business logic in presentation components
- Import unoptimized assets (use `astro:assets`)
- Ignore TypeScript errors

### ✅ ALWAYS

- Define schema before creating content
- Use path aliases (`@/components/...`)
- Keep components small and focused (<100 lines ideal)
- Name component files in PascalCase
- Extract constants and magic numbers
- Comment non-obvious architectural decisions
- Validate with `astro check` before commit

## Implementation Response Template

When implementing a section/component, respond with:

```markdown
## 📍 Implementation: [Name]

**Files created/modified:**
- `src/content/sections/[page]/[file].md`
- `src/components/[type]/[Component].astro`

**Schema (if new):**
[schema code]

**Architecture notes:**
- [Decisions made]
- [Trade-offs considered]

**TODO (if applicable):**
- [ ] Pending for next iteration
```

## References

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Pencil Design Specs](https://pencil.dev)
