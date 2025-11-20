"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  year: string
}

export default function Work() {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json")
        const data = await response.json()
        setProjects(data.projects)
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "UI/UX Design", value: "ui-ux" },
    { label: "Product Design", value: "product" },
    { label: "Mobile", value: "mobile" },
    { label: "Web", value: "web" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 pb-20 flex items-center justify-center">
          <p className="text-muted-foreground">Loading projects...</p>
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
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-accent uppercase tracking-wide"
            >
              My work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold"
            >
               Projects & Case Studies
            </motion.h1>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/case-study/${project.id}`} className="space-y-4 block">
                    <div className="relative overflow-hidden rounded-lg bg-muted h-64">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-accent font-medium">{project.category}</p>
                          <h3 className="text-lg font-bold group-hover:text-accent transition">{project.title}</h3>
                        </div>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
