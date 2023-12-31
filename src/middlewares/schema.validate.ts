import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import fs from 'fs'

export const schemaValidation = (schema: AnyZodObject) => (req:Request, res:Response, next:NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      params: req.params
    })
    return next()
  } catch (error) {
    if (error instanceof ZodError) {
      if (req.file) {
        fs.unlinkSync(req.file.path)
      }

      return res.status(400).json(error.issues.map(issue => issue.message))
    }
    return res.status(400).json({ message: 'Error al validar cuerpo de la peticion:', error: error.message })
  }
}
