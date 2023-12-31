/* eslint-disable no-unused-vars */
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm'
import { Reviews } from './Reviews'
import { Categoria } from '../dto/types'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
    id: number

  @Column({ length: 50 })
    nombre: string

  @Column({ length: 50 })

    profesion: string

  @Column({ length: 15 })

    telefono: string

  @Column({ unique: true })

    correo: string

  @Column()
    password: string

  @Column()
    descripcion: string

  @Column({ length: 9999 })
    imagen: string

  @Column({
    type: 'enum',
    enum: Categoria,
    default: Categoria.TECNICO
  })
    categoria: Categoria

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    creado: Date

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    editado: Date

  @OneToMany(() => Reviews, (review) => review.user)
  @JoinColumn()
    reviews: Reviews[]
}
