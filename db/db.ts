import { PrismaClient } from '@/generated/prisma'

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

export async function createStore() {
    const user = await prisma.store.create({
        data: {
            name: 'Bob',
            hostname: 'bob@prisma.io',
        },
    })
}

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })