"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { SignUpLayout } from "@/components/onboarding/SignUpLayout"
import { AccountStep } from "@/components/onboarding/steps/AccountStep"
import { VerificationStep } from "@/components/onboarding/steps/VerificationStep"
import { CountryStep } from "@/components/onboarding/steps/CountryStep"
import { StateStep } from "@/components/onboarding/steps/StateStep"

import { ProfileStep } from "@/components/onboarding/steps/ProfileStep"
import { InterestsStep } from "@/components/onboarding/steps/InterestsStep"
import { IdealMatchStep } from "@/components/onboarding/steps/IdealMatchStep"
import { PhotosStep } from "@/components/onboarding/steps/PhotosStep"

type FlowStep = "account" | "verification" | "country" | "state" | "profile" | "interests" | "ideal-match" | "photos" | "complete"

export function SignUpContainer() {
  const [step, setStep] = useState<FlowStep>("account")
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    state: "",
    profile: {},
    interests: [] as string[],
    idealMatch: "",
    photos: [] as string[],
  })

  // Start with 8 steps visible as per design (8/8 match)
  const totalSteps = 8

  const getStepNumber = () => {
    switch (step) {
      case "account": return 1
      case "verification": return 2
      case "country": return 3
      case "state": return 4
      case "profile": return 5
      case "interests": return 6
      case "ideal-match": return 7
      case "photos": return 8
      default: return 1
    }
  }

  const handleAccountNext = (data: any) => {
    setFormData(prev => ({ ...prev, email: data.email }))
    setStep("verification")
  }

  const handleVerification = (code: string) => {
    // In a real app, verify code here
    setStep("country")
  }

  const handleCountrySelect = (country: string) => {
    setFormData(prev => ({ ...prev, country }))
    setStep("state")
  }

  const handleStateSelect = (state: string) => {
    setFormData(prev => ({ ...prev, state }))
    setStep("profile")
  }

  const handleProfileNext = (data: any) => {
    setFormData(prev => ({ ...prev, profile: data }))
    setStep("interests")
  }

  const handleInterestsNext = (interests: string[]) => {
    setFormData(prev => ({ ...prev, interests }))
    setStep("ideal-match")
  }

  const handleMatchNext = (match: string) => {
    setFormData(prev => ({ ...prev, idealMatch: match }))
    setStep("photos")
  }

  const handlePhotosNext = (photos: string[]) => {
    setFormData(prev => ({ ...prev, photos }))
    console.log("Signup flow completed with data:", { ...formData, photos })
    // Navigate to dashboard or completion page
    router.push("/dashboard") 
  }

  const router = useRouter()

  const handleBack = () => {
    if (step === "account") router.push("/")
    if (step === "verification") setStep("account")
    if (step === "country") setStep("verification")
    if (step === "state") setStep("country")
    if (step === "profile") setStep("state")
    if (step === "interests") setStep("profile")
    if (step === "ideal-match") setStep("interests")
    if (step === "photos") setStep("ideal-match")
  }

  return (
    <SignUpLayout
      currentStep={getStepNumber()}
      totalSteps={totalSteps}
      onBack={handleBack}
      title={step === "profile" ? "Profile section" : undefined}
    >
      {step === "account" && (
        <AccountStep
          onNext={handleAccountNext}
          onSignIn={() => router.push("/login")}
        />
      )}
      {step === "verification" && (
        <VerificationStep
          email={formData.email}
          onVerify={handleVerification}
        />
      )}
      {step === "country" && (
        <CountryStep
          onSelect={handleCountrySelect}
        />
      )}
      {step === "state" && (
        <StateStep
          onSelect={handleStateSelect}
        />
      )}
      {step === "profile" && (
        <ProfileStep
          onNext={handleProfileNext}
          initialEmail={formData.email}
        />
      )}
      {step === "interests" && (
        <InterestsStep
          onNext={handleInterestsNext}
          initialInterests={formData.interests}
        />
      )}
      {step === "ideal-match" && (
        <IdealMatchStep
          onNext={handleMatchNext}
          initialMatch={formData.idealMatch}
        />
      )}
      {step === "photos" && (
        <PhotosStep
          onNext={handlePhotosNext}
          initialPhotos={formData.photos}
        />
      )}
    </SignUpLayout>
  )
}
