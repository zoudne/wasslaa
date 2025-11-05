"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface HoverRevealProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function HoverReveal({ beforeImage, afterImage, beforeLabel = "قبل", afterLabel = "بعد" }: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Before Image */}
      <motion.div className="absolute inset-0" animate={{ opacity: isHovered ? 0 : 1 }} transition={{ duration: 0.6 }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeLabel} fill className="object-cover" />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          {beforeLabel}
        </div>
      </motion.div>

      {/* After Image */}
      <motion.div className="absolute inset-0" animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.6 }}>
        <Image src={afterImage || "/placeholder.svg"} alt={afterLabel} fill className="object-cover" />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          {afterLabel}
        </div>
      </motion.div>

      {/* Hover Instruction */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
        animate={{ opacity: isHovered ? 0 : 1 }}
      >
        مرر للكشف
      </motion.div>
    </motion.div>
  )
}
