"use client"

import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { CircularIconButton } from "@/components/ui/circular-icon-button"

export function DashboardFilter() {
  const [gender, setGender] = useState("Girls")
  const [distance, setDistance] = useState([40])
  const [ageRange, setAgeRange] = useState([20, 28])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CircularIconButton icon={SlidersHorizontal} iconClassName="rotate-90" />
      </DialogTrigger>
      {/* 
        Customizing DialogContent to match the dark centered card look.
        The default Dialog overlay is black/80, content is usually white. 
        We force dark theme styles here.
      */}
      <DialogContent className="bg-[#121212] border-white/10 text-white w-[90%] max-w-sm rounded-[32px] p-6">
        <DialogHeader className="flex-row items-center justify-between space-y-0 pb-6 border-b border-white/5">
          <div className="w-12 h-1 px-4" /> {/* Spacer for centering */}
          <DialogTitle className="text-xl font-bold flex-1 text-center font-sans">Filter</DialogTitle>
          <DialogDescription className="sr-only">
            Filter the dashboard content by gender, location, distance, and age.
          </DialogDescription>
          <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Clear
          </button>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          {/* Interested In */}
          <div className="space-y-3">
            <label className="text-base text-white/80">Interested in</label>
            <div className="flex bg-[#1A1A1A] rounded-2xl p-1 h-12">
               {["Girls", "Boys", "Both gender"].map((opt) => (
                 <button
                   key={opt}
                   onClick={() => setGender(opt)}
                   className={cn(
                     "flex-1 rounded-xl text-sm font-medium transition-all duration-300",
                     gender === opt 
                       ? "bg-brand-gradient text-black" 
                       : "text-white/40 hover:text-white/60"
                   )}
                 >
                   {opt}
                 </button>
               ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <label className="text-base text-white/80">Location</label>
            <Select>
              <SelectTrigger className="h-12 bg-[#1A1A1A] border-none rounded-2xl text-white/40 px-4">
                <SelectValue placeholder="Pick a country" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10 text-white">
                <SelectItem value="ng">Nigeria</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Distance */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-white/80">
               <label className="text-base">Distance</label>
               <span className="text-sm">{distance[0]}km</span>
            </div>
            <Slider
              value={distance}
              onValueChange={setDistance}
              max={100}
              step={1}
              className="py-4" 
              // Note: Default slider uses 'primary' which we might need to style to be brand gold
              // We can style via className on CSS or the component itself.
              // Assuming standard slider usage, let's verify if we need to enforce color.
            />
          </div>

          {/* Age */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-white/80">
               <label className="text-base">Age</label>
               <span className="text-sm">{ageRange[0]}-{ageRange[1]}</span>
            </div>
            <Slider
              value={ageRange}
              onValueChange={setAgeRange}
              min={18}
              max={60}
              step={1}
              className="py-4"
            />
          </div>

          {/* Filter Button */}
          <button className="w-full h-14 bg-brand-gradient rounded-full text-black text-lg font-bold mt-8 hover:opacity-90 transition-opacity shadow-lg shadow-brand-orange/20">
            Filter
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
