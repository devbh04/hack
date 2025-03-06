"use client"

import * as React from "react"
import { Clock } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TimePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  className?: string
}

export function TimePicker({ date, setDate, className }: TimePickerProps) {
  const [selectedHour, setSelectedHour] = React.useState<number>(date ? date.getHours() : 0)
  const [selectedMinute, setSelectedMinute] = React.useState<number>(date ? date.getMinutes() : 0)
  const [open, setOpen] = React.useState(false)

  // Track initialization
  const isInitialized = React.useRef(false)

  // Initialize time values from date when date changes
  React.useEffect(() => {
    if (date && !isInitialized.current) {
      setSelectedHour(date.getHours())
      setSelectedMinute(date.getMinutes())
      isInitialized.current = true
    }
  }, [date])

  // Update the date when time components change
  React.useEffect(() => {
    if (!date) {
      return // Don't create a new date if none exists
    }

    const newDate = new Date(date)
    // Only update if the time actually changed
    if (newDate.getHours() !== selectedHour || newDate.getMinutes() !== selectedMinute) {
      newDate.setHours(selectedHour)
      newDate.setMinutes(selectedMinute)
      newDate.setSeconds(0)
      setDate(newDate)
    }
  }, [selectedHour, selectedMinute, setDate, date])

  // Create minutes options (00, 05, 10, ..., 55)
  const minuteOptions = Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => ({
    value: minute,
    label: minute.toString().padStart(2, "0"),
  }))

  // Create hours options (0, 1, 2, ..., 23)
  const hourOptions = Array.from({ length: 24 }, (_, i) => i).map((hour) => ({
    value: hour,
    label: hour.toString().padStart(2, "0"),
  }))

  // Format the time for display (24-hour format)
  const formattedTime = date ? format(date, "HH:mm") : "Select time"

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className)}
        >
          <Clock className="mr-2 h-4 w-4" />
          {formattedTime}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Set time</h4>
            <div className="flex items-center gap-2">
              <div className="grid gap-1">
                <Label htmlFor="hours" className="text-xs">
                  Hours
                </Label>
                <Select
                  value={selectedHour.toString()}
                  onValueChange={(value) => setSelectedHour(Number.parseInt(value))}
                >
                  <SelectTrigger id="hours" className="w-[70px]">
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    {hourOptions.map((hour) => (
                      <SelectItem key={hour.value} value={hour.value.toString()}>
                        {hour.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1">
                <Label htmlFor="minutes" className="text-xs">
                  Minutes
                </Label>
                <Select
                  value={selectedMinute.toString()}
                  onValueChange={(value) => setSelectedMinute(Number.parseInt(value))}
                >
                  <SelectTrigger id="minutes" className="w-[70px]">
                    <SelectValue placeholder="Minute" />
                  </SelectTrigger>
                  <SelectContent>
                    {minuteOptions.map((minute) => (
                      <SelectItem key={minute.value} value={minute.value.toString()}>
                        {minute.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm" onClick={() => setOpen(false)}>
              Done
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}