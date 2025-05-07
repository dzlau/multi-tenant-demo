import Stripe from "stripe"
import { User } from "@/types/user"
import { getCurrentUser } from "@/drizzle/db"
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function createStripeAccount(user: User) {
    const account = await stripe.accounts.create({
        type: "express",
        country: "US",
        email: user.email,

        metadata: {
            user_id: user.id,
        },

    })

    return account
}

export async function createStripeAccountLink() {
    const url = process.env.VERCEL_ENV === "production" ? process.env.VERCEL_PROJECT_PRODUCTION_URL : "http://localhost:3000"
    console.log('url', url)
    const user = await getCurrentUser()
    console.log('user', user)
    if (!user?.stripe_account_id) {
        throw new Error("account id not found")
    }
    console.log('user.stripe_account_id', user.stripe_account_id)
    try {
        const accountLink = await stripe.accountLinks.create({
            account: user.stripe_account_id,
            refresh_url: `${url}/dashboard`,
            return_url: `${url}/dashboard`,
            type: 'account_onboarding',
            collection_options: {
                fields: "eventually_due",
            },
        })
        console.log('accountLink', accountLink)
        return accountLink
    } catch (error) {
        console.error('error', error)
        throw new Error("error creating account link")
    }
}
export async function updateStripeAccountNameAndUrl(shopName: string, shopUrl: string) {
    const user = await getCurrentUser()
    if (!user?.stripe_account_id) {
        throw new Error("Stripe account ID not found");
    }
    const account = await stripe.accounts.update(user.stripe_account_id, {
            business_profile: {
                url: shopUrl,
                name: shopName,
        },
    })
    return account
}
export async function getStripeAccount(user: User) {
    if (!user.stripe_account_id) {
        throw new Error("Stripe account ID not found");
    }
    const account = await stripe.accounts.retrieve(user.stripe_account_id)
    return account
}



