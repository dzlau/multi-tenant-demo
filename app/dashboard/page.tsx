
import { DashboardContent } from "@/components/dashboard/dashboard-content"
import { OverviewCards } from "@/components/dashboard/overview-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { TopProducts } from "@/components/dashboard/top-products"
import { HostnameReminder } from "@/components/dashboard/hostname-reminder"
import { getCurrentUserStore } from "@/drizzle/db"
import { Store } from "@/types/store"
import { redirect } from "next/navigation"
export default async function DashboardPage() {
    const userStore = await getCurrentUserStore()

    if (!userStore) {
        return redirect('/onboard')
    }
    return (
        <>
            <HostnameReminder store={userStore} />
            <OverviewCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RevenueChart className="col-span-4" />
                <SalesChart className="col-span-3" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RecentSales className="col-span-4" />
                <TopProducts className="col-span-3" />
            </div>
        </>
    )
}
