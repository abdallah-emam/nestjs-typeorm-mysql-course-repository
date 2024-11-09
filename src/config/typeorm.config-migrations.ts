// src/config/typeorm.config-migrations.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from 'src/typeorm/entities/User';

config(); // Load environment variables

export default new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1434,
  username: 'sa',
  password: 'myPassw0rd',
  database: 'nest_app',
  extra: {
    trustServerCertificate: true,
  },
  entities: ['dist/**/entities/*.{ts,js}'], // Path to your entities
  synchronize: false,
  migrations: ['dist/db/**/*{.ts,.js}'],
});
