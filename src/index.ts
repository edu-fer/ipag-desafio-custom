import 'reflect-metadata';

import { app } from '@http/index';
process.env.TZ = 'America/Sao_Paulo';
app.listen(3000);
