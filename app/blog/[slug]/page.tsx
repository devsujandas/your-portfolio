"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"
import { FiArrowLeft, FiCalendar, FiShare2, FiBookmark } from "react-icons/fi"

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
  content: string
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [bookmarked, setBookmarked] = useState(false)
  const [shareError, setShareError] = useState("")

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.blogs.find((b: Blog) => b.slug === slug)
        setBlog(foundBlog || null)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading blog:", err)
        setLoading(false)
      })
  }, [slug])

  const handleShare = async () => {
    if (!blog) return

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.description,
          url: window.location.href,
        })
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err)
          setShareError("Failed to share")
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href)
        setShareError("Link copied to clipboard!")
        setTimeout(() => setShareError(""), 2000)
      } catch (err) {
        console.error("Error copying to clipboard:", err)
        setShareError("Unable to share. Please try again.")
      }
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-40">
          <div className="text-muted-foreground">Loading blog...</div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-40">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Blog not found</h2>
            <Link href="/blog" className="text-primary hover:underline">
              Back to blogs
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm font-medium"
          >
            <FiArrowLeft size={16} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Featured Image with Bookmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-96 md:h-[450px] rounded-xl overflow-hidden mb-6 group"
        >
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg transition-all backdrop-blur-sm"
            aria-label="Bookmark article"
          >
            <FiBookmark
              size={20}
              className={`transition-colors ${bookmarked ? "fill-primary text-primary" : "text-foreground"}`}
            />
          </button>
        </motion.div>

        {/* Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 pb-6 border-b border-border/50 mb-8 text-sm text-muted-foreground"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide">
            {blog.category}
          </span>
          <div className="flex items-center gap-1">
            <FiCalendar size={14} />
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
            </span>
          </div>
          <span>•</span>
          <span className="text-xs">{blog.readTime}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight text-balance"
        >
          {blog.title}
        </motion.h1>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between gap-6 mb-12 pb-8 border-b border-border/50"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary">{blog.author[0]}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">By: {blog.author}</p>
              <p className="text-xs text-muted-foreground">Design & Creative</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {shareError && <span className="text-xs text-primary mr-2">{shareError}</span>}
            <button
              onClick={handleShare}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Share article"
            >
              <FiShare2 size={20} className="text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-6">
            {blog.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("##")) {
                return (
                  <motion.h2
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl text-foreground mt-10 mb-6 pt-4 leading-7 font-normal tracking-normal md:text-lg"
                  >
                    {paragraph.replace("## ", "")}
                  </motion.h2>
                )
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").map((item) => item.replace("- ", ""))
                return (
                  <motion.ul
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-3 mb-6"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )
              }
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-foreground/85 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <div className="bg-secondary/50 border border-border/50 rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">More Articles</h3>
            <p className="text-muted-foreground mb-6">Discover more insights and design tips in our blog collection.</p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
