"use client"

import { motion } from "framer-motion"
import { IoGlobe, IoSettings, IoDocumentOutline, IoCart } from "react-icons/io5"

export function Services() {
  const services = [
    {
      icon: IoGlobe,
      title: "Web Application",
      description: "Custom web applications tailored to your business needs",
    },
    {
      icon: IoSettings,
      title: "SaaS",
      description: "Scalable and robust Software as a Service solutions",
    },
    {
      icon: IoDocumentOutline,
      title: "Landing Page",
      description: "High-converting landing pages to boost your online presence",
    },
    {
      icon: IoCart,
      title: "E-commerce",
      description: "Powerful online stores to grow your business",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold flex items-center gap-3"
        >
          <span className="text-secondary">{"</>"}</span>
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
