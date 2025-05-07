export type User = {
    id: string,
    name: string,
    email: string,
    stripe_account_id?: string,
    is_stripe_onboarded: boolean,
}