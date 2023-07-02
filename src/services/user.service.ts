import { DeepPartial } from 'typeorm'
import { User } from '../entity/User'

export const getItem = async () => {
  const user = await User.find({})

  return user
}

export const getOneItem = async (id:number) => {
  const userFound = User.findOneBy({ id })

  if (!userFound) throw new Error('Error al encontrar usuario')

  return userFound
}

export const createdItem = async (newUser:DeepPartial<User>) => {
  // const data = User.create(newUser)
  // console.log(data)

  // // data.save()
  // return data
}

export const updateItem = async (id:number, user:User) => {
  const getUser = await User.findOneBy({ id })

  if (!getUser) throw new Error('Error al encontrar usuario')

  const updateUser = {
    ...getUser,
    user
  }

  const updatedUser = await User.update(id, updateUser)
  return updatedUser
}
