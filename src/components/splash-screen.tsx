'use client'

import { motion } from 'framer-motion'
import { FaPaintBrush } from 'react-icons/fa'
import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 500) // Wait for exit animation
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated paint brush */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ 
            scale: [0, 1.2, 1],
            rotate: [-45, 15, 0]
          }}
          transition={{ 
            duration: 1.5,
            times: [0, 0.7, 1],
            ease: "easeInOut"
          }}
        >
          <FaPaintBrush className="w-16 h-16 text-white mx-auto" />
        </motion.div>

        {/* Artist name */}
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Mandolyn White
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-xl text-white/90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Mural Artist
        </motion.p>

        {/* Animated dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}