import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.routes'
import path from 'path'
import reviewRouter from './routes/review.routes'
import bodyParser from 'body-parser'

const app = express()

// Config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/static', express.static(path.join('uploads')))

// Middlewares

// Routes

app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)

// app.post('/', upload.single('imagen'), (req, res) => {
//   const file = req.file
//   const body = req.body
//   console.log(file)
//   console.log(body)
//   res.send('foto enviada al servidor')
// })

export default app
