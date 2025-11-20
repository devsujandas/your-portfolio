"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Project {
  id: string
  title: string
  image: string
}

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects.slice(0, 4)))
      .catch((err) => console.error("Error loading projects:", err))
  }, [])

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/case-study/${project.id}`} className="block h-full">
                <div className="relative overflow-hidden rounded-2xl bg-muted h-72 mb-6 shadow-md hover:shadow-lg transition duration-300">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold hover:text-secondary transition duration-300">{project.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
