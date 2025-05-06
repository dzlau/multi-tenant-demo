ALTER TABLE "stores" ADD COLUMN "date_created" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "date_created" timestamp DEFAULT now();