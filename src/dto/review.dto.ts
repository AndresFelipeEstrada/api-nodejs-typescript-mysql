import { User } from '../entity/User'

export class ReviewDto {
  titulo : string
  nombre : string
  mensaje : string
  user?: User
}
