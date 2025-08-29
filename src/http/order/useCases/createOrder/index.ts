import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateOrderUseCase } from './createOrderUseCase';

export async function createOrderIndex(req: Request, res: Response): Promise<Response> {
  const createOrderUseCase = container.resolve(CreateOrderUseCase);
  const orderId = await createOrderUseCase.execute(req.body);

  return res.status(201).json({
    success: true,
    code: 'ORDER_CREATED',
    message: 'Pedido criado com sucesso',
    data: { id: orderId },
  });
}
