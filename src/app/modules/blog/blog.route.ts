import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { BlogValidations } from './blog.validation';
import { blogControllers } from './blog.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(BlogValidations.createBlogValidation),
  blogControllers.createBlog,
);
router.get('/', blogControllers.getAllBlog);
router.get('/:id', blogControllers.getSingleBlog);
router.delete('/:id', blogControllers.deleteBlog);
router.patch(
  '/:id',
  validateRequest(BlogValidations.updateBlogValidation),
  blogControllers.updateBlog,
);

export const blogRoutes = router;
