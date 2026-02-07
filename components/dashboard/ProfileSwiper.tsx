"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ProfileCard } from "@/components/dashboard/ProfileCard"
import { UserProfileView } from "@/components/dashboard/UserProfileView"
import { Profile } from "@/types/dashboard"

const MOCK_PROFILES: Profile[] = [
  {
    id: 1,
    name: "Promise",
    age: 29,
    image: "/images/profile-promise.png",
    location: "Lagos, Nigeria",
    badges: ["Cooks", "Sings", "Blogger"],
    matchPercentage: 78
  },
  {
    id: 2,
    name: "David",
    age: 30,
    image: "/images/profile-david.png",
    location: "Abuja, Nigeria",
    badges: ["Designer", "Travel", "Music"],
    matchPercentage: 85
  },
  {
    id: 3,
    name: "Sarah",
    age: 25,
    image: "/images/profile-sarah.png",
    location: "Seoul, Korea",
    badges: ["Art", "Coffee", "Books"],
    matchPercentage: 92
  },
  {
    id: 4,
    name: "Michael",
    age: 28,
    image: "/images/profile-michael.png",
    location: "Denver, USA",
    badges: ["Hiking", "Fitness", "Nature"],
    matchPercentage: 81
  },
  {
    id: 5,
    name: "Jessica",
    age: 27,
    image: "/images/profile-jessica.png",
    location: "Mexico City, Mexico",
    badges: ["Fashion", "Dancing", "Foodie"],
    matchPercentage: 76
  }
]

export function ProfileSwiper() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 })
  const [selectedProfile, setSelectedProfile] = React.useState<Profile | null>(null)
  const [isViewOpen, setIsViewOpen] = React.useState(false)

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile)
    setIsViewOpen(true)
  }

  return (
    <div className="overflow-hidden h-full w-full rounded-[32px]" ref={emblaRef}>
      <div className="flex h-full touch-pan-y">
        {MOCK_PROFILES.map((profile) => (
          <div key={profile.id} className="flex-[0_0_100%] min-w-0 h-full relative px-1">
             <ProfileCard 
               image={profile.image}
               name={profile.name}
               age={profile.age}
               badges={profile.badges}
               matchPercentage={profile.matchPercentage}
               location={profile.location}
               onClick={() => handleProfileClick(profile)}
             />
          </div>
        ))}
      </div>

      <UserProfileView 
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        profile={selectedProfile}
      />
    </div>
  )
}
