"use client"

import { useEffect, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { useRouter } from "next/navigation"
import { createShop } from "@/app/onboard/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { FormState } from "react-hook-form"
import Link from "next/link"
import { useClerk, useSession } from '@clerk/nextjs'



export default function OnboardingForm() {
    const { pending } = useFormStatus()
    // const [showSuccess, setShowSuccess] = useState(false)
    const initialState = { errors: {} }
    const [state, formAction] = useFormState(createShop, initialState)
    const { signOut } = useClerk()
    const { session } = useSession();


    // const reloadSession = async () => {
    //     console.log('user', session)
    //     if (session) {
    //         console.log('reload session')
    //         await session.reload()
    //     }
    // }
    // // Handle successful submission
    // useEffect(() => {
    //     if (state.success) {
    //         //reload Clerk session
    //         //create stripe account link
    //         reloadSession()
    //         setShowSuccess(true)
    //     }
    // }, [state.success])

    // if (showSuccess) {
    //     return (
    //         <Card className="w-full">
    //             <CardContent className="pt-6">
    //                 <div className="flex flex-col items-center justify-center py-10 text-center">
    //                     <div className="mb-4 rounded-full bg-green-100 p-3">
    //                         <CheckCircle2 className="h-8 w-8 text-green-600" />
    //                     </div>
    //                     <h2 className="text-2xl font-bold">Step 2</h2>
    //                     <p className="mt-2 text-gray-500">
    //                         Your shop is ready to go! In order to finish the domain process, point the cname of <span className="font-bold">{state.data?.shopUrl}</span> to <span className="font-bold">cname.vercel-dns.com</span> or A record to <span className="font-bold">76.76.21.21</span>
    //                     </p>
    //                     <Link href="/dashboard" className="w-full" passHref>
    //                         <Button className="mt-4 bg-purple-600 hover:bg-purple-700 w-full">
    //                             Got It!
    //                         </Button>
    //                     </Link>
    //                 </div>
    //             </CardContent>
    //         </Card>
    //     )
    // }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Shop Information</CardTitle>
            </CardHeader>
            <form action={formAction}>
                <CardContent className="space-y-4">
                    {state.errors?._form && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-sm text-red-500">{state.errors._form}</p>
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="shopName">Shop Name</Label>
                        <Input id="shopName" name="shopName" placeholder="My Awesome Shop" />
                        {state.errors?.shopName && <p className="text-sm text-red-500">{state.errors.shopName}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="shopUrl">Shop URL</Label>
                        <Input id="shopUrl" name="shopUrl" placeholder="https://myshop.com" />
                        {state.errors?.shopUrl && <p className="text-sm text-red-500">{state.errors.shopUrl}</p>}
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col w-full items-center justify-center">
                        <Button type="submit" disabled={pending} className="w-full my-2 bg-purple-600 hover:bg-purple-700">
                            {pending ? "Setting up..." : "Complete Setup"}
                        </Button>
                        <div className="w-full text-right text-sm">
                            Not you? <span onClick={() => signOut({ redirectUrl: '/' })} className="text-purple-600 cursor-pointer">Logout</span>
                        </div>
                    </div>

                </CardFooter>
            </form>
        </Card>
    )
}
