import { DeepPartial } from 'typeorm'
import { createUserType, AuthUser } from '../dto/user.dto'
import { User } from '../entity/User'
import { comparePassword, encrypt } from '../helpers/password.handle'

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

export const createdItem = async ({
  nombre,
  profesion,
  telefono,
  correo,
  password,
  descripcion,
  imagen,
  categoria
}:createUserType) => {
  const userExist = await User.findOneBy({ correo })

  if (userExist) return 'USER_EXIST'

  const passwordEncrypted = await encrypt(password)
  console.log(passwordEncrypted)

  const saveUser:DeepPartial<User> = {
    nombre,
    profesion,
    telefono,
    correo,
    password: passwordEncrypted,
    descripcion,
    imagen,
    categoria
  }

  const createdUser = User.create(saveUser)
  createdUser.save()

  return createdUser
}

export const updateItem = async (id:number, data:User) => {
  const updatedUser = await User.update(id, data)
  return updatedUser
}

export const deletedUser = async (id:number) => {
  const userExist = await User.findOneBy({ id })

  if (!userExist) return 'USER_NOT_EXIST'

  const deleteUser = await User.delete(id)
  return deleteUser
}

export const login = async ({ correo, password }:AuthUser) => {
  const userExist = await User.findOneBy({ correo })

  if (!userExist) return 'USER_NOT_FOUND'

  const passwordHash = userExist.password

  const isEquals = comparePassword(password, passwordHash)

  if (!isEquals) return 'PASSWORD_INCORRECT'

  return userExist
}
