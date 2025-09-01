import { z } from 'zod';

export const getOrderValidation = z.object({
  orderId: z.coerce.number().int(),
});
export type GetOrderType = z.infer<typeof getOrderValidation>;
