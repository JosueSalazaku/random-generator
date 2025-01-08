import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

export const DATABASE = 'database_connection';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DATABASE,
      useFactory: (configService: ConfigService) => {
        try {
          const pool = new Pool({
            connectionString: configService.getOrThrow('DATABASE_URL'),
          });

          const db = drizzle(pool, { schema });
          return db;
        } catch (error) {
          console.error('Error creating database connection:', error);
          throw error;
        }
      },
      inject: [ConfigService],
    },
  ],
  exports: [DATABASE],
})
export class DatabaseModule {}
