import React from "react"
import Image from "next/image"
import { Frown, CircleHelp } from "lucide-react"

export function ValentineStep() {
  return (
    <div className="flex flex-col items-center justify-end h-full px-6 pb-10 text-center">
      {/* Visual Section */}
      <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[380px] mb-8 flex-shrink-0">
        {/* Floating Icons */}
        <div className="absolute top-[10%] left-[45%] z-10 text-[#FFB800] transform -translate-x-1/2 -rotate-12">
          <CircleHelp size={28} fill="currentColor" />
        </div>
        <div className="absolute top-[20%] right-[10%] z-10 text-[#FFB800] transform rotate-12">
          <Frown size={28} fill="currentColor" />
        </div>
        <div className="absolute bottom-[25%] left-[0%] z-10 text-[#FFB800] transform -rotate-12">
          <Frown size={28} fill="currentColor" />
        </div>
        
        {/* Slanted Images */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Left/Back Image */}
          <div className="relative w-[170px] sm:w-[200px] h-[230px] sm:h-[270px] rounded-3xl overflow-hidden border-2 border-black transform -rotate-6 -translate-x-14 z-0 translate-y-4">
            <Image
              src="/onboarding/valentine.png"
              alt="Valentine 1"
              fill
              className="object-cover"
            />
            {/* Dark overlay to differentiate if needed */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
          
          {/* Right/Front Image */}
          <div className="relative w-[170px] sm:w-[200px] h-[230px] sm:h-[270px] rounded-3xl overflow-hidden border-2 border-black transform rotate-6 translate-x-6 z-20 -translate-y-4">
            <Image
              src="/onboarding/valentine.png"
              alt="Valentine 2"
              fill
              className="object-cover"
              style={{ objectPosition: 'right center' }}
            />
          </div>
        </div>
        
        {/* Blur glow behind */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-24 h-24 bg-[#FFB800] rounded-full blur-3xl opacity-30 z-10" />
      </div>

      {/* Text Section */}
      <div className="space-y-2 mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight px-4">
          No one to celebrate Valentine with?
        </h1>
        <p className="text-gray-400 text-lg">
          Find someone nearby to share the day.
        </p>
      </div>
    </div>
  )
}
