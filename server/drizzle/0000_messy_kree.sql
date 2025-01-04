CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" text DEFAULT 'now()' NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
