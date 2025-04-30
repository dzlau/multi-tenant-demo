import type React from "react"
import "@/app/globals.css"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export const metadata = {
    title: "Dashboard",
    description: "A modern dashboard with charts and analytics",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <DashboardShell>
                    <DashboardHeader heading="Dashboard" text="Overview of your business metrics and analytics." />
                    <DashboardContent>

                        {children}
                    </DashboardContent>
                </DashboardShell>
            </body>
        </html >
    )
} 