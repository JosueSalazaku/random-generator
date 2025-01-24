import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  async getAllProducts() {
    return this.productsService.getAllProducts;
  }

  @Get('/:id')
  async getProductsById(@Param('id') id: string) {
    return this.productsService.getProductsById(id);
  }
}
