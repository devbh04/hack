"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useStore from "@/app/store"; // Import the Zustand store

// Function to generate random prices based on the selected item's price
const generateRandomPrices = (basePrice, count, stockLeft, productWeight, competitorPrice) => {
  const prices = [];
  for (let i = 0; i < count; i++) {
    // Adjust the base price based on stock, weight, and competitor price
    const adjustedPrice = basePrice + (stockLeft * 0.1) + (productWeight * 0.05) + (competitorPrice * 0.2);
    const randomPrice = adjustedPrice + (Math.random() * 50 - 10); // Add some randomness
    prices.push(randomPrice.toFixed(2)); // Round to 2 decimal places
  }
  return prices;
};

// Months for the X-axis
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Price Trend",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart({ selectedItem }) {
  // Get state from the store
  const { stockLeft, productWeight, competitorPrice } = useStore();

  // Generate chart data based on the selected item's price and store values
  const chartData = months.map((month, index) => {
    const basePrice = selectedItem ? selectedItem.Price : 0; // Use selected item's price or default to 0
    const randomPrices = generateRandomPrices(basePrice, 1, stockLeft, productWeight, competitorPrice);
    return {
      month,
      desktop: parseFloat(randomPrices[0]), // Convert back to a number
    };
  });

  return (
    <Card className="bg-amber-50">
      <CardHeader>
        <CardTitle className="text-amber-600">Price Trend</CardTitle>
        <CardDescription className="text-yellow-600">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-52 min-w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="green" // Changed stroke color to green
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing price trends for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}