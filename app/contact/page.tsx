"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FiAtSign } from "react-icons/fi"

export default function Contact() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    "UI/UX Design",
    "Product Design",
    "Web Design",
    "Mobile App Design",
    "Design System",
    "Consultation",
  ]

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setFormData((prev) => ({
        ...prev,
        subject: decodeURIComponent(service),
      }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">Get in touch</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Interested in working together? Feel free to reach out! I'm always excited to discuss new projects and
                opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-card border-2 border-border rounded-2xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition duration-300 font-medium"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-card border-2 border-border rounded-2xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition duration-300 font-medium"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold mb-3">
                        Service
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-card border-2 border-border rounded-2xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition duration-300 font-medium cursor-pointer appearance-none bg-no-repeat pr-12"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundPosition: "right 12px center",
                          backgroundSize: "20px",
                        }}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-6 py-4 bg-card border-2 border-border rounded-2xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition duration-300 resize-none font-medium"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-secondary text-white rounded-2xl font-semibold hover:bg-secondary/90 transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    {submitted ? "✓ Message sent!" : "Send message"}
                  </motion.button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 bg-secondary/10 border-2 border-secondary rounded-2xl text-center text-secondary font-semibold"
                    >
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Info - Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                {/* Email Card */}
                <motion.a
                  href="mailto:contact@sujandas.info"
                  whileHover={{ y: -4 }}
                  className="block p-6 bg-card border-2 border-border rounded-2xl hover:border-secondary/50 transition duration-300 hover:shadow-md group"
                >
                  <div className="mb-3">
                    <FaEnvelope className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</p>
                  <p className="font-bold text-secondary group-hover:text-secondary/80 transition break-all">
                    contact@sujandas.info
                  </p>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+9185098XXXXX"
                  whileHover={{ y: -4 }}
                  className="block p-6 bg-card border-2 border-border rounded-2xl hover:border-secondary/50 transition duration-300 hover:shadow-md group"
                >
                  <div className="mb-3">
                    <FaPhone className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone</p>
                  <p className="font-bold text-secondary group-hover:text-secondary/80 transition">+91 85098XXXXX</p>
                </motion.a>

                {/* Social Links Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-card border-2 border-border rounded-2xl hover:border-secondary/50 transition duration-300 hover:shadow-md"
                >
                  <div className="mb-3">
                    <FiAtSign className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Follow</p>
                  <div className="space-y-3 flex flex-col">
                    {[
                      { name: "Twitter", icon: FaXTwitter, href: "#" },
                      { name: "LinkedIn", icon: FaLinkedin, href: "#" },
                      { name: "GitHub", icon: FaGithub, href: "#" },
                      { name: "Instagram", icon: FaInstagram, href: "#" },
                    ].map((social) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition font-semibold text-sm"
                        >
                          <IconComponent className="w-4 h-4" />
                          {social.name} →
                        </a>
                      )
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
