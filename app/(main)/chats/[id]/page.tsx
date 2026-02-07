"use client"

import React from "react"
import { ChevronLeft, Coffee, Send, Mic, Plus, Smile, MoreVertical } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircularIconButton } from "@/components/ui/circular-icon-button"

const MOCK_MESSAGES = [
  { id: 1, text: "Hi dear, I wanna take you on a date", time: "04:45 PM", sender: "other" },
  { id: 2, text: "I am up for it where are we going to?", time: "04:45 PM", sender: "me" },
  { id: 3, text: "How do you see alittle shopping at shop rite", time: "04:45 PM", sender: "other" },
  { id: 4, text: "What time and date are you looking at", time: "04:45 PM", sender: "me" },
  { id: 5, text: "next tomorrow by 5pm in the evening", time: "04:45 PM", sender: "other" },
  { id: 6, text: "What time and date are you looking at", time: "04:45 PM", sender: "me" },
]

export default function ChatDetailPage() {
  return (
    <div className="flex flex-col min-h-svh bg-black text-white font-sans">
      {/* Chat Header */}
      <header className="flex items-center justify-between px-6 py-6 bg-black sticky top-0 z-10">
        <Link href="/chats">
          <CircularIconButton icon={ChevronLeft} iconClassName="w-6 h-6" />
        </Link>
        <div className="px-6 py-2 rounded-full card-gradient text-black font-bold text-xs uppercase tracking-wider">
          Chats
        </div>
        <CircularIconButton icon={Coffee} iconClassName="fill-current" />
      </header>

      {/* Messages Area */}
      <main className="flex-1 px-6 pt-4 pb-32 space-y-6 overflow-y-auto">
        {MOCK_MESSAGES.map((msg) => (
          <div 
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'other' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[80%] px-5 py-4 rounded-[24px] text-sm leading-relaxed font-medium
                ${msg.sender === 'other' 
                  ? 'bg-[#6B3400] text-white rounded-tr-none' 
                  : 'bg-[#D67C1C] text-black rounded-tl-none'
                }
              `}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-white/40 mt-2 font-medium">
              {msg.time}
            </span>
          </div>
        ))}
      </main>

      {/* Chat Input Bar */}
      <footer className="fixed bottom-10 left-6 right-6 z-20">
        <div className="bg-[#1A1A1A] rounded-full p-2 flex items-center gap-3 shadow-2xl border border-white/5">
          <button className="w-10 h-10 flex items-center justify-center text-brand-orange hover:scale-110 transition-transform">
            <Smile className="w-6 h-6 fill-current" />
          </button>
          
          <div className="flex-1 bg-white rounded-full px-5 py-2.5">
            <input 
              type="text" 
              placeholder="Type your message here ..."
              className="w-full bg-transparent border-none focus:ring-0 text-black text-xs font-medium placeholder:text-zinc-400"
            />
          </div>

          <div className="flex items-center gap-1 pr-2">
            <button className="w-10 h-10 flex items-center justify-center text-brand-orange hover:scale-110 transition-transform">
              <Send className="w-5 h-5 fill-current rotate-[-15deg]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-brand-orange/60 hover:text-brand-orange transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-brand-orange rounded-full text-black hover:bg-brand-orange/90 transition-colors shadow-lg shadow-brand-orange/20">
              <Plus className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
