"use client"

import React from "react"
import { Check } from "lucide-react"
import { Profile } from "@/types/dashboard"

interface ProfileCardProps extends Omit<Profile, 'id'> {
  onClick?: () => void
}

export function ProfileCard({ 
  image, 
  name, 
  age, 
  badges, 
  matchPercentage, 
  location,
  onClick
}: ProfileCardProps) {
  return (
    <div 
      onClick={onClick}
      className="relative w-full h-full rounded-[32px] overflow-hidden select-none cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

      {/* Top Badges */}
      <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 px-4 flex-wrap">
        {badges.map((badge) => (
          <div
            key={badge}
            className="px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-xs font-medium text-white"
          >
            {badge}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between mb-1">
          <div className="flex items-center gap-2">
            <h2 className="text-h2 text-white shadow-black/50 drop-shadow-md">{name} {age}</h2>
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <Check className="w-3 h-3 text-black stroke-[4]" />
            </div>
          </div>
          
          <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-caption text-white">
            {matchPercentage}% Match
          </div>
        </div>
        
        <p className="text-white/80 text-sm font-medium">{location}</p>
      </div>
    </div>
  )
}
