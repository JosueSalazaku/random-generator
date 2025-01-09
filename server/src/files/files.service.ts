import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  async uploadFile(file: Express.Multer.File) {
    return {
      originalName: file.originalname,
      filename: file.filename,
      size: file.size,
      mimeType: file.mimetype,
    };
  }
}
