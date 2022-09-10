import bodyParser from 'body-parser'
import compression from 'compression'
import path from 'path'
import express from 'express'

const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

export default app
