"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate fake data for the chart
const data = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home & Garden", value: 200 },
  { name: "Books", value: 100 },
]

interface TopProductsProps {
  className?: string
}

export function TopProducts({ className }: TopProductsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Product Categories</CardTitle>
        <CardDescription>Sales distribution by product category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            Electronics: {
              label: "Electronics",
              color: "hsl(var(--chart-1))",
            },
            Clothing: {
              label: "Clothing",
              color: "hsl(var(--chart-2))",
            },
            "Home & Garden": {
              label: "Home & Garden",
              color: "hsl(var(--chart-3))",
            },
            Books: {
              label: "Books",
              color: "hsl(var(--chart-4))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.replace(/\s+&\s+/g, "-")})`} />
                ))}
              </Pie>
              <Legend />
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
