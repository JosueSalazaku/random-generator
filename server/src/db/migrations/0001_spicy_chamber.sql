ALTER TABLE "users" RENAME TO "products";--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "clerk_id" TO "file_data";--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "users_clerk_id_unique";--> statement-breakpoint
DROP INDEX "emailIndex";--> statement-breakpoint
DROP INDEX "clerk_id_unique";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "email";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "picture_url";