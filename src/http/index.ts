import { swaggerSpec } from '@config/swagger';
import { routes } from '@http/routes';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';

export const app: Application = express();
app.use(express.json());
app.use('/api/v1', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
