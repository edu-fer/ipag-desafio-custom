import { createOrderIndex } from '@http/order/useCases/createOrder';
import { createOrderValidation } from '@http/order/useCases/createOrder/createOrderValidation';
import { getOrderByIdIndex } from '@http/order/useCases/getOrderById';
import { getOrderValidation } from '@http/order/useCases/getOrderById/getOrderByIdValidation';
import { listOrdersIndex } from '@http/order/useCases/listOrders';
import { orderSummaryIndex } from '@http/order/useCases/orderSummary';
import { updateStatusOrderIndex } from '@http/order/useCases/updateStatusOrder';
import { customZodErrorValidate } from '@middlewares/customZodErrorValidate';
import { Router } from 'express';

export const ordersRoutes = Router();

ordersRoutes.post('/', customZodErrorValidate(createOrderValidation), createOrderIndex);
ordersRoutes.get(
  '/:orderId',
  customZodErrorValidate(getOrderValidation, 'params'),
  getOrderByIdIndex
);
ordersRoutes.put('/:orderId/status', updateStatusOrderIndex);
ordersRoutes.get('/', listOrdersIndex);
ordersRoutes.get('/summary', orderSummaryIndex);
