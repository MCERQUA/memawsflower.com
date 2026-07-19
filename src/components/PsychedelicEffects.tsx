"use client"

import { motion } from "motion/react"

interface FloatingLeafProps {
  className?: string
  delay?: number
  size?: "sm" | "md" | "lg"
  color?: string
}

export function FloatingLeaf({
  className = "",
  delay = 0,
  size = "md",
  color = "#4dff88",
}: FloatingLeafProps) {
  const sizeMap = { sm: 20, md: 32, lg: 48 }
  const s = sizeMap[size]

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-40 ${className}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 15, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 8.5-3 11-8 0 0-1-.5-2 0-2.5 1.5-5 3-7 3s-3-1-3-3c0-2 2-3.5 3.5-4l1-1.5C12.5 5 14 3 17 2c0 0-1 .5-2 2s-2.5 3.5-2 6z" />
      </svg>
    </motion.div>
  )
}

export function PsychedelicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient orbs — pink & purple dominant */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-maw-purple/25 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-maw-pink/25 blur-[130px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[30%] left-[25%] w-[350px] h-[350px] rounded-full bg-maw-green/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-maw-blue/12 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2.2s" }} />
      <div className="absolute bottom-[10%] right-[15%] w-[320px] h-[320px] rounded-full bg-maw-orange/10 blur-[110px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      {/* Extra pink-purple glow in center */}
      <div className="absolute top-[20%] right-[25%] w-[500px] h-[500px] rounded-full bg-maw-pink/15 blur-[160px] animate-pulse-glow" style={{ animationDelay: "2.8s" }} />

      {/* Floating leaves */}
      <FloatingLeaf className="top-[10%] left-[5%]" delay={0} size="lg" color="#b44dff" />
      <FloatingLeaf className="top-[20%] right-[8%]" delay={2} size="md" color="#ff6baa" />
      <FloatingLeaf className="top-[50%] left-[3%]" delay={1} size="sm" />
      <FloatingLeaf className="bottom-[20%] right-[5%]" delay={3} size="lg" color="#ff6baa" />
      <FloatingLeaf className="top-[70%] left-[12%]" delay={4} size="md" color="#ffe06b" />
      <FloatingLeaf className="top-[35%] right-[15%]" delay={5} size="sm" color="#7ba6ff" />
    </div>
  )
}
