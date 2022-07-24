import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import dbService from './db/db.service';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

dbService.seedDb.mongo();
dbService.services.mongo.connect();


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});