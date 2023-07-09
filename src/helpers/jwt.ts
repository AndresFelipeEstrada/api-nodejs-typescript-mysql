import { sign, verify } from 'jsonwebtoken'

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

export const signToken = async (correo:string) => {
  const token = sign(correo, JWT_PRIVATE_KEY, {})

  return token
}

export const verifyToken = (token:string) => {
  const decoded = verify(token, JWT_PRIVATE_KEY)
  return decoded
}
