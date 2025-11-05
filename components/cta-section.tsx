"use client"

import { motion } from "framer-motion"

const ctaMessages = [
  "منتجك حلو، بس بصورتنا يصير مطلوب",
  "نخلي الزبون يشتري من الصورة قبل لا يجرب",
  "لا تتعب بالكلام.. صورة محترفة تبيع أسرع",
  "عطنا المنتج، وخلنا نرجّعلك زباين",
  "نصور منتجك بطريقة تخلي الناس تقول: وين ينباع؟",
  "كل صورة إعلان.. وكل لقطة فرصة بيع",
]

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#7B2553] to-[#A50E64] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-balance">صورة قوية = مبيعات قوية</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ctaMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-base font-semibold leading-relaxed text-pretty">{message}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-bold mb-8 text-balance">بدال لاتقول منتجي زين خل الصورة تتكلم</p>
            <a
              href="#contact"
              className="bg-white text-[#7B2553] hover:bg-white/90 font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl inline-block text-base md:text-lg"
            >
              ابدأ الآن
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
