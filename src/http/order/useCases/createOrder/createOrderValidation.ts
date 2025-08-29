import { z } from 'zod';

export const createOrderValidation = z.object({
  customer: z.object({
    id: z.number().int(),
    name: z.string().trim(),
    document: z.string().trim(),
    email: z.email(),
    phone: z.string().trim(),
  }),
  order: z.object({
    total_value: z.number().nonnegative(),
    items: z
      .array(
        z.object({
          product_name: z.string().trim(),
          quantity: z.number().int().positive(),
          unit_value: z.number().nonnegative(),
        })
      )
      .min(1),
  }),
});
export type CreateOrderType = z.infer<typeof createOrderValidation>;
