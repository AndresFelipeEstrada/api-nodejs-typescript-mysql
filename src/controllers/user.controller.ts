import { Request, Response } from 'express'
import { getItems, createdItem, getOneItem, updateItem } from '../services/user.service'
import { createUserType } from '../types'

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
    return console.log('error al crear usuario', error.message)
  }
}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await updateItem(Number(id), req.body)
  } catch (error) {
    console.log('error al actualizar usuarios', error.message)
  }
}
export const deleteUser = (req: Request, res: Response) => { }
