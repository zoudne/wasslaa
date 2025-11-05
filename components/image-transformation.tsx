"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ImageTransformation() {
  const [isTransformed, setIsTransformed] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isAutoPlay) {
      // Start auto-play after initial delay
      const timeoutId = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setIsTransformed((prev) => !prev)
        }, 3000)
      }, 1500) // Wait for initial animation to complete

      return () => {
        clearTimeout(timeoutId)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    } else {
      // Clear interval if auto-play is disabled
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isAutoPlay])

  const handleManualToggle = () => {
    setIsTransformed((prev) => !prev)
    // Pause auto-play when user manually interacts
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
        {/* Old Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransformed ? 0 : 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image src="/images/old-picture.jpg" alt="قبل التحسين" fill className="object-cover" priority />
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            قبل
          </div>
        </motion.div>

        {/* New Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransformed ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image src="/images/new-picture.jpg" alt="بعد التحسين" fill className="object-cover" priority />
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            بعد
          </div>
        </motion.div>
      </div>

      {/* Toggle Button */}
      <motion.button
        onClick={handleManualToggle}
        className="mt-6 w-full bg-primary hover:bg-secondary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isTransformed ? "شاهد الصورة الأصلية" : "شاهد التحسين"}
      </motion.button>

      {/* Auto-play toggle button */}
      <button
        onClick={() => setIsAutoPlay((prev) => !prev)}
        className="mt-3 w-full text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors"
      >
        {isAutoPlay ? "⏸ إيقاف التشغيل التلقائي" : "▶ تشغيل تلقائي"}
      </button>
    </div>
  )
}
