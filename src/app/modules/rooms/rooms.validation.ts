import { z } from 'zod';

export const createRoomSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    price: z
      .number({ required_error: 'Price is required' })
      .min(0, { message: 'Price must be a positive number' }),
    maxPeople: z
      .number({ required_error: 'Max People is required' })
      .min(1, { message: 'Max People must be at least 1' }),
    desc: z.string({ required_error: 'Description is required' }),
    roomNumbers: z
      .array(
        z.object({
          number: z
            .number({ required_error: 'Room number is required' })
            .min(1, { message: 'Room number must be a positive number' }),
          unavailableDates: z
            .array(z.string(), { invalid_type_error: 'Invalid date format' })
            .optional(),
        }),
      )
      .nonempty({ message: 'At least one room number is required' }),
  }),
});

export const roomValidations = {
  createRoomSchema,
};
