import { DataSource } from 'typeorm'
import { Dollar } from '../entity/dolar.entity'
import { Mesghal } from '../entity/mesghal.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2434127reza',
  database: 'arz',
  synchronize: true,
  logging: false,
  entities: [Dollar,Mesghal],
  subscribers: [],
  migrations: [],
})
