import { GetOrderUseCase } from '@http/order/useCases/getOrderById/getOrderByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export async function getOrderByIdIndex(req: Request, res: Response): Promise<Response> {
  const getOrderUseCase = container.resolve(GetOrderUseCase);
  const order = await getOrderUseCase.execute(req.body);

  return res.status(200).json({
    success: true,
    code: 'ORDER_FOUND',
    message: 'Registro encontrado com sucesso.',
    data: { order },
  });
}
