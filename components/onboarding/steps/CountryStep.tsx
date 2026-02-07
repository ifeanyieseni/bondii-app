"use client"

import React, { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const COUNTRIES = [
  "Nigeria", "Ghana", "United States", "United Kingdom", "Canada", 
  "South Africa", "Kenya", "Uganda", "Rwanda", "Germany", 
  "France", "Spain", "Italy", "Australia", "India", "China", 
  "Japan", "Brazil", "Argentina", "Mexico", "Egypt", "Morocco"
].sort()

interface CountryStepProps {
  onSelect: (country: string) => void
}

export function CountryStep({ onSelect }: CountryStepProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")

  const filteredCountries = COUNTRIES.filter(country =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelection = (country: string) => {
    setSelectedCountry(country)
    onSelect(country)
  }

  return (
    <div className="flex-1 flex flex-col h-full gap-6">
      <h1 className="text-2xl font-bold font-sans text-center">Select Your Country</h1>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <Input
          placeholder="Search Country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#1A1A1A] border-none h-14 rounded-full pl-12 pr-5 text-white placeholder:text-white/40 focus:ring-1 focus:ring-brand-orange/50"
        />
      </div>

      <div className="flex-1 min-h-0 pt-2">
        <ScrollArea className="h-full pr-2">
          <RadioGroup
            value={selectedCountry}
            onValueChange={handleSelection}
            className="flex flex-col gap-0"
          >
            {filteredCountries.map((country) => (
              <div
                key={country}
                className="group relative"
              >
                <div onClick={() => handleSelection(country)} className="flex items-center justify-between py-6 cursor-pointer active:bg-white/5 transition-colors">
                  <Label
                    htmlFor={country}
                    className="text-base font-medium cursor-pointer flex-1"
                  >
                    {country}
                  </Label>
                  <RadioGroupItem
                    value={country}
                    id={country}
                    className="w-5 h-5 border-2 border-white/20 text-brand-gold data-[state=checked]:border-brand-gold data-[state=checked]:text-brand-gold"
                  />
                </div>
                 {/* Separator Line */}
                <div className="h-[1px] bg-white/10 w-full" />
              </div>
            ))}
          </RadioGroup>
        </ScrollArea>
      </div>
    </div>
  )
}
