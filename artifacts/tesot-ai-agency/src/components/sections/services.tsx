import React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cpu, Repeat, Headphones, BarChart3 } from "lucide-react"

const services = [
  {
    title: "Integración de LLMs a medida",
    description: "Conectamos modelos lingüísticos avanzados con la base de conocimiento de tu empresa para crear sistemas expertos que entienden tu contexto.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Automatización de Procesos (RPA + IA)",
    description: "Eliminamos el trabajo manual. Orquestamos flujos complejos entre tus herramientas existentes usando IA para tomar decisiones en tiempo real.",
    icon: <Repeat className="w-6 h-6 text-secondary" />,
    color: "from-secondary/20 to-transparent",
  },
  {
    title: "Atención al Cliente 24/7",
    description: "Agentes inteligentes que resuelven el 80% de las consultas de forma autónoma, escalando a humanos solo cuando es estrictamente necesario.",
    icon: <Headphones className="w-6 h-6 text-primary" />,
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Análisis Predictivo",
    description: "Convertimos tus datos históricos en ventajas competitivas, anticipando tendencias y detectando anomalías antes de que impacten tu negocio.",
    icon: <BarChart3 className="w-6 h-6 text-secondary" />,
    color: "from-secondary/20 to-transparent",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
}

export function Services() {
  return (
    <section id="servicios" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Capacidades Core</h2>
          <p className="text-muted-foreground text-lg">
            Sistemas diseñados con precisión matemática. No entregamos demos, construimos infraestructura.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-card hover:bg-card/80 transition-colors border-white/5 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-white/10 mb-4 group-hover:border-primary/50 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
