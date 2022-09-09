import { Request, Response } from 'express';

const express = require('express');

const app = express();
const db = require('./queries');

const port = 3000;


app.get('/', (request: Request, response: Response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/test', (request:Request, response:Response) => {
  response.send('test output');
});

app.get('/users', db.getUsers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
