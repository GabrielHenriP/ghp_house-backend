import { Router } from 'express';
import multer from 'multer';
import upoloadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';

const routes = Router();
const upload = multer(upoloadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.get('/houses', HouseController.index);
routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', DashboardController.show)

export default routes;
