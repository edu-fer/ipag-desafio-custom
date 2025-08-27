import express, {Application, Router} from 'express';

const app: Application = express();

const routes = Router();
routes.get('/orders', (req, res) => {
  console.log(req);
  return res.status(200).json({ success: true });
})

app.use(express.json());
app.use('/api/v1', routes)

app.listen(3000);
