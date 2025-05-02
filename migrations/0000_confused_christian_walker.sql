CREATE TABLE "stores" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"hostname" text,
	"is_verified" boolean DEFAULT false,
	"user_id" text,
	CONSTRAINT "stores_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "stores" ADD CONSTRAINT "stores_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;