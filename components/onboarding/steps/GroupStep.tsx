import React from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

export function GroupStep() {
  return (
    <div className="flex flex-col items-center justify-end h-full px-6 pb-10 text-center">
      {/* Visual Section */}
      <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] mb-8 flex-shrink-0 flex items-center justify-center">
        {/* Dashed Gold Border Frame */}
         <div className="absolute inset-4 border-[2px] border-dashed border-[#FFB800] rounded-[48px] z-0" />
         
        {/* Main Group Image */}
        <div className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[380px] rounded-[48px] overflow-hidden z-10">
          <Image
            src="/onboarding/group.png"
            alt="Group Hangout"
            fill
            className="object-cover"
          />
          {/* Subtle vignette/gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Floating Heart Icons */}
        {/* Large Top Right */}
        <div className="absolute top-[2%] right-[2%] z-30 transform hover:scale-110 transition-transform">
          <div className="bg-gradient-to-b from-[#E68A00] to-[#992600] rounded-full p-4 border-2 border-black/20 shadow-xl">
              <Heart size={36} fill="black" stroke="black" />
          </div>
        </div>

        {/* Small Bottom Left */}
        <div className="absolute bottom-[20%] left-[0%] z-30 transform hover:scale-110 transition-transform">
           <div className="bg-gradient-to-b from-[#E68A00] to-[#992600] rounded-full p-2.5 border-2 border-black/20 shadow-xl">
              <Heart size={20} fill="black" stroke="black" />
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 m-auto w-48 h-48 bg-[#FFB800] rounded-full blur-[90px] opacity-15 z-0" />
      </div>

      {/* Text Section */}
      <div className="space-y-2 mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight px-4">
          Hang out in a group
        </h1>
        <p className="text-gray-400 text-lg px-4">
          Create or join group hangouts when you don't want a one-on-one meetup.
        </p>
      </div>
    </div>
  )
}
