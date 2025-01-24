import { pgTable, serial, text, jsonb } from 'drizzle-orm/pg-core';

export const product = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  fileData: jsonb('file_data'),
});
