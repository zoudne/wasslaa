"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isDrawerOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsDrawerOpen(false)
    }
  }

  const navItems = [
    { label: "الرئيسية", id: "hero" },
    { label: "خدماتنا", id: "services" },
    { label: "من نحن", id: "features" },
    { label: "تواصل معنا", id: "contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-32 h-12 md:w-40 md:h-14"
            >
              <Image
                src="/images/white-logo.png"
                alt="waasslaa media"
                fill
                className={`object-contain transition-all duration-300 ${
                  isScrolled
                    ? "brightness-0 saturate-100 invert-[14%] sepia-[89%] saturate-[3089%] hue-rotate-[314deg]"
                    : ""
                }`}
                priority
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors font-medium text-base ${
                    isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className={`font-bold transition-all ${
                    isScrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white hover:bg-white/90 text-primary"
                  }`}
                >
                  احجز استشارة مجانية
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Drawer - slides from right for RTL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 shadow-2xl z-50 md:hidden"
              style={{ background: 'linear-gradient(to bottom, #7B2553, #A50E64)' }}
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                  <div className="relative w-32 h-12">
                    <Image src="/images/white-logo.png" alt="waasslaa media" fill className="object-contain" />
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-right text-white hover:bg-white/10 transition-colors font-medium text-base md:text-lg py-4 px-4 rounded-lg"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="p-6 border-t border-white/20">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-white hover:bg-white/90 text-primary font-bold text-base md:text-lg py-6"
                  >
                    احجز استشارة مجانية
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
