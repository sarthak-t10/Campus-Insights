"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ShaderAnimation } from "@/components/ui/shader-animation"

interface LoadingScreenProps {
  redirectPath?: string
}

export function LoadingScreen({ redirectPath = "/" }: LoadingScreenProps) {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content immediately
    setShowContent(true)

    // Auto-redirect after 4 seconds
    const timer = setTimeout(() => {
      if (redirectPath.startsWith("http")) {
        window.location.href = redirectPath
      } else {
        router.push(redirectPath)
      }
    }, 4000)

    return () => clearTimeout(timer)
  }, [router, redirectPath])

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Shader Animation Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/20"></div>

      {/* BMSCE Text - Text Only, No Image */}
      {showContent && (
        <div 
          className="absolute pointer-events-none z-50 flex flex-col items-center justify-center"
          style={{
            animation: "fadeInUp 0.8s ease-out forwards"
          }}
        >
          {/* BMSCE Text */}
          <h1 
            className="text-6xl md:text-9xl font-bold tracking-[0.1em] text-white text-center"
            style={{
              textShadow: "0 8px 32px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(201, 169, 110, 0.6), 0 0 40px rgba(201, 169, 110, 0.3)",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              letterSpacing: "0.1em",
              filter: "drop-shadow(0 0 10px rgba(201, 169, 110, 0.4))"
            }}
          >
            BMSCE
          </h1>

          {/* Decorative Divider */}
          <div className="mt-6 h-1 w-32 md:w-48 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"></div>

          {/* Subtitle */}
          <p 
            className="mt-6 text-sm md:text-lg text-amber-100 uppercase tracking-[0.2em] font-light"
            style={{
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.8)",
              letterSpacing: "0.2em"
            }}
          >
            Welcome to Excellence
          </p>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
