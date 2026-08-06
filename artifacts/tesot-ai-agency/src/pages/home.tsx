import React from "react"
import { Link } from "wouter"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Metrics } from "@/components/sections/metrics"
import { Services } from "@/components/sections/services"
import { Chatbot } from "@/components/sections/chatbot"
import { Contact } from "@/components/sections/contact"
import { ArrowRight, FolderOpen, Layers, Zap } from "lucide-react"
import agencyLogo from "@assets/Untitled_Project_-_illustrationimage-removebg-preview_1785971012346.png"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white/95 p-0.5 shadow-[0_0_18px_-8px_rgba(255,255,255,0.7)] ring-1 ring-white/30">
            <img
              src={agencyLogo}
              alt="Logo de TESOT AI Agency"
              className="h-full w-full scale-[1.18] object-contain"
            />
          </span>
          <span className="text-xl font-bold text-white tracking-tighter">
            TESOT
            <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle glow-primary" />
          </span>
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

const cards = [
  {
    type: "combined" as const,
    accent: "primary" as const,
    Icon: Zap,
    eyebrow: "Una solución, varias mejoras",
    title: "Haz que tu negocio funcione con menos esfuerzo",
    description:
      "Unimos atención al cliente, organización y automatización para que tu equipo pueda centrarse en lo que realmente importa.",
    benefits: [
      "Clientes mejor atendidos",
      "Más tiempo para lo importante",
      "Menos tareas repetitivas",
    ],
    cta: "Ver todas las soluciones",
  },
  {
    type: "link" as const,
    href: "/servicios",
    accent: "secondary" as const,
    Icon: Layers,
    eyebrow: "Servicios",
    title: "Soluciones pensadas para tu negocio",
    description:
      "Descubre cómo podemos ayudarte a responder, organizar y automatizar tu día a día.",
    cta: "Explorar servicios",
  },
  {
    type: "link" as const,
    href: "/proyectos",
    accent: "primary" as const,
    Icon: FolderOpen,
    eyebrow: "Proyectos",
    title: "Ideas que convertimos en realidad",
    description:
      "Conoce el tipo de soluciones que podemos crear para hacer que tu negocio avance.",
    cta: "Ver proyectos",
  },
]

function QuickAccess() {
  return (
    <section className="py-16 md:py-20 border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-muted-foreground">
            Soluciones que entiendes desde el primer vistazo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
          {cards.map((card, i) => {
            const isPrimary = card.accent === "primary"
            return (
              <motion.div
                key={`${card.href}-${card.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {card.type === "combined" ? (
                  <a href="#servicios" className="group block h-full">
                    <div
                        className={`relative h-full min-h-[260px] rounded-2xl border border-white/[0.08] bg-card/40 p-5 md:min-h-[360px] md:p-8 overflow-hidden transition-all duration-300 hover:bg-card/70 ${
                        isPrimary
                          ? "hover:border-primary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--primary)/0.25)]"
                          : "hover:border-secondary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--secondary)/0.25)]"
                      }`}
                    >
                      <div
                        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isPrimary ? "bg-primary/20" : "bg-secondary/20"}`}
                      />
                      <div className="relative z-10 flex flex-col h-full gap-3 md:gap-5">
                        <div
                          className={`w-12 h-12 rounded-xl border border-white/10 bg-background flex items-center justify-center transition-colors duration-300 ${
                            isPrimary
                              ? "text-primary group-hover:border-primary/40"
                              : "text-secondary group-hover:border-secondary/40"
                          }`}
                        >
                          <card.Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p
                            className={`text-xs font-semibold tracking-widest uppercase mb-2 ${isPrimary ? "text-primary/70" : "text-secondary/70"}`}
                          >
                            {card.eyebrow}
                          </p>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-white/90 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {card.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="rounded-lg border border-white/10 bg-background/60 px-2 py-2 text-center text-[11px] leading-tight text-muted-foreground"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div
                          className={`flex items-center gap-2 text-sm font-medium transition-colors ${isPrimary ? "text-primary/70 group-hover:text-primary" : "text-secondary/70 group-hover:text-secondary"}`}
                        >
                          {card.cta}
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={card.href} className="group block h-full">
                  <div
                    className={`relative h-full min-h-[260px] rounded-2xl border border-white/[0.08] bg-card/40 p-5 md:min-h-[360px] md:p-8 overflow-hidden transition-all duration-300 hover:bg-card/70 ${
                      isPrimary
                        ? "hover:border-primary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--primary)/0.25)]"
                        : "hover:border-secondary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--secondary)/0.25)]"
                    }`}
                  >
                    {/* Background glow */}
                    <div
                      className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isPrimary ? "bg-primary/20" : "bg-secondary/20"}`}
                    />

                    <div className="relative z-10 flex flex-col h-full gap-3 md:gap-5">
                      <div
                        className={`w-12 h-12 rounded-xl border border-white/10 bg-background flex items-center justify-center transition-colors duration-300 ${
                          isPrimary
                            ? "text-primary group-hover:border-primary/40"
                            : "text-secondary group-hover:border-secondary/40"
                        }`}
                      >
                        <card.Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <p
                          className={`text-xs font-semibold tracking-widest uppercase mb-2 ${isPrimary ? "text-primary/70" : "text-secondary/70"}`}
                        >
                          {card.eyebrow}
                        </p>
                        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-white/90 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div
                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${isPrimary ? "text-primary/70 group-hover:text-primary" : "text-secondary/70 group-hover:text-secondary"}`}
                      >
                        {card.cta}
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickAccess />
        <Metrics />
        <Services />
        <Chatbot />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
