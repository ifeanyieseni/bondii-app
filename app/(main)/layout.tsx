"use client"

import { BottomNav } from "@/components/dashboard/BottomNav"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isChatDetail = pathname.startsWith('/chats/') && pathname !== '/chats'

  return (
    <div className="min-h-svh bg-black text-white relative">
      <div className="flex-1">
        {children}
      </div>
      {!isChatDetail && <BottomNav />}
    </div>
  )
}
