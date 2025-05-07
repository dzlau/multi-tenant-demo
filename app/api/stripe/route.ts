import { updateUser } from "@/drizzle/db";
import { User } from "@/types/user"
import stripe from "stripe";
export async function POST(req: Request) {
    const sig = req.headers.get('stripe-signature');
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const body = await req.text();

    if (!sig || !endpointSecret) {
        return new Response('Missing stripe signature or webhook secret', { status: 400 });
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
        if (event.type === 'account.updated') {
            const account = event.data.object;
            if (account.requirements?.currently_due?.length === 0 && account.requirements?.pending_verification?.length === 0 && !account.requirements?.disabled_reason) {
                //update user stripe account id
                await updateUser(account.metadata!.user_id, { is_stripe_onboarded: true })
            }
            return new Response('Webhook received', { status: 200 })
        }
    }
    catch (err) {
        return new Response('Error verifying webhook error: ' + err, { status: 400 })
    }

}