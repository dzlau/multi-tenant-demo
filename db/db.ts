import { PrismaClient } from '@/generated/prisma'
import { Store } from '@/types/store'
import { User } from '@/types/user'
import { auth } from '@clerk/nextjs/server'
const prisma = new PrismaClient()

export async function createUser(user: User) {
    const newUser = await prisma.user.create({
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    })
    console.log(user)
}
export async function getCurrentUser() {
    const { userId } = await auth()

    if (!userId) {
        return {
            error: 'User not authenticated'
        }
    }
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    })
    return user

}

export async function getCurrentUserStore() {
    const { userId } = await auth()
    if (!userId) {
        return
    }
    const store = await prisma.store.findFirst({
        where: {
            user_id: userId,
        },
    }) as Store
    return store
}
export async function getUserById(id: string) {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    })
    return user
}

export async function createStore(store: Store) {
    const { userId } = await auth()

    if (!userId) {
        console.log('User not authenticated')
        return
    }
    console.log('Creating store for user:', userId)
    const newStore = await prisma.store.create({
        data: {
            name: store.name,
            hostname: store.hostname,
            is_verified: store.is_verified,
            user_id: userId
        },
    })
    console.log('Store created:', newStore)
    return newStore
}

export async function checkStoreExists(domain: string) {
    const store = await prisma.store.findFirst({
        where: {
            hostname: domain,
        },
    })
    return store
}


