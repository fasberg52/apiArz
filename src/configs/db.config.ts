import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2434127reza",
    database: "arz",
    synchronize: true,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
});
