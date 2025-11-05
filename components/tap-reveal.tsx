"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface TapRevealProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function TapReveal({ beforeImage, afterImage, beforeLabel = "قبل", afterLabel = "بعد" }: TapRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="relative w-full aspect-square">
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
        onClick={() => setIsRevealed(!isRevealed)}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="before"
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={beforeImage || "/placeholder.svg"} alt={beforeLabel} fill className="object-cover" />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {beforeLabel}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={afterImage || "/placeholder.svg"} alt={afterLabel} fill className="object-cover" />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {afterLabel}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tap Instruction */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span>اضغط للكشف</span>
          <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            👆
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  )
}
