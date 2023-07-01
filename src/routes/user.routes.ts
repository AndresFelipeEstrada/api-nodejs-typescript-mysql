import { Router } from 'express'
import { getUsers, getOneUser, createUser, updateUser, deleteUser } from '../controllers/user.controller'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getOneUser)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter
