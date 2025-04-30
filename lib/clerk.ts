
import { auth, clerkClient } from '@clerk/nextjs/server'

export async function updateClerkOnboardingMetadata(isOnboarded: boolean) {
    const { userId } = await auth()
    if (!userId) {
        throw new Error('User not authenticated')
    }
    const client = await clerkClient()
    try {
        const res = await client.users.updateUser(userId, {
            publicMetadata: {
                onboardingComplete: isOnboarded,
            },
        })
        console.log("Updated user metadata", res.publicMetadata)
        return { message: res.publicMetadata }
    } catch (err) {
        return { error: 'There was an error updating the user metadata.' }
    }
}