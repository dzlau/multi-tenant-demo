"use client"

import { Button } from "@/components/ui/button"
import { useClerk } from '@clerk/nextjs'

export default function Logout() {
    const { signOut } = useClerk()
    return (
        <Button variant="ghost" className="w-full" onClick={() => { signOut() }
        }>
            Logout
        </Button>

    )
}