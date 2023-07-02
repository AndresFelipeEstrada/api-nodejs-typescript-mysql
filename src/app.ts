import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRouter from './routes/user.routes'
import { upload } from './middlewares/multer'

const app = express()

// Config
app.use(express.json({ limit: '100mb' }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '100mb', extended: true }))

// Middlewares

// Routes

app.use('/api/users', userRouter)

app.post('/', upload.single('imagen'), (req, res) => {
  const file = req.file
  const body = req.body
  console.log(file)
  console.log(body)
  res.send('foto enviada al servidor')
})

export default app
