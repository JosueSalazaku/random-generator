CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"picture_url" text NOT NULL,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "emailIndex" ON "users" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "clerk_id_unique" ON "users" USING btree ("clerk_id");