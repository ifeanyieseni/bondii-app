import React from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function PairingStep() {
  const avatars = [
    { src: "/onboarding/avatar-1.png", top: "5%", left: "15%" },
    { src: "/onboarding/avatar-2.png", top: "0%", left: "55%" },
    { src: "/onboarding/avatar-3.png", top: "45%", right: "0%" },
    { src: "/onboarding/avatar-4.png", bottom: "10%", right: "15%" },
    { src: "/onboarding/avatar-1.png", bottom: "10%", left: "10%" },
    { src: "/onboarding/avatar-2.png", bottom: "-5%", left: "45%" },
  ]

  return (
    <div className="flex flex-col items-center justify-end h-full px-6 pb-10 text-center">
      {/* Visual Section */}
      <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] mb-8 flex-shrink-0 flex items-center justify-center">
        {/* Circular Dashed Path */}
        <div className="absolute inset-0 border-[1.5px] border-dashed border-[#FFB800]/40 rounded-full scale-[0.85]" />
        
        {/* Floating Avatars on the path */}
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black overflow-hidden z-20"
            style={{
              top: avatar.top,
              left: avatar.left,
              right: avatar.right,
              bottom: avatar.bottom,
            }}
          >
            <Image
              src={avatar.src}
              alt={`Avatar ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Location Pins */}
        <div className="absolute top-[35%] left-[5%] z-30 text-[#FFB800] drop-shadow-lg">
          <MapPin size={28} fill="currentColor" />
        </div>
        <div className="absolute top-[20%] right-[15%] z-30 text-[#FFB800] drop-shadow-lg">
          <div className="bg-[#FFB800] rounded-full p-1.5 border-2 border-black">
             <MapPin size={14} fill="black" stroke="black" />
          </div>
        </div>

        {/* Central Portrait - Oval/Egg Shape */}
        <div className="relative w-[190px] sm:w-[230px] h-[260px] sm:h-[320px] rounded-[110px] border-[6px] border-[#A37B24] overflow-hidden z-10 shadow-2xl">
          <Image
            src="/onboarding/pairing-center.png"
            alt="Main User"
            fill
            className="object-cover"
          />
        </div>

        {/* Gold Glow */}
        <div className="absolute inset-x-0 bottom-0 top-0 m-auto w-32 h-48 bg-[#FFB800] rounded-full blur-3xl opacity-20 z-0" />
      </div>

      {/* Text Section */}
      <div className="space-y-2 mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight px-2">
          Get paired with someone nearby
        </h1>
        <p className="text-gray-400 text-lg">
          No long distance , just real connection
        </p>
      </div>
    </div>
  )
}
