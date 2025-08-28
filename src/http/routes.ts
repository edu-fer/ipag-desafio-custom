import { Router } from "express";
import ordersRoutes from './order/routes.js'

const route = Router();

route.use('/orders', ordersRoutes)

export default route;