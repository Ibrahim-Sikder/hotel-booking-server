import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const BlogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
  },
  sub_title: {
    type: String,
    required: [true, 'Subtitle is required'],
  },
  category: {
    type: [String],
    required: [true, 'At least one category is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  meta_title: {
    type: String,
    required: [true, 'Meta title is required'],
  },
  meta_description: {
    type: String,
    required: [true, 'Meta title is required'],
  },
  meta_keywords: {
    type: [String],
    required: [true, 'Meta title is required'],
  },
  
});

export const Blog = model<TBlog>('Blog', BlogSchema);
