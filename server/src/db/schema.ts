import { pgTable, serial, jsonb } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  fileData: jsonb('file_data'),
});
