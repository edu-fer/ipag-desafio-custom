import { routes } from '@http/routes';
import express, { Application } from 'express';

export const app: Application = express();
app.use(express.json());
app.use('/api/v1', routes);
