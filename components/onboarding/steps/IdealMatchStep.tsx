"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Heart, Users, HeartHandshake, Coffee } from "lucide-react"

const MATCH_OPTIONS = [
  { id: "companionship", label: "Companionship", icon: Heart },
  { id: "group_hangout", label: "Group Hangout", icon: Users },
  { id: "serious_connection", label: "Serious Connection", icon: HeartHandshake },
  { id: "casual_dating", label: "Casual Dating", icon: Coffee },
]

interface IdealMatchStepProps {
  onNext: (selectedMatch: string) => void
  initialMatch?: string
}

export function IdealMatchStep({ onNext, initialMatch }: IdealMatchStepProps) {
  const [selected, setSelected] = useState<string | undefined>(initialMatch)

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold font-sans text-center">What is your Ideal Match</h1>
        <p className="text-white/60 text-center text-xs">
          Why exactly are you using this platform
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4">
          {MATCH_OPTIONS.map((option) => {
            const Icon = option.icon
            const isSelected = selected === option.id
            return (
              <div
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-3 p-4 rounded-3xl border-2 transition-all duration-300 cursor-pointer aspect-square",
                  isSelected
                    ? "bg-[#1A1A1A] border-brand-gold"
                    : "bg-black border-white/10 hover:border-white/30 hover:bg-[#1A1A1A]"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
                  isSelected ? "bg-white text-black" : "bg-white text-black"
                )}>
                  <Icon className="w-8 h-8 fill-current" />
                </div>
                <span className={cn(
                  "text-xs font-medium text-center",
                  isSelected ? "text-white" : "text-white/60"
                )}>
                  {option.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="pt-8 mt-auto">
        <Button
          onClick={() => selected && onNext(selected)}
          disabled={!selected}
          className="w-full h-14 rounded-full text-lg font-medium bg-brand-gradient border-none hover:opacity-90 transition-opacity"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
