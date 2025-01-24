import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE } from 'src/db/database.module';
import * as schema from './../db/schema';
import { eq } from 'drizzle-orm';
import { Product } from 'type';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(DATABASE) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getAllProducts() {
    return this.db.select().from(schema.products);
  }

  async getProductsById(id: string) {
    return this.db
      .select()
      .from(schema.products)
      .where(eq(schema.products.id, parseInt(id)))
      .limit(1)
      .then((products) => products[0]);
  }

  async createProduct(createProduct: Product) {
    try {
      return await this.db.insert(schema.products).values(createProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }
}
