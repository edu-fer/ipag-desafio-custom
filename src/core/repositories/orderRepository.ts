import { CreateOrderType } from '@http/order/useCases/createOrder/createOrderValidation';
import { Order } from '@models/order';
import { query } from '../db/connexion';
import { AbstractRepository } from './abstractRepository';

export class OrderRepository extends AbstractRepository<Order> {
  constructor() {
    super('orders');
  }
  async create(data: CreateOrderType): Promise<Order> {
    const orderId = 1;
    const orderNumber = 2;
    const rows = await query<Order>(
      `INSERT INTO orders (
        order_id,
        order_number,
        customer_id,
        total_value
        )
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [orderId, orderNumber, data.customer.id, data.order.total_value]
    );
    return rows[0];
  }
}
