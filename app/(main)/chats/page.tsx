"use client"

import React from "react"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { BottomNav } from "@/components/dashboard/BottomNav"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CHATS = [
  {
    id: 1,
    name: "Movie Night Team",
    message: "I wanna hang out with you",
    time: "1:28pm",
    count: 58,
    image: "https://images.unsplash.com/photo-1485043433441-db091a258e5a?auto=format&fit=crop&q=80&w=100",
    isGroup: true,
  },
  {
    id: 2,
    name: "Lord Rings",
    message: "I wanna hang out with you",
    time: "1:28pm",
    count: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    online: true,
  },
  {
    id: 3,
    name: "Chidera Obi",
    message: "I wanna hang out with you",
    time: "1d",
    image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&q=80&w=100",
    online: true,
  },
  {
    id: 4,
    name: "Miracle Nneoma",
    message: "I wanna hang out with you",
    time: "1:28pm",
    count: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    online: true,
  },
  {
    id: 5,
    name: "Emma Nnannna",
    message: "I wanna hang out with you",
    time: "3d",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 6,
    name: "Ruth Nnu",
    message: "I wanna hang out with you",
    time: "1:28pm",
    count: 4,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
    online: true,
  },
]

export default function ChatsPage() {
  const filters = [
    { label: "All", count: null, active: true },
    { label: "Group", count: 15, active: false },
    { label: "Unread", count: 28, active: false },
    { label: "Love", count: 109, active: false },
  ]

  return (
    <div className="min-h-svh bg-[#0A0A0A] text-white flex flex-col font-sans">
      <DashboardHeader title="Chats" />
      
      <main className="flex-1 px-4 pt-4 pb-32">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
          <input 
            type="text" 
            placeholder="Search chat by name"
            className="w-full h-14 bg-surface rounded-2xl pl-12 pr-4 text-body text-white placeholder:text-white/20 border-none focus:ring-1 focus:ring-brand-orange/50 transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
          {filters.map((filter) => (
            <button 
              key={filter.label}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-caption font-bold whitespace-nowrap border border-white/5 transition-all
                ${filter.active ? "card-gradient text-black" : "bg-white/5 text-white/40 hover:text-white"}
              `}
            >
              {filter.label} {filter.count !== null && <span>{filter.count}</span>}
            </button>
          ))}
        </div>

        {/* Chat List */}
        <div className="space-y-6">
          {CHATS.map((chat) => (
            <Link 
              key={chat.id} 
              href={`/chats/${chat.id}`}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <Image 
                    src={chat.image} 
                    alt={chat.name}
                    fill
                    sizes="56px"
                    className="rounded-full object-cover border border-white/10"
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-black" />
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-body font-bold text-white group-hover:text-brand-orange transition-colors">
                    {chat.name}
                  </h3>
                  <p className="text-caption text-white/40 line-clamp-1">
                    {chat.message}
                  </p>
                </div>
              </div>

              <div className="text-right space-y-2">
                <p className="text-caption text-white/40">{chat.time}</p>
                {chat.count && (
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/20">
                    <span className="text-caption font-bold text-white">{chat.count}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
