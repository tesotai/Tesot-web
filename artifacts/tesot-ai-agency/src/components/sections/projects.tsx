import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

type Category = "Todos" | "Automatización de Ventas" | "Atención al Cliente" | "Procesamiento de Datos" | "Agentes de Voz"

interface Project {
  id: number
  title: string
  client: string
  category: Category
  metric: string
  metricLabel: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Triaje Inteligente",
    client: "Logística Global S.A.",
    category: "Atención al Cliente",
    metric: "-70%",
    metricLabel: "Tiempo de respuesta",
    description: "Implementación de un agente autónomo que clasifica, prioriza y resuelve consultas de rastreo de envíos sin intervención humana."
  },
  {
    id: 2,
    title: "Agente de Cualificación B2B",
    client: "SaaS Enterprise",
    category: "Automatización de Ventas",
    metric: "+45%",
    metricLabel: "Conversión a demo",
    description: "Bot conversacional que investiga el contexto de la empresa del lead, cualifica sus necesidades y agenda reuniones automáticamente."
  },
  {
    id: 3,
    title: "Extractor de Documentos Financieros",
    client: "Firma Auditora",
    category: "Procesamiento de Datos",
    metric: "12k",
    metricLabel: "Horas ahorradas/año",
    description: "Pipeline automatizado que extrae entidades clave de PDFs no estructurados y los inserta validados en el ERP corporativo."
  },
  {
    id: 4,
    title: "Asistente Telefónico de Reservas",
    client: "Cadena Hotelera",
    category: "Agentes de Voz",
    metric: "24/7",
    metricLabel: "Disponibilidad",
    description: "Voz sintética hiperrealista capaz de gestionar reservas complejas, modificaciones y cancelaciones entendiendo lenguaje natural."
  }
]

const categories: Category[] = ["Todos", "Automatización de Ventas", "Atención al Cliente", "Procesamiento de Datos", "Agentes de Voz"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos")

  const filteredProjects = projects.filter(
    (p) => activeCategory === "Todos" || p.category === activeCategory
  )

  return (
    <section id="proyectos" className="py-32 bg-card/30 border-y border-border/50 relative">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 md:flex md:items-end justify-between">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Casos de Éxito</h2>
            <p className="text-muted-foreground text-lg">
              El impacto se mide en resultados, no en promesas. Explora cómo hemos transformado operaciones críticas.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors group cursor-pointer overflow-hidden relative">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <Badge variant="outline" className="mb-3 bg-card text-muted-foreground border-border">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">{project.metric}</div>
                        <div className="text-xs text-primary font-medium">{project.metricLabel}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
