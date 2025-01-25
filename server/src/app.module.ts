import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { ConfigModule } from '@nestjs/config';
// import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';
import { ClerkClientProvider } from './provider/clerk-client.provider';
import { AuthController } from './auth/auth.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { QrController } from './qr/qr.controller';
import { QrService } from './qr/qr.service';
import { QrModule } from './qr/qr.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    // UsersModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './uploads',
      }),
    }),
    FilesModule,
    ProductsModule,
    QrModule,
  ],
  controllers: [
    AppController,
    AuthController,
    ProductsController,
    QrController,
  ],
  providers: [
    AppService,
    FilesService,
    ClerkClientProvider,
    ProductsService,
    QrService,
  ],
})
export class AppModule {}
