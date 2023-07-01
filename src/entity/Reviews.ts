import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Reviews extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number

    @Column()
      titulo: string

    @Column()
      nombre: string

    @Column()
      mensaje: string

    @ManyToOne(
      () => User, (user) => user.reviews
    )
      user: User
}
