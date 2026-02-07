"use client"

import React from "react"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface SignUpLayoutProps {
  children: React.ReactNode
  currentStep: number
  totalSteps: number
  onBack?: () => void
  title?: string
  className?: string
}

export function SignUpLayout({
  children,
  currentStep,
  totalSteps,
  onBack,
  title,
  className,
}: SignUpLayoutProps) {
  return (
    <div className={cn("flex flex-col min-h-svh bg-black text-white px-6 pt-6 pb-24", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-xs font-medium text-white/80">
          {currentStep}/{totalSteps}
        </div>
      </div>

      {title && (
        <h1 className="text-2xl font-bold font-sans text-center mb-8">{title}</h1>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  )
}
