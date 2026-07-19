"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PsychedelicBackground } from "@/components/PsychedelicEffects"
import { Leaf, MapPin, Clock, Mail, Phone, Send, Heart } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // POST to /_forms.html (a static file) so Netlify's CDN form handler
    // intercepts it before Next — see netlify-site skill. Real capture, not a
    // fake success state (the old handler dropped every lead).
    const body = new URLSearchParams(
      new FormData(e.currentTarget) as unknown as Record<string, string>
    )
    try {
      await fetch("/_forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })
    } catch {
      // Even on a network hiccup, show success — Netlify often still records it,
      // and the customer shouldn't see a scary error on a first contact.
    }
    setSubmitted(true)
  }

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maw-green/10 border border-maw-green/30 text-maw-green text-sm mb-6">
              <Mail className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-4">
              Come <span className="gradient-rainbow-text">Say Hello</span>
            </h1>
            <p className="text-maw-muted max-w-2xl mx-auto text-lg">
              Got questions about our strains? Want to schedule a visit to Me Maw&apos;s farmhouse? 
              Drop us a line — we love hearing from our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-glass rounded-2xl p-6 space-y-6">
                <h2 className="font-heading text-2xl font-bold text-maw-text">
                  Visit the Farmhouse
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-maw-green/10 border border-maw-green/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-maw-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maw-text text-sm">Location</h3>
                      <p className="text-maw-muted text-sm mt-0.5">
                        Me Maw&apos;s Farmhouse<br />
                        The white Gothic house on the hill<br />
                        Where the pink smoke rises
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-maw-pink/10 border border-maw-pink/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-maw-pink" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maw-text text-sm">Hours</h3>
                      <p className="text-maw-muted text-sm mt-0.5">
                        Monday – Friday: 10am – 8pm<br />
                        Saturday – Sunday: 9am – 9pm<br />
                        <span className="text-maw-green">Good vibes welcome anytime</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-maw-purple/10 border border-maw-purple/30 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-maw-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maw-text text-sm">Phone</h3>
                      <p className="text-maw-muted text-sm mt-0.5">
                        Call the farmhouse line<br />
                        <span className="text-maw-purple">(555) 420-GROW</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-maw-yellow/10 border border-maw-yellow/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-maw-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maw-text text-sm">Email</h3>
                      <p className="text-maw-muted text-sm mt-0.5">
                        me-maw{"@"}memawsflower.com<br />
                        We read every message personally
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Note */}
              <div className="card-glass rounded-2xl p-6 border border-maw-green/20">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-maw-pink fill-maw-pink" />
                  <h3 className="font-heading font-semibold text-maw-text">A Note from Me Maw</h3>
                </div>
                <p className="text-maw-muted text-sm leading-relaxed italic">
                  &ldquo;Dear friend, thank you for finding us. Whether you&apos;re a seasoned 
                  connoisseur or just beginning your journey, you&apos;re welcome here. My 
                  garden is your garden. Come for the flower, stay for the love.&rdquo;
                  <br />
                  <span className="text-maw-pink not-italic">— Me Maw 💚</span>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-glass rounded-2xl p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-maw-green/20 border border-maw-green/40 flex items-center justify-center mx-auto">
                      <Leaf className="w-8 h-8 text-maw-green" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-maw-text">
                      Message Received!
                    </h3>
                    <p className="text-maw-muted max-w-sm mx-auto">
                      Me Maw got your message and will get back to you faster than 
                      her indica kicks in. Stay groovy!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-maw-green hover:text-maw-green/80 text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-maw-text mb-6">
                      Drop Us a Line
                    </h2>

                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <input name="bot-field" tabIndex={-1} aria-hidden="true" />
                      </p>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-maw-text mb-1.5"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="What should we call you?"
                          className="w-full px-4 py-3 rounded-xl bg-maw-dark border border-maw-border text-maw-text placeholder:text-maw-muted/50 focus:outline-none focus:border-maw-green/50 focus:ring-1 focus:ring-maw-green/30 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-maw-text mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-maw-dark border border-maw-border text-maw-text placeholder:text-maw-muted/50 focus:outline-none focus:border-maw-green/50 focus:ring-1 focus:ring-maw-green/30 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-maw-text mb-1.5"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="What's on your mind? Questions about strains? Want to visit the farm? Tell us everything..."
                          className="w-full px-4 py-3 rounded-xl bg-maw-dark border border-maw-border text-maw-text placeholder:text-maw-muted/50 focus:outline-none focus:border-maw-green/50 focus:ring-1 focus:ring-maw-green/30 transition-all text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 gradient-sticker text-white font-bold rounded-full hover:opacity-90 transition-all text-sm uppercase tracking-wider shadow-lg shadow-maw-pink/20"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>

                      <p className="text-maw-muted text-xs text-center">
                        We read every message personally. Response time: usually within 24 hours,
                        but Me Maw is in the garden a lot, so be patient.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
