import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { roomValidations } from './rooms.validation';
import { roomControllers } from './rooms.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(roomValidations.createRoomSchema),
  roomControllers.createRoom,
);
router.get('/', roomControllers.getAllRooms);
router.get('/:id', roomControllers.getAllRooms);
router.delete('/:id', roomControllers.deleteRoom);
router.patch(
  '/:id',
  roomControllers.updateRoom,
);

export const roomRoutes = router;
