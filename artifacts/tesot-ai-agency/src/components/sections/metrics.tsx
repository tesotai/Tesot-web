import React, { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MetricProps {
  end: number
  suffix: string
  label: string
  duration?: number
}

function AnimatedNumber({ end, suffix, label, duration = 2 }: MetricProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        
        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        setCount(Math.floor(easeOutQuart * end))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  )
}

export function Metrics() {
  return (
    <section className="py-20 bg-background border-y border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50">
          <AnimatedNumber end={10000} suffix="+" label="Horas Ahorradas Mensuales" />
          <AnimatedNumber end={500} suffix="+" label="Procesos Automatizados" />
          <AnimatedNumber end={99} suffix="%" label="Satisfacción del Cliente" />
        </div>
      </div>
    </section>
  )
}
