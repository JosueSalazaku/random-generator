import { Controller, Get } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  async getQrCode() {
    const qrCode = await this.qrService.generateQrCode();
    return { qrCode };
  }
}
