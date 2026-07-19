"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PsychedelicBackground } from "@/components/PsychedelicEffects"
import { Leaf, Heart, Sun, Mountain, Clock, Shield } from "lucide-react"

const timeline = [
  {
    year: "1969",
    title: "The Seeds Were Planted",
    desc: "It was the Summer of Love redux. Me Maw planted her first cannabis seed in the rich Iowa soil behind the white Gothic farmhouse. What started as rebellion became ritual.",
    icon: Leaf,
  },
  {
    year: "1975",
    title: "The Farmhouse Philosophy",
    desc: "Me Maw and Grandpa developed their homegrown philosophy: no chemicals, no shortcuts, just patience and love. The garden became a sanctuary for the counter-culture community.",
    icon: Heart,
  },
  {
    year: "1995",
    title: "Generations of Knowledge",
    desc: "Three generations of cultivation wisdom passed down. Selective breeding, natural curing, and a deep respect for the plant became the Me Maw's trademark.",
    icon: Mountain,
  },
  {
    year: "2024",
    title: "The Dream Goes Public",
    desc: "Me Maw finally agreed to share her flower with the world. The psychedelic grandparents emerged from the farmhouse with a mission: craft cannabis for the people.",
    icon: Sun,
  },
]

const values = [
  {
    title: "Homegrown Always",
    desc: "Every single plant is cultivated on our family farm. We never outsource, never cut corners. From seed to harvest, it's all Me Maw's hands in the soil.",
    icon: Leaf,
    color: "text-maw-green",
    bg: "bg-maw-green/10 border-maw-green/30",
  },
  {
    title: "Craft Over Mass",
    desc: "Small-batch, hand-tended, obsessively curated. We'd rather grow one perfect strain than a hundred mediocre ones. Quality over quantity, always.",
    icon: Heart,
    color: "text-maw-pink",
    bg: "bg-maw-pink/10 border-maw-pink/30",
  },
  {
    title: "Lab Tested & Safe",
    desc: "Every batch goes through independent lab testing. No pesticides, no contaminants, no surprises. Just clean, tested flower you can trust.",
    icon: Shield,
    color: "text-maw-purple",
    bg: "bg-maw-purple/10 border-maw-purple/30",
  },
  {
    title: "Community First",
    desc: "Me Maw's isn't just a brand — it's a community of like-minded souls who believe in the healing power of this plant. We grow for you, with you.",
    icon: Sun,
    color: "text-maw-yellow",
    bg: "bg-maw-yellow/10 border-maw-yellow/30",
  },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <PsychedelicBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maw-pink/10 border border-maw-pink/30 text-maw-pink text-sm">
                <Clock className="w-4 h-4" />
                Since 1969
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                The Story of{" "}
                <span className="gradient-rainbow-text text-glow">Me Maw</span>
              </h1>

              <div className="space-y-4 text-maw-muted text-lg leading-relaxed">
                <p>
                  She&apos;s the grandmother with the fluffy white hair, rainbow spiral glasses, 
                  and a garden that would make the cosmos jealous. Me Maw has been growing cannabis 
                  since before it was cool, since before it was legal, since before most people 
                  even knew what a cannabinoid was.
                </p>
                <p>
                  Her husband — the bald gentleman with the grey braids and red cannabis-leaf headband — 
                  stands beside her with his pitchfork, a proud partner in the homegrown revolution. 
                  Together, they are American Gothic reimagined: not stoic and grim, but joyful, 
                  psychedelic, and unapologetically alive.
                </p>
                <p>
                  This isn&apos;t just cannabis. This is a philosophy. Every bud that leaves Me Maw&apos;s 
                  farmhouse carries decades of intention, generations of knowledge, and a spirit 
                  that refuses to be ordinary.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-maw-pink rounded-2xl blur-3xl opacity-20 scale-110" />
                <Image
                  src="/logo.jpg"
                  alt="Me Maw and Grandpa - American Gothic cannabis parody"
                  width={380}
                  height={480}
                  className="relative rounded-2xl shadow-2xl max-w-[280px] sm:max-w-[340px] md:max-w-[380px] w-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-maw-pink">Timeline</span>
            </h2>
            <p className="text-maw-muted">
              From a single seed in the Iowa soil to a craft cannabis legacy.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-maw-card border border-maw-border flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-maw-green" />
                </div>
                <div className="space-y-1">
                  <span className="text-maw-purple font-mono text-sm font-bold">{item.year}</span>
                  <h3 className="font-heading text-xl font-bold text-maw-text">{item.title}</h3>
                  <p className="text-maw-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-rainbow-text">Stand For</span>
            </h2>
            <p className="text-maw-muted max-w-2xl mx-auto">
              The values that grow in Me Maw&apos;s garden — not just in the plants, 
              but in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`card-glass rounded-2xl p-6 space-y-3 border ${val.bg}`}
              >
                <val.icon className={`w-8 h-8 ${val.color}`} />
                <h3 className="font-heading text-lg font-bold text-maw-text">{val.title}</h3>
                <p className="text-maw-muted text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 gradient-rainbow opacity-5" />
            <div className="relative space-y-6">
              <h2 className="font-heading text-3xl font-bold">
                Ready to <span className="text-maw-green">Experience</span> the Garden?
              </h2>
              <p className="text-maw-muted">
                Browse our full menu of homegrown craft strains, all cultivated with Me Maw&apos;s 
                legendary touch. The good stuff — the real stuff — is waiting.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 gradient-sticker text-white font-bold rounded-full hover:opacity-90 transition-all text-sm uppercase tracking-wider shadow-lg shadow-maw-pink/20"
              >
                <Leaf className="w-5 h-5" />
                Explore the Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
