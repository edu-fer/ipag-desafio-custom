import { Order } from '@models/order';
import { singleton } from 'tsyringe';

@singleton()
export class CreateOrderUseCase {
  async execute(order: Order) {
    return 1;
  }
}
