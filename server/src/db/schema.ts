import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    createdAt: text("created_at").default("now()").notNull(),
});