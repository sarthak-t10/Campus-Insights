"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ShaderAnimation } from "@/components/ui/shader-animation"

export function LoadingScreen() {
  const router = useRouter()

  useEffect(() => {
    // Auto-redirect to home after 4 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-black/30"></div>
      
      <div className="absolute pointer-events-none z-50 flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h1 
            className="text-center text-7xl md:text-8xl font-light tracking-widest text-amber-100"
            style={{
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(201, 169, 110, 0.4)",
              fontFamily: "Cormorant Garamond, serif",
              letterSpacing: "0.15em"
            }}
          >
            BMSCE
          </h1>
          <div className="mt-6 h-px w-48 md:w-64 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          <p 
            className="mt-6 text-center text-xs md:text-sm text-amber-100/70 uppercase tracking-widest"
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)"
            }}
          >
            Welcome to Excellence
          </p>
        </div>
        
        <div className="mt-12 flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-amber-500 animate-pulse"></div>
          <span className="text-xs text-amber-100/50 uppercase tracking-widest">Loading</span>
          <div className="h-1 w-1 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
