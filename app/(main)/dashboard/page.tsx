"use client"

import React from "react"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { ProfileSwiper } from "@/components/dashboard/ProfileSwiper"
import { ActionButtons } from "@/components/dashboard/ActionButtons"

export default function DashboardPage() {
  return (
    <div className="flex flex-col font-sans">
      <DashboardHeader />
      
      <main className="flex-1 pb-32">
        <div className="relative h-[65vh] min-h-[450px]">
          <ProfileSwiper />
        </div>
        <div className="mt-4">
          <ActionButtons />
        </div>
      </main>
    </div>
  )
}
