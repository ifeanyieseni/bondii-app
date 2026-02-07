"use client"

import React from "react"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { BottomNav } from "@/components/dashboard/BottomNav"
import { MapPin, Heart, MessageSquare } from "lucide-react"
import { CircularIconButton } from "@/components/ui/circular-icon-button"

const EXPLORE_PROFILES = [
  {
    id: 1,
    name: "Queen",
    age: 23,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    distance: "13km away",
    color: "bg-[#7CD9FB]",
    aspect: "aspect-[3/4]"
  },
  {
    id: 2,
    name: "Ree",
    age: 24,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    distance: "13km away",
    color: "bg-[#E91E63]",
    aspect: "aspect-square"
  },
  {
    id: 3,
    name: "Love",
    age: 21,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
    distance: "13km away",
    color: "bg-[#F5F5DC]",
    aspect: "aspect-square"
  },
  {
    id: 4,
    name: "King",
    age: 27,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    distance: "13km away",
    color: "bg-[#A0522D]",
    aspect: "aspect-[3/4]"
  },
]

export default function ExplorePage() {
  return (
    <div className="flex flex-col font-sans">
      <DashboardHeader title="Explore" />
      
      <main className="flex-1 px-4 pt-4 pb-32">
        <div className="grid grid-cols-2 gap-4">
          {EXPLORE_PROFILES.map((profile) => (
            <div 
              key={profile.id}
              className={`relative rounded-[32px] overflow-hidden ${profile.aspect} group cursor-pointer`}
            >
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Distance Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                <MapPin className="w-3 h-3 text-white" />
                <span className="text-caption text-white">{profile.distance}</span>
              </div>

              {/* Profile Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-sm font-bold">{profile.name} {profile.age}</h3>
                </div>
                <div className="flex gap-2">
                  <CircularIconButton 
                    icon={Heart} 
                    className="w-8 h-8 bg-white/20 hover:bg-white/40" 
                    iconClassName="w-4 h-4 text-white"
                  />
                  <CircularIconButton 
                    icon={MessageSquare} 
                    className="w-8 h-8 bg-white/20 hover:bg-white/40" 
                    iconClassName="w-4 h-4 text-white fill-current"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
