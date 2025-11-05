"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ImageTransformation() {
  const [isTransformed, setIsTransformed] = useState(false)

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
          <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
          <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            بعد
          </div>
        </motion.div>
      </div>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsTransformed(!isTransformed)}
        className="mt-6 w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isTransformed ? "شاهد الصورة الأصلية" : "شاهد التحسين"}
      </motion.button>

      {/* Auto-play animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onAnimationComplete={() => {
          const interval = setInterval(() => {
            setIsTransformed((prev) => !prev)
          }, 3000)
          return () => clearInterval(interval)
        }}
      />
    </div>
  )
}
