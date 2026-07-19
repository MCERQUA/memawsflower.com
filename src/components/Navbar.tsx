"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "The Porch" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Stop By" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-maw-darker/90 backdrop-blur-lg border-b border-maw-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Me Maw's logo" width={40} height={40} className="rounded-lg" />
            <span className="font-heading text-xl md:text-2xl font-bold gradient-rainbow-text">
              Me Maw&apos;s
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-maw-muted hover:text-maw-text transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="px-5 py-2 bg-maw-green/20 border border-maw-green/40 text-maw-green rounded-full text-sm font-semibold hover:bg-maw-green/30 transition-all glow-green"
            >
              What&apos;s on the Porch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-maw-text p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-maw-darker/95 backdrop-blur-lg border-b border-maw-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-maw-muted hover:text-maw-text transition-colors py-2 text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/menu"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 bg-maw-green/20 border border-maw-green/40 text-maw-green rounded-full font-semibold glow-green"
              >
                What&apos;s on the Porch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
