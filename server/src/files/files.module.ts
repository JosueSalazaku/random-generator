import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { DatabaseModule } from 'src/db/database.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [DatabaseModule, ProductsModule],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
