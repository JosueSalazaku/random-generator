import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  async uploadFile(file: Express.Multer.File) {
    const filePath = `uploads/${file.filename}`;
    return {
      originalName: file.originalname,
      filename: file.filename,
      size: file.size,
      mimeType: file.mimetype,
      path: filePath,
    };
  }
}
