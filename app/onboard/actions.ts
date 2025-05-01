"use server"

import { checkStoreExists, createStore } from "@/db/db";
import { updateClerkOnboardingMetadata } from "@/lib/clerk";
import { addDomainToProject } from "@/lib/vercel";
import { addDomainToRedis } from "@/lib/redis";
import { z } from "zod"
const hostnameRegex = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/;
// Form validation schema
const formSchema = z.object({
    shopName: z.string().min(2, {
        message: "Shop name must be at least 2 characters.",
    }),
    shopUrl: z.string().regex(hostnameRegex, "Please enter a valid hostname")
})

export type FormState = {
    errors?: {
        shopName?: string[]
        shopUrl?: string[]
        _form?: string[]
    }
    success?: boolean
    data?: {
        shopName: string
        shopUrl: string
    }
}

export async function createShop(prevState: FormState, formData: FormData): Promise<FormState> {

    // Validate form data
    const validatedFields = formSchema.safeParse({
        shopName: formData.get("shopName"),
        shopUrl: formData.get("shopUrl"),
    })

    // Return errors if validation fails
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { shopName, shopUrl } = validatedFields.data
    // Check if store already exists

    console.log('checking store', shopName)

    try {
        // Check to see if store with that hostname already exists
        const existingStore = await checkStoreExists(shopUrl)
        if (existingStore) {
            return {
                errors: {
                    shopUrl: ["This hostname is in use please choose another"],
                },
            }
        }

        console.log('creating store', shopName)
        // create new store
        const newStore = await createStore({
            name: shopName,
            hostname: shopUrl,
            is_verified: false,
        })

        console.log('store created', newStore)
        if (!newStore) {
            return {
                errors: {
                    shopUrl: ["Failed to create shop. Please try again."],
                },
            }
        }

        console.log("Shop created:", { shopName, shopUrl })
        // Add domain to vercel
        await addDomainToProject(shopUrl)
        // add domain and id to edge config
        await addDomainToRedis(shopUrl, newStore.id)
        // set onboard complete to true in Clerk
        updateClerkOnboardingMetadata(true)
        //create domain record in vercel
        // Return success state
        return {
            data: {
                shopName,
                shopUrl,
            },
            success: true,
        }
    } catch (error) {
        // Return error if submission fails
        return {
            errors: {
                _form: ["Failed to create shop. Please try again."],
            },
        }
    }
}
