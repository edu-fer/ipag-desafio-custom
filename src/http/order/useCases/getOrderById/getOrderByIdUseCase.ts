import { singleton } from 'tsyringe';

@singleton()
export class GetOrderUseCase {
  async execute(id: number) {
    return {
      id: 1,
      total_value: 150.0,
      items: [
        {
          product_name: 'Produto 1',
          quantity: 2,
          unit_value: 50.0,
        },
        {
          product_name: 'Produto 2',
          quantity: 1,
          unit_value: 50.0,
        },
      ],
    };
  }
}
