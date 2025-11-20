"use client"

import { motion, easeOut } from "framer-motion"  
import Link from "next/link"
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram, FaDribbble, FaEnvelope } from "react-icons/fa6"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },  
  },
}

export function Hero() {
  const socialLinks = [
    { icon: FaXTwitter, label: "Twitter", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaDribbble, label: "Dribbble", href: "#" },
    { icon: FaEnvelope, label: "Email", href: "#" },
  ]

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Main Hero Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-60 sm:h-72 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-secondary to-accent overflow-hidden shadow-lg flex-shrink-0"
              >
                <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </motion.div>

              {/* Hero Content */}
              <div className="flex flex-col justify-center space-y-4 flex-1">
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold leading-tight">
                  Hi, I'm <span className="text-secondary">Sujan</span> –
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  A Passionate Designer and Developer, specializing in Next.js/React and modern web technologies
                </motion.p>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition"
                  >
                    Get in touch →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Social Cards */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center p-4 bg-muted/50 hover:bg-secondary/20 rounded-2xl transition duration-300"
                    title={social.label}
                  >
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
