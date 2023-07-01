import { Request, Response } from 'express'
import { getItem, createdItem } from '../services/user.service'

export const getUsers = async (req:Request, res:Response) => {
  try {
    const response = await getItem()

    if (!response) {
      res.status(400).json({ message: 'no se encontraron usuarios' })
    }
    return res.status(200).json(response)
  } catch (error) {
    console.log('getUser error', error.message)
  }
}

export const getOneUser = async (req:Request, res:Response) => {

}
export const createUser = async (req:Request, res:Response) => {
  try {
    const newUser = await createdItem(req.body)
    return res.status(200).json(newUser)
  } catch (error) {
    console.log('error al crear usuario', error.message)
  }
}
export const updateUser = (req:Request, res:Response) => {}
export const deleteUser = (req:Request, res:Response) => {}
