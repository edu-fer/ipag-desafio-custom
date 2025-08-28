import { Request, Response } from 'express';

export async function getOrderByIdIndex(req: Request, res: Response): Promise<Response> {
  console.log(req);
  return res.status(200).json({ success: true });
}
