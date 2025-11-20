"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function About() {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research"] },
    { category: "Tools", items: ["Figma", "Adobe XD", "Sketch", "Protopie"] },
    { category: "Methods", items: ["Design Thinking", "User Testing", "A/B Testing", "Accessibility"] },
  ]

  const experience = [
    {
      year: "2023 - Present",
      role: "Senior Product Designer",
      company: "Tech Innovations Inc",
      description: "Leading design strategy and execution for core product features",
    },
    {
      year: "2021 - 2023",
      role: "Product Designer",
      company: "Creative Studio Co",
      description: "Designed and shipped multiple products for diverse client base",
    },
    {
      year: "2019 - 2021",
      role: "UI/UX Designer",
      company: "Digital First Agency",
      description: "Crafted digital experiences for leading brands",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-sm font-medium text-accent uppercase tracking-wide">About me</p>
              <h1 className="text-5xl md:text-6xl font-bold">Passionate about design & user experience</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a designer with over 5 years of experience creating digital products that users love. My approach
                combines strategic thinking with creative execution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-muted rounded-lg h-96 overflow-hidden">
                <img
                  src="/about.jpeg"
                  alt="Designer portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                I started my design journey 5+ years ago with a passion for solving problems through beautiful
                interfaces. What began as freelance projects has evolved into a career designing products used by
                millions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My design philosophy centers on understanding user needs deeply, iterating based on feedback, and
                creating accessible, inclusive experiences. I believe that great design is invisible - it just works.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond design, I love mentoring junior designers, writing about design processes, and constantly
                exploring new tools and methodologies to improve my craft.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-muted/30 -mx-4 -mb-20 px-4 py-20 sm:px-6 lg:px-8 rounded-3xl">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-3"
            >
              <p className="text-sm font-medium text-accent uppercase tracking-wide">Expertise</p>
              <h2 className="text-4xl font-bold">Skills & Tools</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-4 sm:px-6 lg:px-8 pt-20 mb-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-3 mb-12"
            >
              <p className="text-sm font-medium text-accent uppercase tracking-wide">Background</p>
              <h2 className="text-4xl font-bold">Experience</h2>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="border-l-2 border-accent pl-6 pb-8"
                >
                  <p className="text-sm font-medium text-accent mb-1">{exp.year}</p>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-accent mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold">Let's work together</h2>
            <p className="text-lg text-muted-foreground">Ready to start your next project?</p>
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
              View my work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
