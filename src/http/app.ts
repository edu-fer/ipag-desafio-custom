import express, { Application } from "express";
import route from "./routes";

const app: Application = express();
app.use(express.json());
app.use('/api/v1', route);
export default app;