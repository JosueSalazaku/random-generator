import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import * as schema from './../db/schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/')
  async createProduct(@Body() addedProduct: Partial<typeof schema.products>) {
    try {
      const newProduct = await this.productsService.createProduct(addedProduct);
      console.log('Successfully Created new products:', newProduct);
      return newProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

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
