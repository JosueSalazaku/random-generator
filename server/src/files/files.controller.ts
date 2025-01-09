import { Controller, Post, UploadedFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { Express } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @Post('uploads')
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.fileService.uploadFile(file);
  }
}
