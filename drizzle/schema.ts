import { pgTable, serial, text, boolean, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: text('id').primaryKey(),
    email: text('email').notNull().unique(),
    name: text('name'),
    date_created: timestamp('date_created').defaultNow(),
    stripe_account_id: text('stripe_account_id'),
    is_stripe_onboarded: boolean('is_stripe_onboarded').default(false),
});

export const stores = pgTable('stores', {
    id: serial('id').primaryKey(),
    name: text('name'),
    hostname: text('hostname'),
    is_verified: boolean('is_verified').default(false),
    user_id: text('user_id').unique().references(() => users.id),
    date_created: timestamp('date_created').defaultNow(),
}); 