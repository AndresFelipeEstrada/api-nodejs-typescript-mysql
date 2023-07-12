import { Router } from 'express'
import { getUsers, getOneUser, createUser, updateUser, deleteUser, loginUser } from '../controllers/user.controller'
import { upload } from '../middlewares/multer'
import { schemaValidation } from '../middlewares/schema.validate'
import loginSchema from '../schemas/login'
import updateUserSchema from '../schemas/update.user'
const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getOneUser)
userRouter.post('/', upload.single('imagen'), createUser)
userRouter.post('/login', schemaValidation(loginSchema), loginUser)
userRouter.put('/:id', schemaValidation(updateUserSchema), updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter
