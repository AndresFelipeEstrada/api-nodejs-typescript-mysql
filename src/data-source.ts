import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'
import { Reviews } from './entity/Reviews'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: '',
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Reviews],
  migrations: [],
  subscribers: []
})
