"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface PhotosStepProps {
  onNext: (photos: string[]) => void
  initialPhotos?: string[]
}

export function PhotosStep({ onNext, initialPhotos = [] }: PhotosStepProps) {
  // Initialize with 4 slots, populated with initial photos or empty
  const [photos, setPhotos] = useState<(string | null)[]>(() => {
    const filled = [...initialPhotos]
    return Array(4).fill(null).map((_, i) => filled[i] || null)
  })

  const handlePhotoUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotos(prev => {
          const newPhotos = [...prev]
          newPhotos[index] = reader.result as string
          return newPhotos
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const filledCount = photos.filter(Boolean).length

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold font-sans text-center">Add your Pictures</h1>
        <p className="text-white/60 text-center text-xs">
          Add good images to get good amount of daily chats
        </p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-square relative">
              <label
                htmlFor={`photo-upload-${index}`}
                className={cn(
                  "w-full h-full rounded-3xl flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300",
                  photo 
                    ? "bg-[#1A1A1A] border-none" 
                    : "bg-white/5 border-2 border-dashed border-white/20 hover:bg-white/10 hover:border-white/40"
                )}
              >
                {photo ? (
                  <>
                    <img 
                      src={photo} 
                      alt={`Upload ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <Camera className="w-4 h-4 text-white" />
                    </div>
                  </>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <input
                  id={`photo-upload-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handlePhotoUpload(index, e)}
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-auto">
        <Button
          onClick={() => onNext(photos.filter(Boolean) as string[])}
          // Requiring at least 1 photo for now, adjust based on requirements
          disabled={filledCount === 0}
          className="w-full h-14 rounded-full text-lg font-medium bg-brand-gradient border-none hover:opacity-90 transition-opacity"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
