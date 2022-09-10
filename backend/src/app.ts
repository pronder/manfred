import { Request, Response } from 'express';
import dotenv from 'dotenv';

const express = require('express');

const app = express();
const db = require('./queries');

dotenv.config(); // Reads .env file and makes it accessible via process.env

const port = parseInt(process.env.PORT || '3000', 10);

app.get('/', (request: Request, response: Response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/test', (request: Request, response: Response) => {
  response.send('test output');
});

app.get('/users', db.getUsers);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`App running on port ${port}.`);
  /* eslint-enable no-console */
});
