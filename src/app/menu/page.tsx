"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PsychedelicBackground } from "@/components/PsychedelicEffects"
import { ArrowLeft, Leaf, Zap, Clock, Flower2 } from "lucide-react"
import { useState } from "react"

const strains = [
  {
    id: 1,
    name: "Purple Haze #9",
    type: "Sativa",
    thc: "24%",
    cbd: "0.1%",
    effects: ["Euphoric", "Creative", "Uplifting"],
    aroma: "Sweet Berry, Earthy, Floral",
    flavor: "Blueberry, Grape, Pine",
    growTime: "9-10 weeks",
    description: "Me Maw's signature sativa. A kaleidoscope of purple hues with a sweet berry aroma that'll have your mind painting masterpieces. Born from generations of selective breeding on the family farm.",
    tags: ["Staff Pick", "Popular"],
    price: "$45/eighth",
  },
  {
    id: 2,
    name: "Grandpa's Couch Lock",
    type: "Indica",
    thc: "28%",
    cbd: "0.3%",
    effects: ["Relaxing", "Sleepy", "Body High"],
    aroma: "Pine, Earthy, Diesel",
    flavor: "Woody, Skunky, Coffee",
    growTime: "8-9 weeks",
    description: "When Grandpa tends the garden, things get heavy. This indica hits like a warm blanket on a winter evening. Deep purple buds dusted in crystals, with an earthy pine flavor that grounds you to the core.",
    tags: ["High THC", "Best Seller"],
    price: "$50/eighth",
  },
  {
    id: 3,
    name: "Rainbow Road",
    type: "Hybrid",
    thc: "22%",
    cbd: "0.2%",
    effects: ["Balanced", "Happy", "Social"],
    aroma: "Tropical Fruit, Citrus, Sweet",
    flavor: "Mango, Orange, Candy",
    growTime: "8-10 weeks",
    description: "50/50 hybrid perfection. Vibrant multicolored nugs with a tropical fruit bouquet. Perfect for when you want to float between conversation and contemplation like a cosmic traveler.",
    tags: ["New Arrival"],
    price: "$42/eighth",
  },
  {
    id: 4,
    name: "Green Goddess",
    type: "Sativa",
    thc: "21%",
    cbd: "0.5%",
    effects: ["Energetic", "Focused", "Euphoric"],
    aroma: "Citrus, Mango, Fresh",
    flavor: "Lemon, Pineapple, Herbal",
    growTime: "10-11 weeks",
    description: "Pure sativa energy from the garden goddess herself. Bright green buds bursting with citrus and mango notes. The perfect daytime companion for creative adventures and outdoor explorations.",
    tags: ["Daytime", "CBD"],
    price: "$40/eighth",
  },
  {
    id: 5,
    name: "Psychedelic Sunset",
    type: "Indica",
    thc: "26%",
    cbd: "0.1%",
    effects: ["Relaxing", "Euphoric", "Dreamy"],
    aroma: "Lavender, Berry, Spicy",
    flavor: "Blueberry, Vanilla, Pepper",
    growTime: "8-9 weeks",
    description: "Watch the sunset melt into the horizon with this dreamy indica. Purple-orange buds that shimmer with trichomes, carrying a floral aroma that transports you to Me Maw's porch at golden hour.",
    tags: ["Evening", "Top Shelf"],
    price: "$48/eighth",
  },
  {
    id: 6,
    name: "Farmhouse Funk",
    type: "Hybrid",
    thc: "23%",
    cbd: "0.2%",
    effects: ["Creative", "Talkative", "Relaxed"],
    aroma: "Cheese, Skunk, Earthy",
    flavor: "Creamy, Nutty, Herbal",
    growTime: "9-10 weeks",
    description: "A pungent hybrid that's not for the faint of heart. Me Maw's funkiest creation — bold, unapologetic, and deeply satisfying. Like a warm slice of homemade pie after a long day in the fields.",
    tags: ["Unique", "Craft"],
    price: "$44/eighth",
  },
  {
    id: 7,
    name: "Northern Lights #7",
    type: "Indica",
    thc: "25%",
    cbd: "0.1%",
    effects: ["Relaxing", "Happy", "Sleepy"],
    aroma: "Sweet, Earthy, Pine",
    flavor: "Honey, Wood, Menthol",
    growTime: "7-8 weeks",
    description: "Me Maw's tribute to the legendary Northern Lights lineage. Dense, resinous buds that glisten under any light. A classic indica experience refined by decades of homegrown expertise.",
    tags: ["Classic", "Fast Flower"],
    price: "$46/eighth",
  },
  {
    id: 8,
    name: "Cosmic Cookies",
    type: "Hybrid",
    thc: "27%",
    cbd: "0.1%",
    effects: ["Euphoric", "Relaxed", "Creative"],
    aroma: "Cookies, Vanilla, Diesel",
    flavor: "Baked Goods, Earthy, Sweet",
    growTime: "9-10 weeks",
    description: "Where Me Maw's baking meets her growing. This hybrid delivers a dessert-like experience with a powerful kick. Sweet cookie dough aroma with an unmistakable diesel undertone. Comfort in a nug.",
    tags: ["Flavor Forward", "High THC"],
    price: "$52/eighth",
  },
]

