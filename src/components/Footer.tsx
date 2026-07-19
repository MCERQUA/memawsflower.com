"use client"

import Link from "next/link"
import { Heart, ArrowUp } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-maw-border bg-maw-darker">
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-rainbow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="Me Maw's logo" width={32} height={32} className="rounded-lg" />
            <span className="font-heading text-xl font-bold gradient-rainbow-text">
              Me Maw&apos;s
            </span>
            <p className="text-maw-muted text-sm leading-relaxed">
              Homegrown craft cannabis from the heartland. Every bud cultivated with love, 
              laughter, and a little bit of that good old psychedelic spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-maw-text mb-4">Find Your Way</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "The Porch" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Stop By" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-maw-muted hover:text-maw-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Vibes */}
          <div>
            <h4 className="font-heading font-semibold text-maw-text mb-4">Porch Hours</h4>
            <div className="space-y-2 text-sm text-maw-muted">
              <p>Mon–Fri: 10am – 8pm</p>
              <p>Sat–Sun: 9am – 9pm</p>
              <p className="pt-2 text-maw-pink">Good vibes always welcome</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-maw-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-maw-muted text-xs">
            © {new Date().getFullYear()} Me Maw&apos;s Cannabis Flower. All rights reserved. 
            21+ only. Consume responsibly.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-maw-muted hover:text-maw-purple transition-colors text-xs"
          >
            Back to top <ArrowUp className="w-3 h-3" />
          </button>
          <p className="flex items-center gap-1 text-maw-muted text-xs">
            Made with <Heart className="w-3 h-3 text-maw-pink fill-maw-pink" /> and good intentions
          </p>
        </div>
      </div>
    </footer>
  )
}
