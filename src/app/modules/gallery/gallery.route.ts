import { Router } from 'express';
import { imageGalleryController } from './gallery.controller';

import {
  deleteImageFromGallerySchema,
  uploadImageToGallerySchema,
  createFolderSchema,
} from './gallery.validation';
import { validateRequest } from '../../../utils/validateRequest';
import { upload } from '../../../utils/sendImageToCloudinary';
import { auth } from '../../middlewares/auth';

const router = Router();

router.get('/all', auth('admin'), imageGalleryController.getAllImages);
router.get(
  '/folder/:folder',
  auth('admin'),
  imageGalleryController.getImagesByFolder,
);
router.post(
  '/upload',
  auth('admin'),
  upload.array('images'),
  validateRequest(uploadImageToGallerySchema),
  imageGalleryController.createImage,
);

router.post(
  '/delete',
  auth('admin'),
  validateRequest(deleteImageFromGallerySchema),
  imageGalleryController.deleteImage,
);

router.get('/folders', auth('admin'), imageGalleryController.getFolders);

router.post(
  '/folder',
  auth('admin'),
  validateRequest(createFolderSchema),
  imageGalleryController.createFolder,
);

router.delete(
  '/folder/:id',
  auth('admin'),
  imageGalleryController.deleteFolder,
);

export const imageGalleryRoutes = router;
