import { Request, Response } from 'express';
import { OrderRepository } from '../../../../core/repositories/orderRepository';
import { CreateOrderType, createOrderValidation } from './createOrderValidation';
import { container } from 'tsyringe';
import { CreateOrderUseCase } from './createOrderUseCase';
import { z } from 'zod';
import { formatZodError } from '../../../../core/utils/formatZodError';

export async function createOrderIndex(req: Request, res: Response): Promise<Response> {
  const body = req.body;
  const orderValidated = createOrderValidation.safeParse(body);
  if (!orderValidated.success) {
       return res.status(400).json({
      success: false,
      code: "VALIDATION_ERROR",
      message: "fields are wrong!",
      errors: formatZodError(orderValidated.error),
    });
  }
  const createOrderUseCase = container.resolve(CreateOrderUseCase);
  const orderId = await createOrderUseCase.execute(orderValidated.data);
  return res.status(200).json({ erros: null, success: true, data: { orderId } });
}
