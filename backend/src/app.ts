import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import path from 'path'
import dotenv from 'dotenv'

import { getUsers } from './queries'

const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

dotenv.config()

const port = parseInt(process.env.PORT || '3000', 10)

app.get('/', (request: Request, response: Response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/test', (request: Request, response: Response) => {
    response.send('test output')
})

app.get('/users', getUsers)

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on port ${port}.`)
    // eslint-enable no-console
})

export default app
