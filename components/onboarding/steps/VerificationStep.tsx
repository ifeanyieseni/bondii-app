"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

interface VerificationStepProps {
  email: string
  onVerify: (code: string) => void
}

export function VerificationStep({ email, onVerify }: VerificationStepProps) {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex-1 flex flex-col justify-between pb-10">
      <div className="space-y-8">
        <div className="space-y-2">
        <h1 className="text-2xl font-bold font-sans text-center">Enter your verification code</h1>
        <p className="text-white/60 text-center text-sm">
          We have sent a code to <span className="text-white">{email}</span>
        </p>
      </div>

      <div className="flex justify-center py-4">
        <InputOTP
          maxLength={4}
          value={value}
          onChange={(val) => setValue(val)}
        >
          <InputOTPGroup className="gap-4">
            <InputOTPSlot
              index={0}
              className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border-none text-2xl font-semibold !ring-brand-orange/50 !outline-none"
            />
            <InputOTPSlot
              index={1}
              className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border-none text-2xl font-semibold !ring-brand-orange/50 !outline-none"
            />
            <InputOTPSlot
              index={2}
              className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border-none text-2xl font-semibold !ring-brand-orange/50 !outline-none"
            />
            <InputOTPSlot
              index={3}
              className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border-none text-2xl font-semibold !ring-brand-orange/50 !outline-none"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>

    <Button
      disabled={value.length < 4}
      onClick={() => onVerify(value)}
      className="w-full h-14 rounded-full text-lg font-medium bg-brand-gradient border-none hover:opacity-90 transition-opacity mt-4"
    >
      Verify
    </Button>
  </div>
  )
}
