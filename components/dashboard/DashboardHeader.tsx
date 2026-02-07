"use client"

import React from "react"
import { SlidersHorizontal, MapPin } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardFilter } from "@/components/dashboard/DashboardFilter"
import { CircularIconButton } from "@/components/ui/circular-icon-button"

export function DashboardHeader({ title }: { title?: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black sticky top-0 z-40">
      <DashboardSidebar />

      {/* Center Toggle / Title */}
      <div className="flex items-center bg-surface rounded-full p-1">
        {title ? (
          <div className="px-6 py-2 rounded-full card-gradient text-black font-bold text-xs">
            {title}
          </div>
        ) : (
          <>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full card-gradient text-black font-semibold text-xs transition-transform active:scale-95">
              <span className="w-3 h-3 rounded-full bg-black/20 flex items-center justify-center">
                🔥
              </span>
              For you
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white/60 font-medium text-xs hover:text-white transition-colors">
              <MapPin className="w-3 h-3" />
              Nearby
            </button>
          </>
        )}
      </div>

      <DashboardFilter />
    </div>
  )
}
