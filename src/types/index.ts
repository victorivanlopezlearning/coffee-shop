import { z } from 'astro:content';

const imageSchema = z.object({
  url: z.string().url(),
  width: z.number(),
  height: z.number(),
});

export const baseWPSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: z.object({
    thumbnail: imageSchema,
    medium: imageSchema,
    medium_large: imageSchema,
    large: imageSchema,
    full: imageSchema,
  }),
  acf: z.object({
    tagline: z.string()
  }),
});