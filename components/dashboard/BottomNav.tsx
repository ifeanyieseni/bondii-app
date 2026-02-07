"use client"

import React from "react"
import { Home, Binoculars, Users, Heart, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    { icon: Binoculars, label: "Explore", href: "/explore" },
    { icon: Users, label: "Group", href: "/group" },
    { icon: Heart, label: "Loved", href: "/loved" },
    { icon: MessageSquare, label: "Chat", href: "/chats" },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-3 bg-zinc-900/60 backdrop-blur-xl rounded-[32px] flex items-center gap-3 z-50 border border-white/5 shadow-2xl">
      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        if (isActive) {
          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-gradient rounded-full transition-all duration-300"
            >
              <Icon className="w-5 h-5 text-black fill-black" />
              <span className="text-xs font-bold text-black">{item.label}</span>
            </Link>
          )
        }
        return (
          <Link
            key={index}
            href={item.href}
            className="p-3 text-white/40 hover:text-white transition-all duration-300 active:scale-90"
          >
            <Icon className="w-6 h-6" />
          </Link>
        )
      })}
    </div>
  )
}
