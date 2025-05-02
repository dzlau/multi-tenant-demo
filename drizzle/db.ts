import { db } from '@/drizzle/config';
import { users, stores } from '@/drizzle/schema';
import { Store } from '@/types/store';
import { User } from '@/types/user';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

export async function createUser(user: User) {
    const newUser = await db.insert(users).values({
        id: user.id,
        name: user.name,
        email: user.email,
    }).returning();
    console.log(user);
    return newUser[0];
}

export async function getCurrentUser() {
    const { userId } = await auth();

    if (!userId) {
        return {
            error: 'User not authenticated'
        };
    }

    const user = await db.query.users.findFirst({
        where: eq(users.id, userId),
    });
    return user;
}

export async function getCurrentUserStore() {
    const { userId } = await auth();
    if (!userId) {
        return;
    }

    const store = await db.query.stores.findFirst({
        where: eq(stores.user_id, userId),
    });

    if (!store) return null;

    return {
        ...store,
        is_verified: store.is_verified
    } as Store;
}

export async function getUserById(id: string) {
    const user = await db.query.users.findFirst({
        where: eq(users.id, id),
    });
    return user;
}

export async function createStore(store: Store) {
    console.log('Creating store:', store);
    const { userId } = await auth();

    if (!userId) {
        console.log('User not authenticated');
        return;
    }

    console.log('Creating store for user:', userId);
    const newStore = await db.insert(stores).values({
        name: store.name,
        hostname: store.hostname,
        isVerified: store.is_verified,
        userId: userId
    }).returning();

    console.log('Store created:', newStore);
    return {
        ...newStore[0],
        is_verified: newStore[0].is_verified
    } as Store;
}

export async function checkStoreExists(domain: string) {
    console.log('Checking if store exists for domain:', domain);
    console.log(process.env.DATABASE_URL);

    try {
        const store = await db.query.stores.findFirst({
            where: eq(stores.hostname, domain),
        });

        if (!store) return null;

        return {
            ...store,
            is_verified: store.is_verified
        } as Store;
    } catch (error) {
        console.error('Error checking if store exists:', error);
    }
}


