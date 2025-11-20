"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { IoGlobe, IoSettings } from "react-icons/io5"
import { FaPalette, FaCube, FaMobileScreen, FaBriefcase } from "react-icons/fa6"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  price: string
  icon: string
}

// Map icon names to components
const iconMap: Record<string, React.ComponentType<any>> = {
  FaPalette: FaPalette,
  FaCube: FaCube,
  IoGlobe: IoGlobe,
  FaMobileScreen: FaMobileScreen,
  IoSettings: IoSettings,
  FaBriefcase: FaBriefcase,
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data/services.json")
        const data = await response.json()
        setServices(data.services)
      } catch (error) {
        console.error("Failed to fetch services:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 pb-20 flex items-center justify-center">
          <p className="text-muted-foreground">Loading services...</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-accent uppercase tracking-wide"
            >
              Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Services I Offer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Comprehensive design solutions tailored to your needs
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const IconComponent = iconMap[service.icon]
                return (
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`} key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className="group border border-border rounded-lg p-8 hover:border-accent transition cursor-pointer h-full"
                    >
                      <div className="space-y-4">
                        {IconComponent && (
                          <div className="mb-4">
                            <IconComponent className="w-12 h-12 text-accent" />
                          </div>
                        )}
                        <h3 className="text-2xl font-bold group-hover:text-accent transition">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        <div className="space-y-3 py-4">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-border pt-4">
                          <p className="font-semibold text-accent">{service.price}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-muted/30 -mx-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <div className="space-y-3">
                <p className="text-sm font-medium text-accent uppercase tracking-wide">How I Work</p>
                <h2 className="text-4xl font-bold">My Design Process</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Discovery", desc: "Understanding your needs and goals" },
                  { step: "2", title: "Strategy", desc: "Defining approach and roadmap" },
                  { step: "3", title: "Design", desc: "Creating beautiful solutions" },
                  { step: "4", title: "Deliver", desc: "Launch and iterate" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold">Ready to start your project?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss what you need and create something amazing together.
            </p>
          </motion.div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Schedule a consultation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
