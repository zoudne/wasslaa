"use client"

import { motion } from "framer-motion"
import { ImageTransformation } from "./image-transformation"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7B2553] via-[#A50E64] to-[#7B2553] py-20 px-4 pt-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black leading-tight text-balance"
            >
              منتجك حلو؟
              <br />
              <span className="text-white/90">إحنا نخليه أحلى بالصورة</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
            >
              تصويرنا لمنتجاتك يخلّيك تقول: ليش ما صورت عندكم من قبل؟
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-white text-[#7B2553] hover:bg-white/90 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                تواصل معنا
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-4 px-8 rounded-full transition-all duration-300 border-2 border-white/30 inline-block"
              >
                خدماتنا
              </a>
            </motion.div>
          </motion.div>

          {/* Image Transformation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ImageTransformation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
