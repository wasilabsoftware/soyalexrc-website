import { defineCollection, z } from 'astro:content';

// Shared schemas
const ctaSchema = z.object({
  text: z.string(),
  href: z.string(),
  variant: z.enum(['primary', 'secondary', 'ghost', 'outline']).default('primary'),
  icon: z.string().optional(),
});

// Hero section schema
const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    visible: z.boolean().default(true),
    availabilityTag: z.string(),
    greeting: z.string(),
    name: z.string(),
    role: z.string(),
    description: z.string(),
    ctas: z.array(ctaSchema),
    codeEditor: z.object({
      filename: z.string(),
      lines: z.array(z.object({
        content: z.string(),
        color: z.enum(['cyan', 'gray', 'yellow', 'green', 'white']).default('gray'),
      })),
    }),
  }),
});

// About section schema
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    visible: z.boolean().default(true),
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    paragraphs: z.array(z.string()),
    techStack: z.array(z.object({
      category: z.string(),
      technologies: z.array(z.string()),
    })),
  }),
});

// Projects section schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    visible: z.boolean().default(true),
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    viewAllText: z.string(),
    viewAllHref: z.string(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()),
      liveUrl: z.string().optional(),
      githubUrl: z.string().optional(),
      stars: z.string().optional(),
    })),
  }),
});

// Experience section schema
const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    visible: z.boolean().default(true),
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({
      period: z.string(),
      jobTitle: z.string(),
      company: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      isCurrent: z.boolean().default(false),
    })),
  }),
});

// Blog section schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    visible: z.boolean().default(true),
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    viewAllText: z.string(),
    viewAllHref: z.string(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      readTime: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()),
      href: z.string(),
    })),
  }),
});

// Contact section schema
const contactCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    visible: z.boolean().default(true),
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    email: z.object({
      label: z.string(),
      value: z.string(),
    }),
    location: z.object({
      label: z.string(),
      value: z.string(),
    }),
    socialLinks: z.array(z.object({
      name: z.string(),
      icon: z.string(),
      href: z.string(),
    })),
    cta: ctaSchema,
  }),
});

// Project link schema for all-projects page
const projectLinkSchema = z.object({
  type: z.enum(['live', 'github', 'appstore', 'npm', 'stars']),
  label: z.string(),
  href: z.string().optional(),
  count: z.string().optional(),
});

// Project detail page schema (individual project pages)
const projectDetailCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Core info (required)
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),

    // Meta info
    year: z.string(),
    role: z.string(),
    duration: z.string(),
    client: z.string().optional(),

    // Hero section
    heroImage: z.string().optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),

    // Overview section (optional)
    overview: z.object({
      label: z.string().default('// PROJECT OVERVIEW'),
      title: z.string(),
      paragraphs: z.array(z.string()),
      techStack: z.array(z.string()),
    }).optional(),

    // Challenge section (optional)
    challenge: z.object({
      label: z.string().default('// THE CHALLENGE'),
      title: z.string(),
      subtitle: z.string().optional(),
      items: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }).optional(),

    // Process section (optional)
    process: z.object({
      label: z.string().default('// THE PROCESS'),
      title: z.string(),
      subtitle: z.string().optional(),
      steps: z.array(z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })),
    }).optional(),

    // Technical decisions section (optional)
    techDecisions: z.object({
      label: z.string().default('// TECHNICAL DECISIONS'),
      title: z.string(),
      subtitle: z.string().optional(),
      items: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }).optional(),

    // Results section (optional)
    results: z.object({
      label: z.string().default('// RESULTS & IMPACT'),
      title: z.string(),
      subtitle: z.string().optional(),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })),
      testimonial: z.object({
        quote: z.string(),
        authorName: z.string(),
        authorRole: z.string(),
      }).optional(),
    }).optional(),

    // Gallery section (optional)
    gallery: z.object({
      label: z.string().default('// PROJECT GALLERY'),
      title: z.string(),
      subtitle: z.string().optional(),
      images: z.array(z.string()),
    }).optional(),

    // Navigation (optional)
    navigation: z.object({
      previous: z.object({
        title: z.string(),
        slug: z.string(),
      }).optional(),
      next: z.object({
        title: z.string(),
        slug: z.string(),
      }).optional(),
    }).optional(),
  }),
});

// All projects page schema
const allProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    filters: z.array(z.object({
      label: z.string(),
      value: z.string(),
      isActive: z.boolean().default(false),
    })),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()),
      category: z.string(),
      slug: z.string().optional(),
      links: z.array(projectLinkSchema),
    })),
  }),
});

// All articles page schema
const allArticlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    subtitle: z.string(),
    filters: z.array(z.object({
      label: z.string(),
      value: z.string(),
      isActive: z.boolean().default(false),
    })),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      readTime: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()),
      category: z.string(),
      slug: z.string().optional(),
    })),
  }),
});

// Article detail page schema (individual blog posts)
const articleDetailCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Core info (required)
    title: z.string(),
    description: z.string(),
    date: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),

    // Author info
    author: z.object({
      name: z.string(),
      role: z.string(),
      avatar: z.string().optional(),
    }).default({
      name: 'Alex Rodriguez',
      role: 'Full-Stack Developer',
    }),

    // Optional hero image
    heroImage: z.string().optional(),

    // Share links (optional)
    shareEnabled: z.boolean().default(true),
  }),
});

export const collections = {
  'hero': heroCollection,
  'about': aboutCollection,
  'projects': projectsCollection,
  'experience': experienceCollection,
  'blog': blogCollection,
  'contact': contactCollection,
  'all-projects': allProjectsCollection,
  'project-detail': projectDetailCollection,
  'all-articles': allArticlesCollection,
  'article-detail': articleDetailCollection,
};
