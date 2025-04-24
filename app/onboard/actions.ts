"use server"

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

    try {
        // Simulate API call or database operation
        await new Promise((resolve) => setTimeout(resolve, 1500))

        console.log("Shop created:", { shopName, shopUrl })

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
