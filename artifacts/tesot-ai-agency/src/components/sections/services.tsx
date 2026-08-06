import React from "react"
import { motion } from "framer-motion"
import {
  CalendarCheck,
  FileText,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"

interface Capability {
  number: string
  title: string
  description: string
  example: string
  sectors: string[]
  icon: React.ReactNode
  accent: "primary" | "secondary"
}

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Responde a tus clientes al instante",
    description:
      "Un asistente que contesta las preguntas habituales de tu negocio, incluso cuando estás atendiendo, descansando o fuera del horario.",
    example:
      "Un restaurante puede responder el menú y los horarios; una clínica, sus servicios y disponibilidad.",
    sectors: ["Restaurantes", "Tiendas", "Clínicas"],
    icon: <MessageCircle className="w-6 h-6" />,
    accent: "primary",
  },
  {
    number: "02",
    title: "Organiza citas, reservas y pedidos",
    description:
      "Tus clientes pueden pedir una cita, reservar una mesa o solicitar un servicio sin llamadas interminables ni cruces de horarios.",
    example:
      "La solución comprueba la agenda, propone alternativas y envía la confirmación automáticamente.",
    sectors: ["Citas", "Reservas", "Pedidos"],
    icon: <CalendarCheck className="w-6 h-6" />,
    accent: "secondary",
  },
  {
    number: "03",
    title: "Quita de en medio las tareas repetitivas",
    description:
      "Convertimos el trabajo que se repite cada día en un proceso automático: leer mensajes, ordenar datos, preparar documentos o avisar a un cliente.",
    example:
      "Menos copiar y pegar. Más tiempo para cocinar, vender, atender o dirigir tu negocio.",
    sectors: ["Correos", "Documentos", "Avisos"],
    icon: <FileText className="w-6 h-6" />,
    accent: "primary",
  },
  {
    number: "04",
    title: "Creamos una solución para tu forma de trabajar",
    description:
      "Si tu negocio tiene una necesidad concreta, diseñamos una herramienta inteligente que se adapta a tus procesos y a tus programas actuales.",
    example:
      "Desde un asistente para tu equipo hasta un sistema que conecta tus ventas, agenda y atención.",
    sectors: ["A medida", "Tu equipo", "Tus herramientas"],
    icon: <Sparkles className="w-6 h-6" />,
    accent: "secondary",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-72 h-72 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-9 md:mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-3 md:mb-5">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Lo que hacemos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-5">
            Tecnología que se entiende.
            <br />
            <span className="text-gradient">Resultados que se notan.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            No importa si tienes un restaurante, una tienda, una clínica o
            trabajas por tu cuenta. Encontramos las tareas que te quitan tiempo
            y hacemos que funcionen solas.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5"
        >
          {capabilities.map((capability) => {
            const isPrimary = capability.accent === "primary"
            return (
              <motion.article
                key={capability.number}
                variants={item}
                className={`group relative overflow-hidden rounded-2xl border bg-card/40 p-5 md:p-8 transition-all duration-300 ${
                  isPrimary
                    ? "border-primary/10 hover:border-primary/40 hover:shadow-[0_0_45px_-18px_hsl(var(--primary)/0.45)]"
                    : "border-secondary/10 hover:border-secondary/40 hover:shadow-[0_0_45px_-18px_hsl(var(--secondary)/0.45)]"
                }`}
              >
                <div
                  className={`absolute -right-16 -top-16 w-44 h-44 rounded-full blur-[65px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isPrimary ? "bg-primary/20" : "bg-secondary/20"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5 md:mb-8">
                    <div
                      className={`w-12 h-12 rounded-xl border bg-background flex items-center justify-center ${
                        isPrimary
                          ? "border-primary/20 text-primary"
                          : "border-secondary/20 text-secondary"
                      }`}
                    >
                      {capability.icon}
                    </div>
                    <span className="text-sm font-mono text-muted-foreground/50">
                      {capability.number}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white/90">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {capability.description}
                  </p>

                  <div
                    className={`rounded-xl border p-4 mb-6 ${
                      isPrimary
                        ? "border-primary/10 bg-primary/[0.04]"
                        : "border-secondary/10 bg-secondary/[0.04]"
                    }`}
                  >
                    <p className="text-sm text-white/80 leading-relaxed">
                      <span
                        className={`font-semibold ${
                          isPrimary ? "text-primary" : "text-secondary"
                        }`}
                      >
                        Por ejemplo:{" "}
                      </span>
                      {capability.example}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {capability.sectors.map((sector) => (
                        <span
                          key={sector}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}