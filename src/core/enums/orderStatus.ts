import z from 'zod';

export enum OrderStatus {
  PENDING = 'PENDING',
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  PAID = 'PAID',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
}
export const OrderStatusDescription: Record<OrderStatus, string> = {
  [OrderStatus.PENDING]: 'Pedido criado, aguardando pagamento',
  [OrderStatus.WAITING_PAYMENT]: 'Aguardando confirmação de pagamento',
  [OrderStatus.PAID]: 'Pagamento confirmado',
  [OrderStatus.PROCESSING]: 'Pedido em processamento',
  [OrderStatus.SHIPPED]: 'Pedido enviado',
  [OrderStatus.DELIVERED]: 'Pedido entregue ao cliente',
  [OrderStatus.CANCELED]: 'Pedido cancelado',
};

export const orderStatusSchema = z.enum(OrderStatus);

export type OrderStatusZod = z.infer<typeof orderStatusSchema>;

export const isValidNewOrderStatus = (
  currentOrderStatus: OrderStatus,
  newOrderStatus: OrderStatus
): boolean => {
  const orderStatusValidSequence = Object.values(OrderStatus);
  const currentIndex = orderStatusValidSequence.findIndex(value => value === currentOrderStatus);
  const targetIndex = orderStatusValidSequence.findIndex(value => value === newOrderStatus);

  const IS_NEXT_OF_SEQUENCE_VALID = targetIndex > currentIndex && currentIndex + 1 === targetIndex;
  const IS_CANCELED_VALID = currentIndex < 4 && targetIndex === orderStatusValidSequence.length - 1;

  return IS_NEXT_OF_SEQUENCE_VALID || IS_CANCELED_VALID;
};
