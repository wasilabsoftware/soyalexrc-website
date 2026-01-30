# Alex Rodriguez Portfolio

A modern, performant portfolio website built with [Astro](https://astro.build/) featuring a dark developer-focused aesthetic, content collections for easy content management, and a component-driven architecture.

![Astro](https://img.shields.io/badge/Astro-5.17.1-FF5D01?style=flat-square&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features

- **Zero JavaScript by Default** - Astro's island architecture ships minimal JS
- **Content Collections** - Type-safe content management with Zod schemas
- **Responsive Design** - Mobile-first approach with breakpoints at 768px and 1024px
- **Dark Theme** - Developer-focused dark UI with cyan accent colors
- **Component Library** - Reusable UI components following BEM methodology
- **Dynamic Routes** - Project and article detail pages with `[slug]` routing
- **Contact Modal** - Multi-state contact form (form/success/error states)
- **Accessible** - Semantic HTML, ARIA attributes, keyboard navigation

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Astro 5](https://astro.build/) |
| Language | TypeScript (strict mode) |
| Styling | Scoped CSS + CSS Custom Properties |
| Fonts | Inter + JetBrains Mono |
| Content | Markdown + Astro Content Collections |

## Project Structure

```
src/
├── components/
│   ├── layouts/         # Page layouts (BaseLayout, Header, Footer)
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   └── ui/              # Atomic components (Button, Card, Tag, etc.)
├── content/
│   ├── config.ts        # Zod schemas for content collections
│   ├── hero/            # Hero section content
│   ├── about/           # About section content
│   ├── projects/        # Projects section content
│   ├── project-detail/  # Individual project pages
│   ├── blog/            # Blog section content
│   ├── article-detail/  # Individual article pages
│   ├── experience/      # Experience section content
│   └── contact/         # Contact section content
├── pages/
│   ├── index.astro      # Homepage
│   ├── projects/
│   │   ├── index.astro  # All projects listing
│   │   └── [slug].astro # Project detail page
│   └── blog/
│       ├── index.astro  # All articles listing
│       └── [slug].astro # Article detail page
├── styles/
│   ├── global.css       # CSS reset + utilities
│   └── tokens.css       # Design tokens (colors, spacing, typography)
└── types/
    └── index.ts         # Global TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18.14.1 or higher
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/soyalexrc/portfolio-web.git
cd portfolio-web

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:4321
```

### Build & Preview

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Type Checking

```bash
# Run TypeScript type checking
npx astro check

# Generate types for content collections
npx astro sync
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with Hero, About, Projects, Experience, Blog, Contact sections |
| `/projects` | All projects listing with filter functionality |
| `/projects/[slug]` | Project detail page with overview, challenges, process, results |
| `/blog` | All articles listing with category filters |
| `/blog/[slug]` | Article detail page with markdown content rendering |

## Component Architecture

### UI Components (`src/components/ui/`)

Atomic, reusable components with typed props:

- **Button** - Primary, secondary, ghost, outline variants with modal trigger support
- **Card** - Generic card container
- **Tag** - Label/badge component with size variants
- **ArticleCard** - Blog article preview card with "Read article" link
- **ProjectCard** - Project preview card with App Store, GitHub, Live Demo links
- **ContactModal** - Multi-state contact form modal (form/success/error)
- **SectionHeader** - Consistent section titles with label and subtitle
- **FilterPills** - Category filter buttons
- **Breadcrumb** - Navigation breadcrumb
- **ArticleShare** - Twitter/LinkedIn share buttons

### Section Components (`src/components/sections/`)

Page-specific sections that consume content collections:

- **Hero** - Landing hero with animated elements
- **About** - Bio with skills and profile image
- **Projects** - Featured projects grid
- **Experience** - Work history timeline
- **Blog** - Recent articles grid
- **Contact** - Contact information and social links
- **ProjectDetailHero** - Project hero with meta info and CTAs
- **ProjectOverview** - Two-column layout with tech stack
- **ProjectChallenge** - Challenge cards with icons
- **ProjectProcess** - Timeline with numbered steps
- **ProjectTechDecisions** - 2x2 grid of decision cards
- **ProjectResults** - Stats row + testimonial quote
- **ProjectGallery** - 2x2 image grid
- **ProjectNavigation** - Previous/Next project navigation
- **ArticleHero** - Centered hero with author info and tags
- **ArticleContent** - Prose styles for markdown rendering

### Layout Components (`src/components/layouts/`)

- **BaseLayout** - HTML document structure, meta tags, fonts
- **Header** - Sticky navigation with mobile menu toggle
- **Footer** - Site footer with social links (default/minimal variants)

## Content Collections

All content is managed through Astro Content Collections with Zod schemas for type safety.

### Adding a New Project

Create a new file in `src/content/project-detail/`:

```markdown
---
title: "Project Name"
description: "Brief project description"
category: "Web App"
tags: ["React", "TypeScript", "Node.js"]
heroImage: "/images/project-hero.jpg"
links:
  live: "https://example.com"
  github: "https://github.com/..."
overview:
  label: "// OVERVIEW"
  title: "Project Overview"
  paragraphs:
    - "First paragraph describing the project..."
  techStack:
    title: "Tech Stack"
    items: ["React", "Node.js", "PostgreSQL"]
# Optional sections: challenge, process, techDecisions, results, gallery, navigation
---
```

### Adding a New Article

Create a new file in `src/content/article-detail/`:

```markdown
---
title: "Article Title"
description: "Article description for SEO"
date: "Jan 15, 2024"
readTime: "8 min read"
tags: ["JavaScript", "Tutorial"]
author:
  name: "Alex Rodriguez"
  role: "Full-Stack Developer"
shareEnabled: true
---

Your markdown content here with support for:
- **Bold** and *italic* text
- `inline code` and code blocks
- > Blockquotes
- Lists and more...
```

## Design Tokens

The design system uses CSS custom properties defined in `src/styles/tokens.css`:

### Colors

```css
--color-primary: #22D3EE;        /* Cyan accent */
--color-bg-primary: #0A0F1C;     /* Dark background */
--color-bg-secondary: #0F172A;   /* Slightly lighter */
--color-surface: #0F172A;        /* Card backgrounds */
--color-text-primary: #FFFFFF;   /* Primary text */
--color-text-secondary: #94A3B8; /* Secondary text */
--color-text-muted: #64748B;     /* Muted text */
```

### Typography

```css
--font-sans: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Font sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
```

### Border Radius

```css
--radius-sm: 0.25rem;  /* 4px */
--radius-md: 0.5rem;   /* 8px */
--radius-lg: 0.75rem;  /* 12px */
--radius-xl: 1rem;     /* 16px */
--radius-full: 9999px; /* Pill shape */
```

## Customization

### Updating Personal Information

1. Edit content files in `src/content/` directories
2. Update navigation links in `src/components/layouts/Header.astro`
3. Update footer links in `src/components/layouts/Footer.astro`
4. Update meta tags in `src/components/layouts/BaseLayout.astro`

### Adding New Sections

1. Create a content collection schema in `src/content/config.ts`
2. Create content files in `src/content/[collection-name]/`
3. Create a section component in `src/components/sections/`
4. Import and use in the appropriate page

### Modifying the Contact Form

The contact form modal is in `src/components/ui/ContactModal.astro`. To connect it to a backend:

1. Find the form submission handler in the `<script>` section
2. Replace the simulated API call with your actual endpoint
3. Handle success/error states appropriately

```javascript
// Example: Connect to your API
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

if (response.ok) {
  setState('success');
} else {
  setState('error');
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |
| `npx astro check` | Verify TypeScript types |
| `npx astro sync` | Generate content collection types |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Zero JS by default** for static content
- **Lazy loading** for images
- **Preconnect** for external fonts
- **Scoped CSS** prevents style conflicts and reduces bundle size

## Deployment

This site can be deployed to any static hosting provider:

- **Vercel**: `vercel`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Configure in repository settings
- **Cloudflare Pages**: Connect repository in dashboard

For SSR features, additional adapters may be required. See [Astro deployment docs](https://docs.astro.build/en/guides/deploy/).

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

- Design inspired by [Pencil.dev](https://pencil.dev)
- Built with [Astro](https://astro.build/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons are inline SVGs for performance

---

Made with Astro by Alex Rodriguez
