import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1434,
      database: 'nest_app',
      username: 'sa',
      password: 'myPassw0rd',
      entities: ['dist/**/entities/*.{ts,js}'], // Autoload entities
      synchronize: false, // Set to false for manual migrations
      // autoLoadEntities: true,
      extra: {
        trustServerCertificate: true,
      },
      migrations: ['dist/db/**/*{.ts,.js}'],
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
