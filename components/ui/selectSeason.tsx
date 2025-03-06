'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectSeason({onValueChange}) {

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Season" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Diwali">Diwali</SelectItem>
        <SelectItem value="Eid">Eid</SelectItem>
        <SelectItem value="Christmas">Christmas</SelectItem>
        <SelectItem value="New Year">New Year</SelectItem>
        <SelectItem value="None">None</SelectItem>
      </SelectContent>
    </Select>

  )
}
