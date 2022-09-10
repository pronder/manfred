/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
})

// eslint-disable-next-line import/prefer-default-export
export const getUsers = (request: Request, response: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    pool.query(
        'SELECT * FROM users ORDER BY id ASC',
        (error: Error, results) => {
            if (error) {
                throw error
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            response.status(200).json(results.rows)
        }
    )
}
