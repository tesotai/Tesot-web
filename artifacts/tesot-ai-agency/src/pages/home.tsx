import React from "react"
import { Link } from "wouter"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Metrics } from "@/components/sections/metrics"
import { Services } from "@/components/sections/services"
import { Chatbot } from "@/components/sections/chatbot"
import { Contact } from "@/components/sections/contact"
import { ArrowRight, CalendarCheck, MessageCircle, Zap } from "lucide-react"

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

const cards = [
  {
    href: "#servicios",
    accent: "primary" as const,
    Icon: MessageCircle,
    eyebrow: "Clientes mejor atendidos",
    title: "Responde aunque estés ocupado",
    description:
      "Dudas frecuentes, mensajes y solicitudes resueltos automáticamente, con una persona siempre disponible cuando hace falta.",
    cta: "Ver soluciones",
  },
  {
    href: "#servicios",
    accent: "secondary" as const,
    Icon: CalendarCheck,
    eyebrow: "Más tiempo para lo importante",
    title: "Organiza tu día sin perseguir tareas",
    description:
      "Citas, reservas, pedidos y tareas repetitivas que se coordinan solos para que tu equipo pueda centrarse en el negocio.",
    cta: "Descubrir cómo",
  },
  {
    href: "#servicios",
    accent: "primary" as const,
    Icon: Zap,
    eyebrow: "Un negocio más ágil",
    title: "Haz más con el mismo equipo",
    description:
      "Conectamos tus herramientas y automatizamos el trabajo invisible que consume horas cada semana.",
    cta: "Empezar ahora",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
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
                <a href={card.href} className="group block h-full">
                  <div
                    className={`relative h-full rounded-2xl border border-white/[0.08] bg-card/40 p-8 overflow-hidden transition-all duration-300 hover:bg-card/70 ${
                      isPrimary
                        ? "hover:border-primary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--primary)/0.25)]"
                        : "hover:border-secondary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--secondary)/0.25)]"
                    }`}
                  >
                    {/* Background glow */}
                    <div
                      className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isPrimary ? "bg-primary/20" : "bg-secondary/20"}`}
                    />

                    <div className="relative z-10 flex flex-col h-full gap-5">
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
                </a>
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
