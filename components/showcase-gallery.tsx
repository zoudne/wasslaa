"use client"

import { SliderComparison } from "./slider-comparison"
import { HoverReveal } from "./hover-reveal"
import { SplitView } from "./split-view"
import { TapReveal } from "./tap-reveal"
import { motion } from "framer-motion"

export function ShowcaseGallery() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">معرض أعمالنا</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            تفاعل مع صورنا لترى كيف نحول المنتجات العادية إلى تحف فنية
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Slider Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">مقارنة بالسحب</h3>
            <div className="max-w-3xl mx-auto px-2 sm:px-0">
              <SliderComparison beforeImage="/images/old-picture.jpg" afterImage="/images/new-picture.jpg" />
            </div>
          </motion.div>

          {/* Hover Reveal */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">كشف بالتمرير</h3>
            <div className="max-w-3xl mx-auto px-2 sm:px-0">
              <HoverReveal beforeImage="/images/before.jpg" afterImage="/images/after.jpg" />
            </div>
          </motion.div> */}

          {/* Split View
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">عرض جنبًا إلى جنب</h3>
            <div className="max-w-5xl mx-auto px-2 sm:px-0">
              <SplitView beforeImage="/images/old-picture.jpg" afterImage="/images/new-picture.jpg" />
            </div>
          </motion.div> */}

          {/* Tap Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">كشف بالضغط</h3>
            <div className="max-w-3xl mx-auto px-2 sm:px-0">
              <TapReveal beforeImage="/images/before.jpg" afterImage="/images/after.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
