"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Startup Inc",
    period: "Jan 2023 - Present",
    description:
      "Leading frontend development with React and Next.js, mentoring junior developers and architecting scalable solutions.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency Co",
    period: "Jun 2021 - Dec 2022",
    description: "Developed custom web applications using Next.js, React, and Node.js for various clients.",
  },
]

export function Experience() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20 rounded-3xl">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Top experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition duration-300 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
