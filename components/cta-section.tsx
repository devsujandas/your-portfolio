"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Got a project in mind?</h2>
          <p className="text-lg text-muted-foreground">Let's collaborate and create something amazing together.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary/90 transition duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in touch →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
