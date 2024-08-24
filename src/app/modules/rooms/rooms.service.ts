/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TRoom } from './rooms.interface';
import { Room } from './rooms.model';
import { roomSearchableFields } from './rooms.constant';


const createRoom = async (payload: TRoom) => {
  const result = await Room.create(payload);
  return result;
};

const getAllRooms = async (query: Record<string, unknown>) => {
  const roomQuery = new QueryBuilder(Room.find(), query)
    .search(roomSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await roomQuery.countTotal();
  const rooms = await roomQuery.modelQuery;

  return {
    meta,
    rooms,
  };
};

const getSingleRoom = async (id: string) => {
  const result = await Room.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND,'Room not found');
  }
  return result;
};

const updateRoom = async (id: string, payload: Partial<TRoom>) => {
  const result = await Room.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND,'Room not found');
  }
  return result;
};

const deleteRoom = async (id: string) => {
  const result = await Room.deleteOne({ _id: id });
  if (!result.deletedCount) {
    throw new AppError(httpStatus.NOT_FOUND,'Room not found');
  }
  return result;
};

export const roomServices = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom,
};
