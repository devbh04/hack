'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWeather({onValueChange}) {

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Weather Condition" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Cloudy">Cloudy</SelectItem>
        <SelectItem value="Cold">Cold</SelectItem>
        <SelectItem value="Rainy">Rainy</SelectItem>
        <SelectItem value="Sunny">Sunny</SelectItem>
      </SelectContent>
    </Select>

  )
}
