import React from "react"
import { Link } from "wouter"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/pages/home"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Clock, ArrowRight, Sparkles } from "lucide-react"

interface PlaceholderProject {
  id: number
  label: string
  title: string
  sector: string
  teaser: string
  metric: string
  metricLabel: string
}

const placeholders: PlaceholderProject[] = [
  {
    id: 1,
    label: "En documentación",
    title: "Proyecto Confidencial de IA — Sector Logística",
    sector: "Automatización de Procesos",
    teaser:
      "Sistema de IA para optimización de rutas, triaje de incidencias y predicción de demanda en tiempo real.",
    metric: "—",
    metricLabel: "Próximamente",
  },
  {
    id: 2,
    label: "En documentación",
    title: "Automatización Financiera B2B",
    sector: "Procesamiento de Datos",
    teaser:
      "Pipeline inteligente que extrae, valida y consolida datos financieros de múltiples fuentes sin intervención humana.",
    metric: "—",
    metricLabel: "Próximamente",
  },
  {
    id: 3,
    label: "En documentación",
    title: "Agente de Captación y Cualificación de Leads",
    sector: "Automatización de Ventas",
    teaser:
      "IA conversacional multicanal que cualifica, segmenta y agenda reuniones de ventas de forma autónoma.",
    metric: "—",
    metricLabel: "Próximamente",
  },
  {
    id: 4,
    label: "En documentación",
    title: "Chatbot Especializado — Sector Legal",
    sector: "Atención al Cliente",
    teaser:
      "Asistente entrenado con legislación específica que responde consultas, filtra casos y agenda citas de asesoría.",
    metric: "—",
    metricLabel: "Próximamente",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Proyectos() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main className="flex-1 pt-20">

        {/* ── Hero header ── */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-6"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary border border-secondary/30 rounded-full px-4 py-1.5 bg-secondary/5"
              >
                Casos de Éxito
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Proyectos que{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  hablan
                </span>{" "}
                por sí solos
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Estamos documentando nuestros casos de éxito más impactantes. Muy pronto disponibles.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Banner institucional ── */}
        <section className="pb-12">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 p-8 md:p-10 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold text-sm tracking-wide">
                  En preparación
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Documentando el impacto real
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6 text-sm md:text-base">
                Nuestros clientes prefieren mantener la confidencialidad de sus ventajas competitivas. Si quieres ver demos privadas y resultados reales, contáctanos directamente.
              </p>
              <Link href="/#contacto">
                <Button variant="glow">
                  Ver demos privadas →
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Grid de tarjetas placeholder ── */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {placeholders.map((project) => (
                <motion.div key={project.id} variants={fadeUp}>
                  <Card className="h-full bg-card border-white/[0.08] hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge
                              variant="outline"
                              className="bg-card text-muted-foreground border-border text-xs"
                            >
                              {project.sector}
                            </Badge>
                            <span className="flex items-center gap-1 text-xs text-secondary/80 font-medium">
                              <Sparkles className="w-3 h-3" />
                              {project.label}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary/90 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <div className="ml-4 shrink-0 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                          <Lock className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {project.teaser}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <div>
                          <div className="text-2xl font-bold text-white/40 tabular-nums">
                            {project.metric}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {project.metricLabel}
                          </div>
                        </div>
                        <Link href="/#contacto">
                          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                            Solicitar demo
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA final */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground mb-6 text-lg">
                ¿Tu empresa podría ser el próximo caso de éxito?
              </p>
              <Link href="/#contacto">
                <Button variant="glow" size="lg">
                  Empezar un proyecto →
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
