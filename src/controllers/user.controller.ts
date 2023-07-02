import { Request, Response } from 'express'
import { getItem, createdItem, getOneItem } from '../services/user.service'
import { Categoria } from '../types'

export const getUsers = async (req:Request, res:Response) => {
  try {
    const response = await getItem()

    if (!response) {
      return res.status(400).json({ message: 'no se encontraron usuarios' })
    }

    return res.status(200).json(response)
  } catch (error) {
    return console.log('getUser error', error.message)
  }
}

export const getOneUser = async (req:Request, res:Response) => {
  try {
    const { id } = req.params
    const user = await getOneItem(Number(id))
    return res.json(user)
  } catch (error) {
    return console.log('error al obtener un usuairo', error.message)
  }
}

export const createUser = async (req:Request, res:Response) => {
  try {
    const { nombre, profesion, telefono, correo, password, descripcion, imagen, categoria }:{nombre:string, profesion:string, telefono:string, correo:string, password:string, descripcion:string, imagen:string, categoria:Categoria} = req.body

    const newUser = await createdItem({
      nombre,
      profesion,
      telefono,
      correo,
      password,
      descripcion,
      imagen,
      categoria
    })
    return res.json(newUser)
  } catch (error) {
    return console.log('error al crear usuario', error.message)
  }
}
export const updateUser = (req:Request, res:Response) => {}
export const deleteUser = (req:Request, res:Response) => {}
