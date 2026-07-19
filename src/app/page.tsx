"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PsychedelicBackground } from "@/components/PsychedelicEffects"
import { Leaf, Shield, Heart, Star, ArrowRight, Sparkles, Zap, Flower2 } from "lucide-react"

const featuredStrains = [
  {
    name: "Purple Haze #9",
    type: "Sativa",
    thc: "24%",
    cbd: "0.1%",
    effects: ["Euphoric", "Creative", "Uplifting"],
    description: "Me Maw's signature sativa. A kaleidoscope of purple hues with a sweet berry aroma that'll have your mind painting masterpieces. Born from generations of selective breeding on the family farm.",
    color: "from-maw-purple to-maw-pink",
    image: "/strain-purple-haze-9.png",
  },
  {
    name: "Grandpa's Couch Lock",
    type: "Indica",
    thc: "28%",
    cbd: "0.3%",
    effects: ["Relaxing", "Sleepy", "Body High"],
    description: "When Grandpa tends the garden, things get heavy. This indica hits like a warm blanket on a winter evening. Deep purple buds dusted in crystals, with an earthy pine flavor that grounds you to the core.",
    color: "from-maw-blue to-maw-purple",
    image: "/strain-grandpas-couch-lock.png",
  },
  {
    name: "Rainbow Road",
    type: "Hybrid",
    thc: "22%",
    cbd: "0.2%",
    effects: ["Balanced", "Happy", "Social"],
    description: "50/50 hybrid perfection. Vibrant multicolored nugs with a tropical fruit bouquet. Perfect for when you want to float between conversation and contemplation like a cosmic traveler.",
    color: "from-maw-orange to-maw-pink",
    image: "/strain-rainbow-road.png",
  },
  {
    name: "Green Goddess",
    type: "Sativa",
    thc: "21%",
    cbd: "0.5%",
    effects: ["Energetic", "Focused", "Euphoric"],
    description: "Pure sativa energy from the garden goddess herself. Bright green buds bursting with citrus and mango notes. The perfect daytime companion for creative adventures and outdoor explorations.",
    color: "from-maw-green to-maw-blue",
    image: "/strain-green-goddess.png",
  },
]

const trustBadges = [
  { icon: Shield, label: "Lab Tested", desc: "Every batch verified" },
  { icon: Leaf, label: "Homegrown", desc: "Farm-to-flower craft" },
  { icon: Heart, label: "Craft Quality", desc: "Grown with love" },
  { icon: Star, label: "5-Star Rated", desc: "Community loved" },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <PsychedelicBackground />
      <Navbar />

      {/* HERO — the old house */}
      <section className="relative w-full overflow-hidden">
        {/* Farmhouse hero painting */}
        <div className="absolute inset-0">
          <Image
            src="/memaws-farmhouse-hero.png"
            alt="Me Maw's old white Gothic farmhouse at golden hour, cannabis garden beside the porch, psychedelic Iowa sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Legibility gradients: anchor copy at bottom-left, fade top into the sky */}
          <div className="absolute inset-0 bg-gradient-to-t from-maw-dark via-maw-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-maw-dark/85 via-maw-dark/25 to-transparent" />
        </div>

        {/* Copy */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-40 pb-20 md:pb-28 min-h-[78vh] flex flex-col justify-end">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maw-green/15 border border-maw-green/40 text-maw-green text-sm backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Homegrown Craft Cannabis · Est. 1969
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              The porch light&apos;s{" "}
              <span className="gradient-rainbow-text text-glow">on</span>.
              <br />
              Come on up to{" "}
              <span className="text-maw-pink text-glow-pink">Me Maw&apos;s</span>.
            </h1>

            <p className="text-maw-text/90 text-lg md:text-xl max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(13,8,21,0.85)]">
              Step up to the old white Gothic farmhouse on the Iowa ridge. Cannabis tended
              beside the porch, jars passed hand to hand since 1969. Every bud&apos;s a piece of home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-maw-green text-maw-dark font-bold rounded-full hover:bg-maw-green/90 transition-all glow-green text-sm uppercase tracking-wider"
              >
                <Flower2 className="w-5 h-5" />
                What&apos;s on the Porch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-maw-pink/50 text-maw-text font-semibold rounded-full hover:bg-maw-pink/15 transition-all backdrop-blur-sm text-sm uppercase tracking-wider"
              >
                The Story of the House
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-xl p-5 text-center hover:bg-maw-card-hover transition-colors"
              >
                <badge.icon className="w-8 h-8 text-maw-green mx-auto mb-3" />
                <h3 className="font-semibold text-maw-text text-sm">{badge.label}</h3>
                <p className="text-maw-muted text-xs mt-1">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STRAINS */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-rainbow-text">Strains</span>
            </h2>
            <p className="text-maw-muted max-w-2xl mx-auto">
              Hand-selected from Me Maw&apos;s garden. Each strain tells a story, 
              each bud carries generations of homegrown wisdom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredStrains.map((strain, i) => (
              <motion.div
                key={strain.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="card-glass rounded-2xl overflow-hidden hover:border-maw-green/30 transition-all group"
              >
                {/* Strain bud product photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  <Image
                    src={strain.image}
                    alt={`${strain.name} cannabis flower bud`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Top color bar */}
                <div className={`h-1 bg-gradient-to-r ${strain.color}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maw-text group-hover:text-maw-green transition-colors">
                        {strain.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-maw-purple/20 text-maw-purple">
                          {strain.type}
                        </span>
                        <span className="text-xs text-maw-muted">
                          THC {strain.thc} · CBD {strain.cbd}
                        </span>
                      </div>
                    </div>
                    <Zap className="w-5 h-5 text-maw-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-maw-muted text-sm leading-relaxed">
                    {strain.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {strain.effects.map((effect) => (
                      <span
                        key={effect}
                        className="text-xs px-3 py-1 rounded-full bg-maw-green/10 border border-maw-green/20 text-maw-green"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-maw-pink/50 text-maw-pink rounded-full hover:bg-maw-pink/10 transition-all font-medium text-sm"
            >
              See All Strains
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND STORY TEASER */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 gradient-rainbow opacity-5" />
            <div className="relative space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Grown with <span className="text-maw-pink text-glow-pink">Love</span>, Shared with{" "}
                <span className="gradient-rainbow-text">Soul</span>
              </h2>
              <p className="text-maw-muted max-w-2xl mx-auto text-lg leading-relaxed">
                Me Maw didn&apos;t start growing cannabis to make a fortune. She started because 
                the earth asked her to. For decades, her garden has been a sanctuary — a place 
                where science meets soul, where every seed is planted with intention and every 
                harvest is a celebration.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 gradient-sticker text-white font-semibold rounded-full hover:opacity-90 transition-all text-sm uppercase tracking-wider shadow-lg shadow-maw-purple/20"
              >
                Read the Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AGE WARNING */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-maw-yellow/10 border border-maw-yellow/30">
            <span className="text-maw-yellow text-2xl">⚠️</span>
            <p className="text-maw-yellow text-sm font-medium">
              21+ only. Cannabis is for adults. Consume responsibly. 
              Do not operate vehicles or machinery under the influence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
