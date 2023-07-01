import { User } from '../entity/User'

export const getItem = async () => {
  const user = await User.find({})

  return user
}

export const createdItem = async (newUser) => {
  const data = await User.save(newUser)
  console.log(data)

  return data
}

export const updateItem = async (id:number, user:any) => {
  const getUser = await User.findOneBy({ id })

  if (!getUser) return

  const updateUser = {
    ...getUser,
    user
  }

  const updatedUser = await User.update(id, updateUser)
  return updatedUser
}
