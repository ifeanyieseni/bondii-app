import React from "react"
import { cn } from "@/lib/utils"

interface CircularIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  iconClassName?: string;
}

export function CircularIconButton({ 
  icon: Icon, 
  className, 
  iconClassName, 
  ...props 
}: CircularIconButtonProps) {
  return (
    <button 
      className={cn(
        "w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
        className
      )}
      {...props}
    >
      <Icon className={cn("w-5 h-5", iconClassName)} />
    </button>
  )
}
