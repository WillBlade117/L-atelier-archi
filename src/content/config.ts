import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    
    completionDate: z.coerce.date(), 
    
    category: z.string().optional(),
    location: z.string().optional(),
    surface: z.string().optional(),
    
    coverImage: image(), 
    beforeImage: image().optional(),
    afterImage: image().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};