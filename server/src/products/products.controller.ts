import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post('/')
  // async addProducts() {
  //   try {
  //   } catch (error) {}
  // }

  @Get('/')
  async getAllProducts() {
    try {
      const products = await this.productsService.getAllProducts();
      console.log('Successfully retrieved products:', products);
      return products;
    } catch (error) {
      console.error('Error retrieving products:', error);
      throw error;
    }
  }

  @Get('/:id')
  async getProductsById(@Param('id') id: string) {
    try {
      const productById = await this.productsService.getProductsById(id);
      console.log('Successfully retrieved product:', productById);
      return productById;
    } catch (error) {
      console.error('Error retrieving product:', error);
      throw error;
    }
  }
}
