import { Router } from 'express';
import multer from 'multer';
import upoloadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const routes = Router();
const upload = multer(upoloadConfig);

routes.post('/sessions', SessionController.store)

routes.post('/houses', upload.single('thumbnail'), HouseController.store)

export default routes;
