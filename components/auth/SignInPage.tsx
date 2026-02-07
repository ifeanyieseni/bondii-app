"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
// For social icons, we'll use SVGs directly or Lucide if available. 
// Google and Apple logos are usually custom SVGs.
import { Facebook, Eye, EyeOff } from "lucide-react" 
import Image from "next/image"

export default function SignInPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Add auth logic here
    router.push("/dashboard")
  }

  return (
    <div className="min-h-svh bg-black text-white flex flex-col font-sans overflow-y-auto">
      {/* Curved Header Image Container */}
      <div className="relative w-full h-48 bg-zinc-900 overflow-hidden rounded-b-[40px]">
        {/* Placeholder for the group image - functionality to add actual image later */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center text-white/20">
             <Image 
              src="/images/login-header.png"
              alt="Welcome Back"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
              priority
            />
        </div>
        {/* Overlay gradient if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="flex-1 px-6 pt-8 pb-24 flex flex-col">
        <h1 className="text-h1 text-center mb-8">Welcome back</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium pl-1">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="h-14 rounded-2xl bg-surface border-none text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-brand-orange/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-base font-medium pl-1">Password</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Create a password" 
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="h-14 rounded-2xl bg-surface border-none text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-brand-orange/50 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full h-14 rounded-full text-lg font-medium card-gradient border-none hover:opacity-90 transition-opacity mt-4 text-black"
          >
            Log in
          </Button>
        </form>

        <div className="mt-8 mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <span className="relative bg-black px-4 text-sm text-white/60">
            Or continue with
          </span>
        </div>

        <div className="flex justify-center gap-6">
           {/* Google */}
           <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
             <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
             </svg>
           </button>
           
           {/* Facebook */}
           <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Facebook className="w-6 h-6 text-[#1877F2] fill-current" />
           </button>

           {/* Apple */}
           <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24.02-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.93-.97 1.29.05 2.54.43 3.37 1.43-3.14 1.76-2.58 6.09.43 7.33-.89 1.83-1.95 3.36-2.81 4.44zM13 5.2c.49-2.26 2.43-3.02 2.43-3.02-.45 2.12-2.18 3.52-4.47 3.38-.1-2.07 1-2.91 2.04-3.36z"/>
              </svg>
           </button>
        </div>

        <div className="mt-auto pt-6 text-center text-sm text-white/60">
          Do not have an account?{" "}
          <Link href="/signup" className="text-[#A32E14] font-semibold hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
