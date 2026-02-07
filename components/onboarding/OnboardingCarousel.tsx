"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ValentineStep } from "@/components/onboarding/steps/ValentineStep"
import { PairingStep } from "@/components/onboarding/steps/PairingStep"
import { GroupStep } from "@/components/onboarding/steps/GroupStep"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

export function OnboardingCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans overflow-hidden ">
      <div className="flex-1 relative">
        <Carousel 
          setApi={setApi} 
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full ml-0">
            <CarouselItem className="pl-0 h-full">
              <ValentineStep />
            </CarouselItem>
            <CarouselItem className="pl-0 h-full">
              <PairingStep />
            </CarouselItem>
            <CarouselItem className="pl-0 h-full">
              <GroupStep />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Shared Footer */}
      <div className="px-6 pb-8 pt-2 flex flex-col items-center gap-4 bg-black z-50">
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-colors duration-300",
                current === i ? "bg-[#FFB800]" : "bg-[#4B4B4B]"
              )}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col items-center gap-4 mb-4">
         <Link href="/signup">
          <Button
            className="w-full h-14 rounded-full text-lg font-medium bg-gradient-to-b from-[#E68A00] to-[#992600] border-none hover:opacity-90 transition-opacity"
          >
            Create an account
          </Button>
         </Link>
          
          <div className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-[#A32E14] font-semibold cursor-pointer hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
