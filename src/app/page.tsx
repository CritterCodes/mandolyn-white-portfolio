'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'
import { ThemeToggle } from '@/components/theme-toggle'
import { SplashScreen } from '@/components/splash-screen'
import { AnimatedBackground } from '@/components/animated-background'
import { ContactButton } from '@/components/contact-button'

export default function Home() {
    const [showSplash, setShowSplash] = useState(true)

    if (showSplash) {
        return <SplashScreen onComplete={() => setShowSplash(false)} />
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    }

    return (
        <motion.main 
            className="min-h-screen bg-artistic-pattern bg-watercolor dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900 transition-all duration-500 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <AnimatedBackground />
            <ThemeToggle />

            {/* Container with mobile-first responsive design */}
            <motion.div 
                className="max-w-md mx-auto p-6 space-y-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Header Section - Headshot, Name, Title */}
                <motion.div 
                    className="text-center space-y-4" 
                    variants={itemVariants}
                >
                    {/* Professional headshot */}
                    <motion.div 
                        className="w-32 h-32 mx-auto relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/images/mandolynHeadshot.jpg"
                            alt="Mandolyn White - Mural Artist"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                            priority
                        />
                    </motion.div>

                    {/* Name and Title */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Mandolyn White</h1>
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">Mural Artist</p>
                    </motion.div>
                </motion.div>

                {/* Bio Section */}
                <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        Mandolyn White is an Arkansas native and
                        Oklahoma City-based muralist whose bold,
                        community-driven art celebrates color,
                        culture, and connection. Mandolyn brings
                        hometown pride and a distinctive creative
                        voice to every project. Her work spans large-
                        scale murals, illustration, and custom design,
                        blending storytelling with vibrant palettes
                        that energize and inspire.
                    </p>
                </motion.div>

                {/* Connect With Me Section */}
                <motion.div 
                    className="space-y-4"
                    variants={itemVariants}
                >
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Connect With Me</h2>

                    <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
                        {/* Phone */}
                        <ContactButton
                            href="tel:+1234567890"
                            value="(123) 456-7890"
                            label="Phone"
                            icon={<FaPhone className="w-5 h-5" />}
                            className="flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                        />

                        {/* Email */}
                        <ContactButton
                            href="mailto:mandolyn@example.com"
                            value="mandolyn@example.com"
                            label="Email"
                            icon={<FaEnvelope className="w-5 h-5" />}
                            className="flex items-center justify-center w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                        />

                        {/* Facebook */}
                        <motion.a
                            href="https://www.facebook.com/share/16NKMtdhBr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                            aria-label="Facebook"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaFacebook className="w-6 h-6" />
                        </motion.a>

                        {/* Instagram */}
                        <motion.a
                            href="https://www.instagram.com/mandolynrae_?igsh=cWtuemEzOGNza2gy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                            aria-label="Instagram"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaInstagram className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Gallery Section */}
                <motion.div 
                    className="space-y-4"
                    variants={itemVariants}
                >
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Gallery</h2>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Placeholder gallery items */}
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div 
                                key={item} 
                                className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-700 dark:to-purple-800 rounded-lg flex items-center justify-center border border-purple-200 dark:border-gray-600"
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="text-gray-500 dark:text-gray-400 text-sm">Gallery {item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div 
                    className="text-center text-gray-500 dark:text-gray-400 text-sm pt-8 space-y-2"
                    variants={itemVariants}
                >
                    <p>© 2025 Mandolyn White. All rights reserved.</p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Built by{' '}
                        <motion.a
                            href="https://crittercodes.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            CritterCodes
                        </motion.a>
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.main>
    )
}