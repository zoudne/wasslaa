"use client"

import { motion } from "framer-motion"
import { Camera, Sparkles, Share2, TrendingUp, Palette, Edit } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "تصوير المنتجات",
    description: "تصوير احترافي يبرز جمال وتفاصيل منتجاتك بأعلى جودة",
  },
  {
    icon: Sparkles,
    title: "التصوير التجاري والإعلاني",
    description: "حملات إعلانية بصرية تجذب الانتباه وتحقق النتائج",
  },
  {
    icon: Share2,
    title: "محتوى السوشيال ميديا",
    description: "محتوى بصري مميز يزيد من تفاعل جمهورك",
  },
  {
    icon: TrendingUp,
    title: "تعزيز العلامة التجارية",
    description: "صور تعكس هوية علامتك التجارية وتميزك عن المنافسين",
  },
  {
    icon: Palette,
    title: "استشارات التسويق البصري",
    description: "نساعدك في بناء استراتيجية بصرية فعالة",
  },
  {
    icon: Edit,
    title: "تحرير وتنقيح الصور",
    description: "تحسين احترافي للصور لتظهر بأفضل شكل ممكن",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">خدماتنا</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            نخلي منتجك نجم السوشيال ميديا
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary group"
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
