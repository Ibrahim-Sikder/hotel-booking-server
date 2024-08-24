/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { hotelRoutes } from '../modules/hotels/hotel.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { roomRoutes } from '../modules/rooms/rooms.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },

  {
    path: '/hotel',
    route: hotelRoutes,
  },
  {
    path: '/room',
    route: roomRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
