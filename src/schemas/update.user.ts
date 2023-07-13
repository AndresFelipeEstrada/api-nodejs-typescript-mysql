import { z } from 'zod'
import { Categoria } from '../dto/types'

export const updateUserSchema = z.object({
  body: z.object({
    nombre: z.string().nonempty().optional(),
    profesion: z.string().nonempty().optional(),
    telefono: z.string().nonempty('El numero no debe estar vacio').optional(),
    correo: z.string().nonempty('El correo es requerido').email({ message: 'El correo debe ser valido' }).optional(),
    password: z.string().nonempty('La password es requerida').min(6, 'La password es muy corta').optional(),
    descripcion: z.string().nonempty().optional(),
    categoria: z.nativeEnum(Categoria, { description: 'La categoria no es valida' }).optional()
  }),
  params: z.object({
    id: z.string().nonempty()
  })
})
