import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  async uploadFile(file: Express.Multer.File) {
    try {
      const filePath = `uploads/${file.filename}`;
      console.log('File upload successful:', filePath);
      return {
        originalName: file.originalname,
        filename: file.filename,
        size: file.size,
        mimeType: file.mimetype,
        path: filePath,
      };
    } catch (error) {
      console.error('File upload failed:', error);
      throw error;
    }
  }
}
