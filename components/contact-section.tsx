"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Globe } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "الهاتف",
    value: "67634966",
    href: "tel:+96567634966",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@waaslaa.com",
    href: "mailto:info@waaslaa.com",
  },
  {
    icon: Instagram,
    label: "إنستغرام",
    value: "@waaslaamedia",
    href: "https://instagram.com/waaslaamedia",
  },
  {
    icon: Globe,
    label: "الموقع",
    value: "waaslaa.com",
    href: "http://waaslaa.com",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 text-balance">تواصل معنا</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">منتجاتك تستاهل تصوير يبيّن قيمتها</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === Instagram || item.icon === Globe ? "_blank" : undefined}
              rel={item.icon === Instagram || item.icon === Globe ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group flex items-center gap-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-xl font-bold text-foreground">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-[#7B2553] to-[#A50E64] p-12 rounded-3xl shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 text-balance">
            المنتج اللي نصوره غير، ينشهر أسرع
          </h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">نخلي زبونك يحب المنتج من أول نظرة</p>
          <a
            href="tel:+96567634966"
            className="bg-white text-[#7B2553] hover:bg-white/90 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            اتصل الآن
          </a>
        </motion.div>
      </div>
    </section>
  )
}
