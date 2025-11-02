'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  value: string
  className: string
  children?: React.ReactNode
}

export function ContactButton({ href, icon, label, value, className, children }: ContactButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = async (e: React.MouseEvent) => {
    if (isMobile) {
      // On mobile, use default behavior (open dialer/email app)
      return
    }

    e.preventDefault()
    
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setShowTooltip(true)
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Hide tooltip after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(false)
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      // Fallback: still show the tooltip with the value
      setShowTooltip(true)
      setCopied(false)
      
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(false)
      }, 3000)
    }
  }

  const handleMouseLeave = () => {
    if (!copied) {
      setShowTooltip(false)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      <motion.a
        href={href}
        className={className}
        aria-label={`${label}: ${value}`}
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.a>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-gray-700 dark:border-gray-300">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{value}</span>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-400 dark:text-green-600 text-xs"
                  >
                    ✓ Copied!
                  </motion.span>
                )}
              </div>
              <div className="text-xs opacity-75 mt-1">
                {copied ? 'Copied to clipboard' : 'Click to copy'}
              </div>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}