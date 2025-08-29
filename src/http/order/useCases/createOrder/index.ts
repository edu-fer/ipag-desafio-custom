import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { formatZodError } from '../../../../core/utils/formatZodError';
import { CreateOrderUseCase } from './createOrderUseCase';
import { createOrderValidation } from './createOrderValidation';

export async function createOrderIndex(req: Request, res: Response): Promise<Response> {
  const body = req.body;
  const orderValidated = createOrderValidation.safeParse(body);
  if (!orderValidated.success) {
    return res.status(400).json({
      success: false,
      code: 'VALIDATION_ERROR',
      message: 'fields are wrong!',
      errors: formatZodError(orderValidated.error),
    });
  }
  const createOrderUseCase = container.resolve(CreateOrderUseCase);
  const orderId = await createOrderUseCase.execute(orderValidated.data);

  return res.status(201).json({
    success: true,
    code: 'ORDER_CREATED',
    message: 'Pedido criado com sucesso',
    data: { orderId },
  });
}
