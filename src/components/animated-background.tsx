'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || theme === 'dark') {
    return null
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating paint brushes */}
      <motion.div
        className="absolute w-8 h-8 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #a855f7, #ec4899)',
          borderRadius: '40% 60% 70% 30%'
        }}
        animate={{
          x: [0, 100, 200, 100, 0],
          y: [0, -50, 50, 100, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        initial={{ x: -50, y: "20vh" }}
      />

      <motion.div
        className="absolute w-6 h-6 opacity-8"
        style={{
          background: 'linear-gradient(-45deg, #fb923c, #a855f7)',
          borderRadius: '30% 70% 60% 40%'
        }}
        animate={{
          x: [0, -100, -200, -100, 0],
          y: [0, 80, -30, 60, 0],
          rotate: [0, -180, -360],
          scale: [0.8, 1.1, 0.9, 0.8]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        initial={{ x: "100vw", y: "60vh" }}
      />

      <motion.div
        className="absolute w-4 h-4 opacity-12"
        style={{
          background: 'radial-gradient(circle, #ec4899, #fb923c)',
          borderRadius: '50%'
        }}
        animate={{
          x: [0, 150, -50, 80, 0],
          y: [0, -80, 40, -20, 0],
          scale: [1, 1.5, 0.5, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ x: "30vw", y: "80vh" }}
      />

      {/* Paint splatter dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-6"
          style={{
            background: `linear-gradient(${i * 45}deg, #a855f7, #ec4899, #fb923c)`,
          }}
          animate={{
            y: [0, -window.innerHeight * 0.1, 0],
            x: [0, (i % 2 === 0 ? 50 : -50), 0],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeOut"
          }}
          initial={{ 
            x: `${10 + i * 12}vw`, 
            y: "100vh" 
          }}
        />
      ))}
    </div>
  )
}