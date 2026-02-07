"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Camera } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const profileSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  dob: z.date({ message: "Date of birth is required" }),
  gender: z.string({ message: "Please select a gender" }).min(1, "Please select a gender"),
  email: z.string().email(),
  phoneNumber: z.string().min(10, "Phone number is invalid"),
  occupation: z.string().min(2, "Occupation is required"),
})

type ProfileFormValues = z.infer<typeof profileSchema>

interface ProfileStepProps {
  onNext: (data: ProfileFormValues) => void
  initialEmail?: string
}

export function ProfileStep({ onNext, initialEmail = "" }: ProfileStepProps) {
  const [avatar, setAvatar] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: initialEmail,
    },
  })

  const dob = watch("dob")

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar pb-24">
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden border-2 border-dashed border-white/20">
            {avatar ? (
              <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <Camera className="w-8 h-8 text-white/40" />
            )}
          </div>
          <label
            htmlFor="avatar-upload"
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center cursor-pointer border-2 border-black"
          >
            <Camera className="w-4 h-4 text-white" />
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-5">
        <div className="space-y-2">
          <Label className="text-white/60 text-sm font-medium">Full name</Label>
          <Input
            {...register("fullName")}
            placeholder="Enter your email address" // Placeholder matches design, though label is Name
            className="bg-[#1A1A1A] border-none h-14 rounded-2xl px-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50"
          />
          {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
        </div>

        <div className="space-y-2">
          <Label className="text-white/60 text-sm font-medium">Date of birth</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full h-14 rounded-2xl bg-[#1A1A1A] border-none px-5 text-left font-normal hover:bg-[#1A1A1A] hover:text-white justify-start",
                  !dob && "text-white/20"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dob ? format(dob, "dd/MM/yyyy") : <span>22/12/2026</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#1A1A1A] border-white/10" align="start">
              <Calendar
                mode="single"
                selected={dob}
                onSelect={(date) => date && setValue("dob", date)}
                initialFocus
                className="text-white"
              />
            </PopoverContent>
          </Popover>
          {errors.dob && <span className="text-red-500 text-xs">{errors.dob.message}</span>}
        </div>

        <div className="space-y-2">
          <Label className="text-white/60 text-sm font-medium">Gender</Label>
          <Select onValueChange={(val) => setValue("gender", val)}>
            <SelectTrigger className="w-full h-14 rounded-2xl bg-[#1A1A1A] border-none px-5 text-white/50 hover:bg-[#1A1A1A] focus:ring-1 focus:ring-brand-orange/50 data-[placeholder]:text-white/20">
              <SelectValue placeholder="I am a male or female" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-white/10 text-white">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <span className="text-red-500 text-xs">{errors.gender.message}</span>}
        </div>

        <div className="space-y-2">
          <Label className="text-white/60 text-sm font-medium">Email</Label>
          <Input
            {...register("email")}
            placeholder="Rewrite yor password" // Matches design placeholder
            className="bg-[#1A1A1A] border-none h-14 rounded-2xl px-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50"
          />
           {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        <div className="space-y-2">
          <Label className="text-white/60 text-sm font-medium">Phone Number</Label>
          <div className="relative">
             <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-white/10 pr-3 z-10">
                <span className="text-xs text-white/60">+234</span>
                <span className="text-[10px] text-white/40">▼</span>
             </div>
            <Input
              {...register("phoneNumber")}
              placeholder="000 000 00 000"
              className="bg-[#1A1A1A] border-none h-14 rounded-2xl pl-24 pr-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50"
            />
          </div>
          {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}
        </div>

        <div className="space-y-2">
          <Label className="text-white/60 text-sm font-medium">Occupation</Label>
          <Input
            {...register("occupation")}
             placeholder="Type in your occupation"
            className="bg-[#1A1A1A] border-none h-14 rounded-2xl px-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50"
          />
          {errors.occupation && <span className="text-red-500 text-xs">{errors.occupation.message}</span>}
        </div>

        <Button
          type="submit"
          className="w-full h-14 rounded-full text-lg font-medium bg-brand-gradient border-none hover:opacity-90 transition-opacity mt-4"
        >
          Continue
        </Button>
      </form>
    </div>
  )
}
