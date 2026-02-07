"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel, FieldContent } from "@/components/ui/field"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignupFormValues = z.infer<typeof signupSchema>

interface AccountStepProps {
  onNext: (data: SignupFormValues) => void
  onSignIn: () => void
}

export function AccountStep({ onNext, onSignIn }: AccountStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

  return (
    <div className="flex-1 flex flex-col justify-between">
      <form onSubmit={handleSubmit(onNext)} className="space-y-5">
        <Field>
          <FieldLabel className="text-white/60 text-sm font-normal">Email</FieldLabel>
          <FieldContent>
            <Input
              {...register("email")}
              placeholder="Enter your email address"
              className="bg-[#1A1A1A] border-none h-14 rounded-2xl px-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50"
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel className="text-white/60 text-sm font-normal">Password</FieldLabel>
          <FieldContent>
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="bg-[#1A1A1A] border-none h-14 rounded-2xl px-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50 pr-12 w-full"
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
            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel className="text-white/60 text-sm font-normal">Confirm password</FieldLabel>
          <FieldContent>
            <div className="relative">
              <Input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Rewrite yor password"
                className="bg-[#1A1A1A] border-none h-14 rounded-2xl px-5 text-white placeholder:text-white/20 focus:ring-1 focus:ring-brand-orange/50 pr-12 w-full"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>}
          </FieldContent>
        </Field>

        <Button
          type="submit"
          className="w-full h-14 rounded-full text-lg font-medium bg-brand-gradient border-none hover:opacity-90 transition-opacity mt-2"
        >
          Create an account
        </Button>
      </form>

      {/* Social Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-transparent" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-black px-4 text-white/60">Or continue with</span>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <SocialButton icon="/images/google-icon.png" alt="Google" />
        <SocialButton icon="/images/facebook-icon.png" alt="Facebook" />
        <SocialButton icon="/images/apple-icon.png" alt="Apple" />
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-white/80">
        Already have an account?{" "}
        <button onClick={onSignIn} className="text-[#A32E14] font-semibold hover:underline">
          Sign In
        </button>
      </div>
    </div>
  )
}

function SocialButton({ icon, alt }: { icon: string; alt: string }) {
  return (
    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity">
      <div className="relative w-6 h-6">
        {/* We use a placeholder since the image is not available yet, but using the actual src for implementation */}
        <div className="w-full h-full bg-slate-200 rounded-sm" /> 
        {/* <Image src={icon} alt={alt} fill className="object-contain" /> */}
      </div>
    </button>
  )
}
