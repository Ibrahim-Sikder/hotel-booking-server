import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { blogServices } from './blog.service';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.createBlog(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.getAllBlog(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await blogServices.getSinigleBlog(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await blogServices.deleteBlog(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await blogServices.updateBlog(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const blogControllers = {
  getAllBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
   createBlog,
};
