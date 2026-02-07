"use client"

import React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Profile } from "@/types/dashboard"
import { CircularIconButton } from "@/components/ui/circular-icon-button"
import { ChevronLeft, MoreVertical, Check } from "lucide-react"
import Image from "next/image"

interface UserProfileViewProps {
  isOpen: boolean
  onClose: () => void
  profile: Profile | null
}

export function UserProfileView({ isOpen, onClose, profile }: UserProfileViewProps) {
  if (!profile) return null

  const sections = [
    {
      label: "Likes",
      items: ["Late-night snacks", "Chill environment", "Good playlists"]
    },
    {
      label: "Interest",
      items: ["Cooking", "Singing", "Blogging"]
    },
    {
      label: "Availability",
      items: ["Nights"]
    },
    {
      label: "Hangout ideas",
      items: ["Coffe nearby", "Movie night", "Food crawl", "Casual walk"]
    },
    {
      label: "Safety & vibes",
      items: ["Prefers public places", "Open to group hangout", "Respectful conversations only"]
    },
    {
       label: "Likes", // Repeating as per design
       items: ["Late-night snacks", "Chill environment", "Good playlists"]
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showCloseButton={false} className="max-w-[100vw] w-full h-full bg-black border-none p-0 overflow-y-auto rounded-none flex flex-col no-scrollbar text-white">
        <DialogHeader className="px-6 py-6 flex-row items-center justify-between space-y-0 bg-black">
          <CircularIconButton 
            icon={ChevronLeft} 
            onClick={onClose} 
            iconClassName="w-6 h-6"
          />
          <DialogTitle className="text-h3 flex-1 text-center font-sans">
            {profile.name}'s profile
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed profile view for {profile.name} including bio, interests, and matching details.
          </DialogDescription>
          <CircularIconButton icon={MoreVertical} />
        </DialogHeader>

        <div className="flex-1 px-6 pb-32">
          {/* Profile Card Container */}
          <div className="relative aspect-[4/5] w-full mb-8">
            <Image 
              src={profile.image} 
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-[32px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-[32px]" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-h2 text-white">{profile.name} {profile.age}</span>
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-black stroke-[4]" />
                </div>
              </div>
              <p className="text-white/60 text-sm">{profile.location}</p>
              
              <div className="absolute bottom-0 right-0 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-caption font-semibold">
                {profile.matchPercentage}% Match
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-h3 mb-3">About me</h3>
            <p className="text-white/60 text-body leading-relaxed">
              Resigning and curious. I enjoy good conversations, trying new food spots, and hanging out without pressure.
            </p>
          </div>

          {/* Categorized Tags */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-h3 mb-4">{section.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, i) => (
                    <div 
                      key={i}
                      className="px-4 py-2 rounded-full bg-surface text-white/80 text-caption border border-white/5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 mb-10">
             <h3 className="text-h3 mb-3">What are you looking for</h3>
             <p className="text-white/60 text-body leading-relaxed">
               I'm mainly looking for a space to share ideas. Open for networking and finding regular staycations.
             </p>
          </div>
        </div>

        {/* Bottom Actions - Fixed at bottom of screen */}
        <div className="sticky bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-black via-black to-black/0 flex items-center gap-4 z-20 mt-auto">
          <Button 
            className="flex-1 h-14 rounded-full bg-[#1A1A1A] text-white/40 hover:bg-zinc-800 border-none text-sm font-semibold shadow-xl"
          >
            Buy Virtual coffee
          </Button>
          <Button 
            className="flex-1 h-14 rounded-full bg-brand-gold text-black hover:bg-brand-gold/90 border-none text-sm font-bold shadow-lg shadow-brand-orange/20"
          >
            Chat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
