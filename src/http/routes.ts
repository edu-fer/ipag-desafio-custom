import { Router } from "express";
import {ordersRoutes} from './order/routes.js'

export const routes = Router();

routes.use('/orders', ordersRoutes)