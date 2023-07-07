import { Reviews } from '../entity/Reviews'
import { Categoria } from './types'

export class UserDto {
  id:string
  nombre: string
  profesion: string
  telefono: string
  correo:string
  password:string
  descripcion:string
  imagen:string
  categoria: Categoria
  creado :Date
  editado:Date
  reviews:Reviews
}

export type createUserType = Omit<UserDto, 'id'| 'creado'| 'editado'| 'reviews' >
export type AuthUser = Pick<UserDto, 'correo'|'password'>
