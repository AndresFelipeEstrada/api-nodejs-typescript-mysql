import { compare, hash } from 'bcryptjs'

export const encrypt = async (password:string) => {
  const passwordHash = await hash(password, 8)
  return passwordHash
}

export const comparePassword = async (password:string, hashedPassword:string) => {
  const isCorrect = await compare(password, hashedPassword)

  return isCorrect
}
