import { z } from 'zod'
import { Categoria } from '../dto/types'

export const createUserSchema = z.object({
  body: z.object({
    nombre: z.string({ required_error: 'El nombre debe ser un texto' })
      .nonempty({ message: 'El campo nombre no debe estar vacío' }),

    profesion: z.string({ required_error: 'La profesion debe ser un texto' })
      .nonempty({ message: 'El campo profesion no debe estar vacío' }),

    telefono: z.string({ required_error: 'El telefono debe ser un texto' })
      .nonempty({ message: 'El campo telefono no debe estar vacío' }),

    correo: z.string({ required_error: 'El correo debe ser un texto' })
      .nonempty({ message: 'El campo correo no debe estar vacío' })
      .email({ message: 'El campo correo debe ser válido' }),

    password: z.string({ required_error: 'La password debe ser un texto' })
      .nonempty({ message: 'El campo password no debe estar vacío' })
      .min(6, { message: 'El campo password debe tener al menos 6 caracteres' }),

    descripcion: z.string({ required_error: 'La descripcion debe ser un texto' })
      .nonempty({ message: 'El campo descripcion no debe estar vacío' }),

    categoria: z.nativeEnum(Categoria, { required_error: 'La categoria debe ser un texto' })
  })
})
