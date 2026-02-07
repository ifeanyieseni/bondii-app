"use client"

import React from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { 
  User, 
  Wallet, 
  Bell, 
  Settings, 
  Lock, 
  Gift, 
  HelpCircle,
  LogOut, 
  SlidersHorizontal 
} from "lucide-react"
import { CircularIconButton } from "@/components/ui/circular-icon-button"
import { Profile } from "@/types/dashboard"

export function DashboardSidebar() {
  const menuItems = [
    { icon: User, label: "Profile setting" },
    { icon: Wallet, label: "My Wallet" },
    { icon: Bell, label: "Notifications" },
    { icon: Settings, label: "Settings" },
    { icon: Lock, label: "Terms and conditions" },
    { icon: Gift, label: "Gift" },
    { icon: HelpCircle, label: "Get help" },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CircularIconButton icon={SlidersHorizontal} />
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[85%] sm:w-[380px] bg-[#121212] border-r-white/10 p-0 text-white overflow-y-auto no-scrollbar"
        showCloseButton={false}
      >
        <SheetTitle className="sr-only">Navigational Sidebar</SheetTitle>
        <SheetDescription className="sr-only">Access your profile settings, wallet, notifications, and more.</SheetDescription>
        <div className="flex flex-col h-full p-6">
          {/* Profile Header */}
          <div className="w-full h-16 rounded-full bg-brand-gradient p-1 flex items-center gap-3 mb-8 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="h-full aspect-square rounded-full overflow-hidden border-2 border-white/20">
               <img src="/images/profile-promise.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
               <h3 className="font-bold text-black text-lg">Promise Onyema</h3>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-6 flex-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button key={index} className="flex items-center gap-4 text-white/60 hover:text-brand-gold transition-colors w-full text-left group">
                  <Icon className="w-6 h-6 group-hover:text-brand-gold" />
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              )
            })}

            {/* Deactivate Account */}
            <div className="flex items-center justify-between pt-4">
               <div className="flex items-center gap-4 text-white/60">
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-white/60 rounded-full p-0.5">
                    <div className="w-full h-full rounded-full border border-white/60" /> {/* Abstract icon for deactivate */}
                  </div>
                  <span className="text-base font-medium">Deactivate Account</span>
               </div>
               <Switch className="data-[state=checked]:bg-brand-gold" />
            </div>

            {/* Sign Out */}
            <button className="flex items-center gap-4 text-white/60 hover:text-red-500 transition-colors w-full text-left mt-4">
              <LogOut className="w-6 h-6" />
              <span className="text-base font-medium">Sign out</span>
            </button>
          </div>

          {/* Premium Card */}
          <div className="mt-8 relative w-full rounded-3xl bg-brand-gradient p-6 text-center shadow-lg">
             <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-3xl pointer-events-none" />
             <p className="text-black font-semibold text-sm mb-4 leading-tight">
               Go Premium to get the<br/>Verification badge
             </p>
             <button className="bg-black text-brand-gold font-bold text-sm px-6 py-3 rounded-full hover:bg-black/80 transition-colors w-full">
               Go Premium
             </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
