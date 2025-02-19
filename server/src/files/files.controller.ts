import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { Express } from 'express';
import * as fs from 'fs';
import { diskStorage } from 'multer';

@Controller('files')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @Post('uploads')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const uploadDir = './uploads';
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
          }
          callback(null, uploadDir);
        },
        filename: (req, file, callback) => {
          const filename = `${Date.now()}-${file.originalname}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const uploadResult = await this.fileService.uploadFile(file);
      const jsonData = await this.fileService.ConvertFile(file);
      await this.fileService.saveFileDataInDB(jsonData);
      console.log('Converted file', jsonData);
      return uploadResult;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
}
