import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as qrcode from 'qrcode';
import { DATABASE } from 'src/db/database.module';
import * as schema from './../db/schema';

@Injectable()
export class QrService {
  constructor(
    @Inject(DATABASE) private readonly db: NodePgDatabase<typeof schema>,
  ) {}
  async generateQrCode() {
    try {
      const productsQrData = await this.db.query.products.findMany();

      if (!productsQrData || productsQrData.length === 0) {
        throw new Error('Product not found');
      }

      console.log('Product data fetched:', productsQrData);

      const qrGenerating = qrcode.toDataURL(JSON.stringify(productsQrData));
      console.log('Generated QR code:', qrGenerating);

      return qrGenerating;
    } catch (error) {
      console.error('Failed to generate Qr code', error);
    }
  }
}
