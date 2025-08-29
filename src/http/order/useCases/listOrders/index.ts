import { Request, Response } from 'express';

export async function listOrdersIndex(req: Request, res: Response): Promise<Response> {
  return res.status(200).json({ success: true, msg: 'running from docker!!222' });
}
