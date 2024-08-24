import * as zod from 'zod';

export const uploadImageToGallerySchema = zod.object({
  folder: zod.string({
    required_error: 'Folder is required',
    invalid_type_error: 'Folder must be a string',
  }),
});

export const deleteImageFromGallerySchema = zod.object({
  id: zod.string({
    required_error: 'Image ID is required',
    invalid_type_error: 'Image ID must be a string',
  }),
  public_id: zod.string({
    required_error: 'Public ID is required',
    invalid_type_error: 'Public ID must be a string',
  }),
});

export const createFolderSchema = zod.object({
  name: zod.string({
    required_error: 'Folder name is required',
    invalid_type_error: 'Folder name must be a string',
  }),
});
