"use client"

import React from "react"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { BottomNav } from "@/components/dashboard/BottomNav"
import { Users, Heart, Calendar, Clock, MapPin } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { CircularIconButton } from "@/components/ui/circular-icon-button"
import Image from "next/image"

const GROUP_EVENTS = [
  {
    id: 1,
    title: "Movie Night",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
    timeLeft: "3 days left",
    tags: ["#Movie", "#Romance", "#18+"],
    date: "Saturday, Oct 26, 2025",
    time: "6:00pm - 11:00pm",
    location: "Meetup point: The Zone Cinema, Gbagada, Lagos State",
    personLeft: "2 Person Left",
    personMax: "5 Person Max",
    price: "N0"
  },
  {
    id: 2,
    title: "Food crawl",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    timeLeft: "1 day left",
    tags: ["#Food", "#Social"],
    date: "Sunday, Oct 27, 2025",
    time: "2:00pm - 6:00pm",
    location: "Meetup point: Lekki Phase 1",
    personLeft: "1 Person Left",
    personMax: "3 Person Max",
    price: "N0"
  },
]

export default function GroupPage() {
  const [emblaRef] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  })

  return (
    <div className="flex flex-col font-sans">
      <DashboardHeader />
      
      <main className="flex-1 px-4 pt-4 pb-32">
        {/* Banner Section */}
        <div className="relative w-full h-[200px] rounded-[32px] overflow-hidden mb-8 bg-brand-gradient p-[1px]">
          <div className="absolute inset-0 bg-black rounded-[32px] overflow-hidden">
             <div className="absolute inset-0 bg-brand-gradient opacity-60 flex items-center justify-between px-6">
                <div className="max-w-[180px]">
                  <h2 className="text-h2 leading-tight mb-2">Prefer a group hangout?</h2>
                  <p className="text-caption text-white/80 mb-4">Create one. People nearby can join</p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-brand-gold rounded-full text-black text-caption font-bold">
                    <Users className="w-4 h-4" />
                    Create Group
                  </button>
                </div>
                 <div className="h-full relative aspect-video flex items-center pr-6">
                    <Image 
                     src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400" 
                     alt="Group"
                     fill
                     sizes="200px"
                     className="object-cover opacity-80" 
                    />
                 </div>
             </div>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {GROUP_EVENTS.map((event) => (
              <div 
                key={event.id}
                className="flex-[0_0_85%] min-w-0 bg-surface rounded-[32px] overflow-hidden border border-white/5 shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-[200px]">
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <CircularIconButton 
                    icon={Heart} 
                    className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 border border-white/10"
                    iconClassName="text-white/80"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                   <div className="flex items-center justify-between mb-4">
                      <h3 className="text-h2">{event.title}</h3>
                      <div className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-caption font-bold border border-brand-orange/20">
                        {event.timeLeft}
                      </div>
                   </div>

                    <div className="flex gap-2 mb-6">
                       {event.tags.map(tag => (
                         <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-caption text-white font-medium">
                           {tag}
                         </span>
                       ))}
                    </div>

                   <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span className="text-caption font-medium">{event.date}</span>
                        <span className="mx-1">|</span>
                        <Clock className="w-4 h-4" />
                        <span className="text-caption font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2 text-white/60 bg-white/5 p-3 rounded-xl border border-white/5">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <span className="text-caption font-medium leading-relaxed">{event.location}</span>
                      </div>
                   </div>

                   <div className="flex items-center justify-between mb-6">
                      <div className="space-y-1">
                        <p className="text-caption font-bold border-b border-white text-white w-fit">{event.personLeft}</p>
                        <p className="text-caption text-white/40">{event.personMax}</p>
                      </div>
                      <div className="text-h2">
                        {event.price}
                      </div>
                   </div>

                   <button className="w-full h-14 bg-brand-gold rounded-full text-black font-bold text-sm shadow-lg shadow-brand-orange/20 hover:bg-brand-gold/90 transition-colors">
                      Join Group
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
