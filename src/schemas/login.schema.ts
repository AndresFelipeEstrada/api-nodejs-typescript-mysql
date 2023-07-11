import { z } from 'zod'

export const loginSchema = z.object({
  correo: z.string().nonempty('El correo es requerido').email({ message: 'El correo debe ser valido' }),
  password: z.string().nonempty('La password es requerida').min(6, 'La password es muy corta')
})
