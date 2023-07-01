import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'
import { Reviews } from './entity/Reviews'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: 'root',
  password: '',
  database: 'contratame',
  synchronize: true,
  logging: false,
  entities: [User, Reviews],
  migrations: [],
  subscribers: []
})
