import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ShowcaseGallery } from "@/components/showcase-gallery"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ShowcaseGallery />
      <ServicesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
