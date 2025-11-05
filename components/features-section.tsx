"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  "لا تضيع جمال منتجاتك .. إحنا نضبطك",
  "صورة منتجاتك عندنا غير",
  "خل صور منتجاتك تتكلم بدالك",
  "نصور منتجك بطريقة تخلي الزبون يشتري قبل لا يسأل",
  "مو بس تصوير.. نسوق لك بصور تجذب وتبيع",
  "تبي الناس تلتفت لمنتجك؟ إحنا نضبطه",
]

function FeatureCard({ text, index }: { text: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group"
    >
      <motion.div
        className="text-6xl font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        {index + 1}
      </motion.div>
      <p className="text-base md:text-lg font-bold text-foreground leading-relaxed text-pretty">{text}</p>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">ليش تختار وصلة ميديا؟</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            صور محترفة ترفع قيمة منتجك بعيون عملائك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} text={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
