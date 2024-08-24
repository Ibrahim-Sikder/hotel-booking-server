/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import { blogSearchabelField } from './blog.constant';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlog = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(blogSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await blogQuery.countTotal();
  const blogs = await blogQuery.modelQuery;

  return {
    meta,
    blogs,
  };
};
const getSinigleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};
const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.deleteOne({ _id: id });

  return result;
};

export const blogServices = {
  createBlog,
  getAllBlog,
  getSinigleBlog,
  updateBlog,
  deleteBlog,
};
