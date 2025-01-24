import { Inject, Injectable } from '@nestjs/common';
import xlsx from 'node-xlsx';
import * as fs from 'fs';
import * as schema from './../db/schema';
import { DATABASE } from 'src/db/database.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class FilesService {
  constructor(
    @Inject(DATABASE) private readonly db: NodePgDatabase<typeof schema>,
  ) {}
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

  async ConvertFile(file: Express.Multer.File) {
    try {
      const filePath = `./uploads/${file.filename}`;
      if (fs.existsSync(filePath)) {
        const fileData = await fs.promises.readFile(filePath);
        const worksheetFromFile = xlsx.parse(fileData);

        console.log(worksheetFromFile[0].data);

        return worksheetFromFile[0].data;
      } else {
        console.error(`File does not exist: ${filePath}`);
      }
    } catch (error) {
      console.error('File conversion failed:', error);
      throw error;
    }
  }

  async saveFileDataInDB(jsonData: any) {
    try {
      await this.db.insert(schema.products).values(jsonData);
    } catch (error) {
      console.error('Failed to save file data in DB:', error);
    }
  }
}
