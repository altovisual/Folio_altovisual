"use client"

import { useEffect, useState } from "react"
import Terminal from "@/components/terminal"
import BootSequence from "@/components/boot-sequence"
import { CRTToggle } from "@/components/crt-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { MatrixRain } from "@/components/matrix-rain"

export default function Home() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-5" />

      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <LanguageToggle />
        <CRTToggle />
      </div>

      <div className="container mx-auto px-4 py-8 h-screen flex flex-col relative z-10">
        {booting ? <BootSequence /> : <Terminal />}
      </div>
    </main>
  )
}