const typeFilters = ["All", "Sativa", "Indica", "Hybrid"]

const typeColors: Record<string, string> = {
  Sativa: "text-maw-green border-maw-green bg-maw-green/10",
  Indica: "text-maw-purple border-maw-purple bg-maw-purple/10",
  Hybrid: "text-maw-pink border-maw-pink bg-maw-pink/10",
}

export default function MenuPage() {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? strains : strains.filter((s) => s.type === filter)

  return (
    <main className="relative min-h-screen">
      <PsychedelicBackground />
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maw-purple/10 border border-maw-purple/30 text-maw-purple text-sm mb-6">
              <Flower2 className="w-4 h-4" />
              Today on the Porch
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-4">
              What&apos;s on the{" "}
              <span className="gradient-rainbow-text">Porch</span>
            </h1>
            <p className="text-maw-muted max-w-2xl mx-auto text-lg">
              Every jar on the porch was hand-tended from seed to harvest in Me Maw&apos;s garden.
              No shortcuts, no compromises — just pure, homegrown craft flower.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex justify-center gap-3 mb-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {typeFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-maw-green/20 border border-maw-green/40 text-maw-green glow-green"
                    : "border border-maw-border text-maw-muted hover:text-maw-text hover:border-maw-muted"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Strain Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((strain, i) => (
              <motion.div
                key={strain.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                layout
                className="card-glass rounded-2xl overflow-hidden hover:border-maw-green/30 transition-all group"
              >
                <div className="p-6 space-y-4">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-heading text-xl font-bold text-maw-text group-hover:text-maw-green transition-colors">
                        {strain.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeColors[strain.type]}`}>
                          {strain.type}
                        </span>
                        <span className="text-xs text-maw-muted flex items-center gap-1">
                          <Zap className="w-3 h-3 text-maw-yellow" /> {strain.thc} THC
                        </span>
                        <span className="text-xs text-maw-muted">{strain.cbd} CBD</span>
                      </div>
                    </div>
                    <span className="text-maw-green font-bold text-lg">{strain.price}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {strain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-maw-pink/10 border border-maw-pink/20 text-maw-pink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-maw-muted text-sm leading-relaxed">
                    {strain.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="space-y-1">
                      <p className="text-xs text-maw-muted flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Aroma
                      </p>
                      <p className="text-sm text-maw-text">{strain.aroma}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-maw-muted flex items-center gap-1">
                        <Flower2 className="w-3 h-3" /> Flavor
                      </p>
                      <p className="text-sm text-maw-text">{strain.flavor}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-maw-muted flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Effects
                      </p>
                      <p className="text-sm text-maw-text">{strain.effects.join(", ")}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-maw-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Grow Time
                      </p>
                      <p className="text-sm text-maw-text">{strain.growTime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-maw-yellow/10 border border-maw-yellow/30">
              <span className="text-maw-yellow text-xl">⚠️</span>
              <p className="text-maw-yellow text-sm">
                21+ only. Prices and availability subject to change. Lab results available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
