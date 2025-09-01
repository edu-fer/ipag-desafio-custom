import { ordersRoutes } from '@http/order/routes.js';
import { Router } from 'express';

export const routes = Router();

routes.use('/orders', ordersRoutes);
