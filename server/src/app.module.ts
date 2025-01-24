import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';
import { ClerkClientProvider } from './provider/clerk-client.provider';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './uploads',
      }),
    }),
    FilesModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, FilesService, ClerkClientProvider],
})
export class AppModule {}
