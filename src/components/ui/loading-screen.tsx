"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ShaderAnimation } from "@/components/ui/shader-animation"

interface LoadingScreenProps {
  redirectPath?: string
}

export function LoadingScreen({ redirectPath = "/" }: LoadingScreenProps) {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content immediately with fade-in
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
      <div className="absolute inset-0 z-10 bg-black/30"></div>
      
      {/* Campus Building Image - Main Focus */}
      {showContent && (
        <div 
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none animate-slideUp"
          style={{
            animation: "slideUp 0.8s ease-out forwards"
          }}
        >
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src="/assets/images/Campus Buiding.png"
              alt="Campus Building"
              fill
              className="object-contain"
              priority
              onError={(e) => {
                // Fallback: if image fails to load, show BMSCE logo
                e.currentTarget.src = "/assets/images/logo.jpeg"
              }}
            />
          </div>
        </div>
      )}
      
      {/* Loading Indicator Only */}
      {showContent && (
        <div 
          className="absolute pointer-events-none z-50 bottom-20 flex items-center justify-center gap-3"
          style={{
            animation: "slideUp 0.8s ease-out forwards 0.2s both"
          }}
        >
          <div className="flex gap-2">
            <div 
              className="h-2 w-2 rounded-full bg-amber-400"
              style={{
                animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite"
              }}
            ></div>
            <div 
              className="h-2 w-2 rounded-full bg-amber-400"
              style={{
                animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.2s"
              }}
            ></div>
            <div 
              className="h-2 w-2 rounded-full bg-amber-400"
              style={{
                animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.4s"
              }}
            ></div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
