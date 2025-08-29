// src/middlewares/validate.ts
import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodObject } from 'zod';
import { formatZodError } from '../utils/formatZodError';

export const customZodErrorValidate =
  (schema: ZodObject, source: 'body' | 'query' | 'params' = 'body') =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        code: 'VALIDATION_ERROR',
        message: 'Erro de validação nos campos enviados',
        errors: formatZodError(result.error as ZodError),
      });
    }

    // sobrescreve os dados com o parseado (já validado e sanitizado)
    req[source] = result.data;

    return next();
  };
