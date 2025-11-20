"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useParams } from "next/navigation"

interface CaseStudy {
  id: number
  title: string
  year: string
  category: string
  description: string
  client: string
  role: string
  timeline: string
  tools: string[]
  problem: string
  solution: string
  image: string
}

export default function CaseStudy() {
  const params = useParams()
  const [project, setProject] = useState<CaseStudy | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json")
        const data = await response.json()
        const found = data.projects.find((p: CaseStudy) => p.id === Number.parseInt(params.id as string))
        setProject(found || null)
      } catch (error) {
        console.error("Failed to fetch project:", error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProjects()
    }
  }, [params.id])

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 pb-20 flex items-center justify-center">
          <p className="text-muted-foreground">Loading case study...</p>
        </main>
        <Footer />
      </>
    )
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 pb-20 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">Project not found</p>
            <Link href="/work" className="inline-block text-secondary hover:text-secondary/80">
              Back to projects →
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm font-medium text-accent uppercase tracking-wide">Case study</p>
              <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </motion.div>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            >
              <div>
                <p className="text-sm text-muted-foreground mb-1">Client</p>
                <p className="font-semibold">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Role</p>
                <p className="font-semibold">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                <p className="font-semibold">{project.timeline}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Year</p>
                <p className="font-semibold">{project.year}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
          <div className="rounded-lg overflow-hidden aspect-[16/9]">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          </div>
        </motion.div>
        </section>


        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-12">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold">Problem</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold">Solution</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                </motion.div>

                {/* Key Takeaways */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold">Key Takeaways</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        User research is crucial for understanding real pain points
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Iterative design based on feedback leads to better outcomes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Accessibility should be considered from the start</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Tools */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-bold">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-background rounded text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-bold">Project Type</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold">Interested in working together?</h2>
            <p className="text-lg text-muted-foreground">Let's discuss your project and create something amazing.</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Get in touch
            </Link>
            <Link
              href="/work"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition"
            >
              See more work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
