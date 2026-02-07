"use client"

import React from "react"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { BottomNav } from "@/components/dashboard/BottomNav"
import { X, MessageSquare } from "lucide-react"
import { CircularIconButton } from "@/components/ui/circular-icon-button"

const LOVED_PROFILES = [
  {
    id: 1,
    name: "Promise",
    age: 29,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "King",
    age: 32,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Emma",
    age: 25,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
  },
]

export default function LovedPage() {
  return (
    <div className="flex flex-col font-sans">
      <DashboardHeader title="Loved" />
      
      <main className="flex-1 px-4 pt-4 pb-32 space-y-6">
        {LOVED_PROFILES.map((profile) => (
          <div 
            key={profile.id}
            className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden group cursor-pointer"
          >
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Top Right Close Button */}
            <CircularIconButton 
              icon={X} 
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 border border-white/10"
              iconClassName="text-white/60"
            />

            {/* Profile Info */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h3 className="text-white text-h2">{profile.name} {profile.age}</h3>
              <CircularIconButton 
                icon={MessageSquare} 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20"
                iconClassName="text-white fill-current"
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
