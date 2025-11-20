"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { FiHome, FiUser, FiBriefcase, FiSettings, FiMail, FiFileText } from "react-icons/fi"
import { ThemeToggle } from "./theme-toggle"

function useIsTabletOrMobile() {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isSmall
}

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const isSmallScreen = useIsTabletOrMobile()
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const navItems = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "About", href: "/about", icon: FiUser },
    { name: "Work", href: "/work", icon: FiBriefcase },
    { name: "Services", href: "/services", icon: FiSettings },
    { name: "Blog", href: "/blog", icon: FiFileText },
    { name: "Contact", href: "/contact", icon: FiMail },
  ]

  // DESKTOP NAVBAR (unchanged)
  if (!isSmallScreen) {
    return (
      <motion.nav
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 rounded-3xl bg-background/90 backdrop-blur-xl shadow-xl border border-border/40 flex flex-col items-center py-8 w-16 h-[85vh]"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 flex flex-col gap-6">
          {navItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="w-12 h-12 rounded-xl bg-muted/40 hover:bg-muted/70 
                    flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mb-4">
          <ThemeToggle />
        </div>

        <motion.div
          className="w-3 h-3 rounded-full bg-secondary/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.nav>
    )
  }

  // MOBILE NAVBAR WITH 2-LINE UNIQUE MENU
  return (
    <>
      {/* Top bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 bg-background/70 backdrop-blur-xl border-b border-border/40 z-50"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* NEW UNIQUE 2-LINE BUTTON */}
        <button onClick={() => setOpen(!open)} className="relative w-12 h-12 flex items-center justify-center">
          {/* Long Line */}
          <motion.span
            className="absolute h-[3px] w-7 rounded-full bg-muted-foreground"
            animate={open ? { rotate: 45, y: 4, width: "28px" } : { rotate: 0, y: -4, width: "30px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* Small Line */}
          <motion.span
            className="absolute h-[3px] w-5 rounded-full bg-muted-foreground"
            animate={open ? { rotate: -45, y: -4, width: "28px" } : { rotate: 0, y: 6, width: "20px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </button>

        <ThemeToggle />
      </motion.nav>

      {/* FLOATING MENU PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-16 left-4 right-4 rounded-3xl bg-background/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-border/40 p-6 z-50"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {navItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="w-full h-16 rounded-2xl bg-muted/40 
                        shadow-lg backdrop-blur-xl flex flex-col 
                        items-center justify-center transition-all duration-300 group"
                    >
                      <motion.div whileHover={{ scale: 1.18 }}>
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
