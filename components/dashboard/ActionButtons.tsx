"use client"

import React from "react"
import { Heart, MessageCircle, Gift, User, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function ActionButtons() {
  const actions = [
    { icon: Heart, label: "Like", color: "text-brand-orange" },
    { icon: MessageCircle, label: "Chat", color: "text-brand-orange" },
    { icon: Gift, label: "Gift", color: "text-brand-orange" },
    { icon: User, label: "Profile", color: "text-brand-orange" },
    { icon: X, label: "Pass", color: "text-red-500" },
  ]

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      {actions.map((action, index) => {
        const Icon = action.icon
        return (
          <button
            key={index}
            className="w-12 h-12 rounded-full bg-surface flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            <Icon className={cn("w-5 h-5", action.color)} />
          </button>
        )
      })}
    </div>
  )
}
