import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { roomServices } from './rooms.service';


const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await roomServices.createRoom(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await roomServices.getAllRooms(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Rooms retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await roomServices.getSingleRoom(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await roomServices.deleteRoom(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await roomServices.updateRoom(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const roomControllers = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  deleteRoom,
  updateRoom,
};
