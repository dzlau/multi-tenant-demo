import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { createUser, updateUser } from "@/drizzle/db"
import { User } from "@/types/user"
import { createStripeAccount } from '@/lib/stripe'
export async function POST(req: Request) {
    try {
        const evt = await verifyWebhook(req as any) // Type cast to fix type error
        if (evt.type === 'user.created') {
            const { id, first_name, last_name, email_addresses } = evt.data
            const user: User = {
                id: id,
                name: evt.data.first_name + ' ' + evt.data.last_name,
                email: email_addresses[0].email_address,
                is_stripe_onboarded: false,
            }
            await createUser(user)
            //create stripe account
            const stripeAccount = await createStripeAccount(user)
            await updateUser(user.id, { stripe_account_id: stripeAccount.id })
        }

        console.log('Webhook payload:', evt.data)

        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}