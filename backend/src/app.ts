/* eslint-disable no-console */

import express, { Request, Response } from 'express'
import compression from 'compression'
import path from 'path'
import dotenv from 'dotenv'

import db from './sequelize'
import UserModel from './models/user'

const app = express()

app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

dotenv.config()

const port = parseInt(process.env.PORT || '3000', 10)

app.get('/', (request: Request, response: Response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', (request: Request, response: Response) => {
    UserModel.findAll()
        .then((result) => response.json(result))
        .catch((error) => {
            console.log(error)
            return response.json({
                message: 'Unable to fetch records!',
            })
        })
})

app.post('/users', (request: Request, response: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    UserModel.create(request.body)
        .then((result) => response.json(result))
        .catch((error) => {
            console.log(error)
            return response.json({ message: 'Can not create record' })
        })
})

const initApp = async () => {
    console.log('Testing the database connection..')
    try {
        await db.authenticate()
        console.log('Connection has been established successfully.')

        await UserModel.sync()

        app.listen(port, () => {
            console.log(`Server is up and running at: http://localhost:${port}`)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
initApp()
