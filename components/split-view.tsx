"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface SplitViewProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function SplitView({ beforeImage, afterImage, beforeLabel = "قبل", afterLabel = "بعد" }: SplitViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
      {/* After Image (shown first in RTL) */}
      <motion.div
        className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image src={afterImage || "/placeholder.svg"} alt={afterLabel} fill className="object-cover" />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          {afterLabel}
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Before Image */}
      <motion.div
        className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeLabel} fill className="object-cover" />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          {beforeLabel}
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}
