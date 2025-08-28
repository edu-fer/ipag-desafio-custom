import { Router } from "express";
import { createOrderIndex } from "./useCases/createOrder";
import { getOrderByIdIndex } from "./useCases/getOrderById";
import { orderSummaryIndex } from "./useCases/orderSummary";
import { updateStatusOrderIndex } from "./useCases/updateStatusOrder";
import { listOrdersIndex } from "./useCases/listOrders";

export const ordersRoutes = Router();

ordersRoutes.post('/', createOrderIndex);
ordersRoutes.get('/:orderId', getOrderByIdIndex);
ordersRoutes.put('/:orderId/status', updateStatusOrderIndex);
ordersRoutes.get('/', listOrdersIndex );
ordersRoutes.get('/summary', orderSummaryIndex);