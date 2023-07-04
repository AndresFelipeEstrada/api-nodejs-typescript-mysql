import { DeepPartial } from 'typeorm'
import { User } from '../entity/User'

export const getItems = async () => {
  const user = await User.find({
    select: ['id', 'nombre', 'correo', 'profesion', 'telefono', 'descripcion', 'imagen', 'categoria']
  })

  return user
}

export const getOneItem = async (id:number) => {
  const userFound = await User.find({
    where: { id },
    relations: ['reviews'],
    select: ['id', 'nombre', 'correo', 'profesion', 'telefono', 'descripcion', 'imagen', 'categoria', 'reviews']
  })

  if (!userFound) return 'USER_NOT_FOUND'

  return userFound
}

export const createdItem = async (newUser:DeepPartial<User>) => {
  const userExist = await User.findOneBy({ correo: newUser.correo })

  if (userExist) return 'USER_EXIST'

  const createdUser = User.create(newUser)

  createdUser.save()

  return createdUser
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

export const deletedUser = async (id:number) => {
  const userExist = await User.findOneBy({ id })

  if (!userExist) return 'USER_NOT_EXIST'

  const deleteUser = await User.delete(id)
  return deleteUser
}
