import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import dbService from './db/db.service';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

dbService.connectTo.mongo();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});