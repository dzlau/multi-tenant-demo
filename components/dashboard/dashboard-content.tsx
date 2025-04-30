import type React from "react"
interface DashboardContentProps {
  children: React.ReactNode
}

export function DashboardContent({ children }: DashboardContentProps) {
  return <div className="flex-1 space-y-4 px-4 pb-8 md:px-8">{children}</div>
}
