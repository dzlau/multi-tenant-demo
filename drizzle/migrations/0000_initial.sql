CREATE TABLE IF NOT EXISTS "users" (
    "id" text PRIMARY KEY,
    "email" text NOT NULL UNIQUE,
    "name" text
);

CREATE TABLE IF NOT EXISTS "stores" (
    "id" serial PRIMARY KEY,
    "name" text,
    "hostname" text,
    "is_verified" boolean DEFAULT false,
    "user_id" text UNIQUE REFERENCES "users"("id")
); 