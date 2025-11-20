"use client"

import { motion } from "framer-motion"
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiPostgresql, SiNodedotjs } from "react-icons/si"

export function Skills() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
  ]

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
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-secondary/50 transition duration-300 shadow-sm"
              >
                <div className="flex justify-center mb-2">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm font-semibold">{skill.name}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
        >
          <motion.p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in full-stack development with a focus on creating robust and scalable applications. My
            experience includes working with various technologies and frameworks to deliver high-quality solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
