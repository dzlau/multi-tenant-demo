import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from './config';

async function main() {
    console.log('Migration started...');
    await migrate(db, { migrationsFolder: 'drizzle/migrations' });
    console.log('Migration completed!');
}

main().catch((err) => {
    console.error('Migration failed!');
    console.error(err);
    process.exit(1);
}); 