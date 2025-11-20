"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-20 md:pb-0">
        <Hero />
        <FeaturedProjects />
        <Skills />
        <Services />
        <Experience />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
