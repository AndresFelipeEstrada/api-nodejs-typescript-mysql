import { Router } from 'express'
import { getUsers, getOneUser, createUser, updateUser, deleteUser, loginUser } from '../controllers/user.controller'
import { upload } from '../middlewares/multer'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getOneUser)
userRouter.post('/', upload.single('imagen'), createUser)
userRouter.post('/login', loginUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter
