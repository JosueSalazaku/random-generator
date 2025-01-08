/* eslint-disable prettier/prettier */
import {
  pgTable,
  uniqueIndex,
  serial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerk_id', { length: 255 }).notNull().unique(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  imageUrl: text('picture_url').notNull(),
}, (table) => ({
  emailIndex: uniqueIndex('emailIndex').on(table.email),
    clerkIdUniqueIndex: uniqueIndex('clerk_id_unique').on(table.clerkId),
}));


