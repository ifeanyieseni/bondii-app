"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const INTERESTS = [
  "Architecture", "Books & Novel", "Gym & Fitness", "Animal", 
  "People & Society", "Writing", "Cooking", "Singing", "Movie", 
  "Gaming", "Dancing & singing", "Art", "Food & Drink", "Painting", 
  "Football", "Photography", "Hiking", "Nature walks", "Meditation", 
  "Journaling", "Swimming", "Home Decor", "Trivia", "Chess", 
  "Podcasting", "Tech", "Sport", "Road Trips", "Yoga"
]

interface InterestsStepProps {
  onNext: (selectedInterests: string[]) => void
  initialInterests?: string[]
}

export function InterestsStep({ onNext, initialInterests = [] }: InterestsStepProps) {
  const [selected, setSelected] = useState<string[]>(initialInterests)

  const toggleInterest = (interest: string) => {
    setSelected(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold font-sans text-center">Select your interest</h1>
        <p className="text-white/60 text-center text-xs">
          Add good images to get good amount of daily chats
        </p>
      </div>

      <ScrollArea className="flex-1 -mx-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 pb-4">
          {INTERESTS.map((interest) => {
            const isSelected = selected.includes(interest)
            return (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={cn(
                  "px-4 py-2.5 rounded-full border text-xs font-medium transition-all duration-200",
                  isSelected
                    ? "bg-brand-gold text-black border-brand-gold"
                    : "bg-transparent text-white border-brand-gold/50 hover:border-brand-gold hover:bg-brand-gold/10"
                )}
              >
                {interest}
              </button>
            )
          })}
        </div>
      </ScrollArea>

      <div className="pt-4 mt-auto">
        <Button
          onClick={() => onNext(selected)}
          disabled={selected.length === 0}
          className="w-full h-14 rounded-full text-lg font-medium bg-brand-gradient border-none hover:opacity-90 transition-opacity"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
