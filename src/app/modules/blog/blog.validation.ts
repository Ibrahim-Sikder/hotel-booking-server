import { z } from 'zod';

export const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Blog title is required',
    }),
    sub_title: z.string({
      required_error: 'Subtitle is required',
    }),
    category: z.array(z.string()).min(1, 'At least one category is required'),
    description: z.string({
      required_error: 'Description is required',
    }),
    image: z.string({
      required_error: 'Image URL is required',
    }),
    meta_title: z.string({
      required_error: 'Meta title is required',
    }),
    meta_description: z.string({
      required_error: 'Meta description is required',
    }),
    meta_keywords: z
      .array(z.string())
      .min(1, 'At least one keyword is required'),
  }),
});
export const updateBlogValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    sub_title: z.string().optional(),
    category: z.array(z.string()).nonempty().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.array(z.string()).optional(),
  }),
});

export const BlogValidations = {
  createBlogValidation,
  updateBlogValidation,
};
