import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.routes'

const app = express()
dotenv.config()

// Config
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Middlewares

// Routes

app.use('/api/users', userRouter)

export default app
