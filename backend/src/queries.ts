// eslint-disable-next-line import/no-import-module-exports
import { Request, Response } from 'express';
// eslint-disable-next-line import/no-import-module-exports
import dotenv from 'dotenv';

dotenv.config(); // Reads .env file and makes it accessible via process.env

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10)
});

const getUsers = (request: Request, response: Response) => {
  pool.query(
    'SELECT * FROM users ORDER BY id ASC',
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = { getUsers };
