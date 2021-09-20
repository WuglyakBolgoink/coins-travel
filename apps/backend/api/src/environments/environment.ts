import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const environment: IEnvironment = {
  production: false,
  connection: {
    type: process.env.DB_TYPE as "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),

    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,

    database: process.env.DB_NAME,

    dropSchema: false,
    synchronize: true,
    logging: false
  }
};

export interface IEnvironment {
  production: boolean;
  connection: TypeOrmModuleOptions;
}

export interface IEnvironmentConnection {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  dropSchema: boolean;
  synchronize: boolean;
  logging: boolean;
}
