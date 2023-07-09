import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../helpers/jwt'

export const protectedRoutes = (req:Request, res:Response, next:NextFunction) => {
  try {
    const auth = req.headers.authorization || null
    const authToken = auth.split(' ').pop()
    const isCorrect = verifyToken(authToken)

    if (!isCorrect) {
      return res.status(401).send('JWT_INVALID')
    }
    return next()
  } catch (error) {
    return res.status(400).send('session no valida')
  }
}
