import { Injectable } from '@nestjs/common';
import xlsx from 'node-xlsx';
import fs from 'fs';

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

  ConvertFile(file: Express.Multer.File) {
    try {
      const worksheetFromFile = xlsx.parse(fs.readFileSync(`${file.path}`));
      return worksheetFromFile[0].data;
    } catch (error) {
      console.error('File conversion failed:', error);
      throw error;
    }
  }
}
