import React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Metrics } from "@/components/sections/metrics"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Chatbot } from "@/components/sections/chatbot"
import { Contact } from "@/components/sections/contact"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tighter">TESOT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary glow-primary inline-block"></span>
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} TESOT AI Agency. Arquitectura de automatización avanzada.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">
          Privacidad
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Services />
        <Projects />
        <Chatbot />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
