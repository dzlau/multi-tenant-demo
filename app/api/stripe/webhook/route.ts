import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { updateUser } from '@/drizzle/db';

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const headersList = await headers();
        const signature = headersList.get('stripe-signature');

        if (!signature || !webhookSecret) {
            return new NextResponse('Missing stripe signature or webhook secret', { status: 400 });
        }

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        } catch (err) {
            console.error('Webhook signature verification failed:', err);
            return new NextResponse('Webhook signature verification failed', { status: 400 });
        }

        // Handle the event
        switch (event.type) {
            case 'account.updated':
                const account = event.data.object as Stripe.Account;
                const userId = account.metadata?.user_id;

                if (!userId) {
                    console.error('No user_id found in account metadata');
                    return new NextResponse('No user_id found in account metadata', { status: 400 });
                }

                // Update user's account status in the database
                await updateUser(userId, {
                    stripe_account_id: account.id,
                });

                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return new NextResponse('Webhook processed successfully', { status: 200 });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return new NextResponse('Error processing webhook', { status: 500 });
    }
} 