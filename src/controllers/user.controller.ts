import { Request, Response } from 'express'
import { getItems, createdItem, getOneItem, updateItem, deletedUser, login } from '../services/user.service'
import { createUserType } from '../dto/user.dto'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await getItems()

    if (!response) {
      return res.status(400).json({ message: 'no se encontraron usuarios' })
    }

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await getOneItem(Number(id))

    if (user === 'USER_NOT_FOUND') return res.status(404).json({ message: 'usuario no encontrado' })

    return res.status(200).json(user)
  } catch (error) {
    return console.log('error al obtener un usuairo', error.message)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { nombre, profesion, telefono, correo, password, descripcion, categoria }:createUserType = req.body

    const newUser = {
      nombre,
      profesion,
      telefono,
      correo,
      password,
      descripcion,
      imagen: req.file.filename,
      categoria
    }

    const user = await createdItem(newUser)

    if (user === 'USER_EXIST') {
      return res.status(400).json({ message: 'El usuario ya esta registrado' })
    }

    return res.json(user)
  } catch (error) {
    return console.log('error al crear usuario', error)
  }
}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const newData = req.body

    const userUpdated = await updateItem(Number(id), newData)

    return res.status(200).json(userUpdated)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleteUser = await deletedUser(Number(id))

    if (deleteUser === 'USER_NOT_EXIST') return res.status(404).json({ message: 'el usuario no existe' })

    return res.status(202).json(deleteUser)
  } catch (error) {
    return console.log('error al eliminar usuario', error.message)
  }
}

export const loginUser = async ({ body }:Request, res:Response) => {
  try {
    const { correo, password } = body
    const user = await login({ correo, password })

    if (user === 'PASSWORD_INCORRECT' || user === 'USER_NOT_FOUND') {
      return res.status(403).json(user)
    }

    return res.status(200).json(user)
  } catch (error) {
    return console.log('error al iniciar sesion', error)
  }
}
