import { singleton } from 'tsyringe';

@singleton()
export class CreateOrderUseCase {
  async execute(order: any) {
    return '1234';
  }
}
