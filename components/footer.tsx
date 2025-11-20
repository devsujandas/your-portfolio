"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="space-y-3"
>
  <h3 className="font-bold text-lg tracking-widest flex items-center gap-1">

    <motion.span
      className="rounded-full"
      initial={{ width: 6, height: 6, backgroundColor: "#ff0000" }}
      animate={{
        width: [6, 12, 6],
        height: [6, 12, 6],
        backgroundColor: ["#ff0000", "#00ff00", "#ff0000"]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    SUJAN
  </h3>

  <p className="text-sm text-muted-foreground">
    Crafting beautiful digital experiences
  </p>
</motion.div>


          {/* Navigation */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-3">
            <h4 className="font-semibold text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Work
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-3">
            <h4 className="font-semibold text-sm">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Github
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-3">
            <h4 className="font-semibold text-sm">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">hello@sujan.com</p>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium text-accent hover:text-accent/80 transition"
            >
              Send a message →
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {currentYear} Sujan. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
