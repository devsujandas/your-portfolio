"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Blog {
  id: number
  title: string
  slug: string
  category: string
  description: string
  image: string
  author: string
  date: string
  readTime: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch blog data from JSON
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading blogs:", err)
        setLoading(false)
      })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore articles on design, UX, and digital innovation. Stay updated with the latest trends and best
            practices.
          </p>
        </motion.div>

        {/* Blog Grid - 3 columns on desktop */}
        {!loading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog, idx) => (
              <motion.div key={blog.id} variants={itemVariants}>
                <Link href={`/blog/${blog.slug}`}>
                  <div className="h-full rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    {/* Image Container */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </p>
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{blog.description}</p>
                      <p className="text-xs text-muted-foreground font-medium">By {blog.author}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-muted-foreground">Loading blogs...</div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
