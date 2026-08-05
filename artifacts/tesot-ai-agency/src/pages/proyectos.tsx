import React from "react"
import { Link } from "wouter"
import { motion } from "framer-motion"
import { ArrowRight, FolderOpen, LockKeyhole, Sparkles } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/pages/home"
import { Button } from "@/components/ui/button"

const projectTypes = [
  {
    title: "Atención automática",
    description: "Asistentes que responden dudas y ayudan a tus clientes en cualquier momento.",
  },
  {
    title: "Reservas y organización",
    description: "Sistemas que coordinan citas, pedidos y horarios sin cruces ni olvidos.",
  },
  {
    title: "Procesos más sencillos",
    description: "Herramientas a medida para quitar trabajo repetitivo de tu día a día.",
  },
]

export default function Proyectos() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-[620px] h-[360px] rounded-full bg-secondary/10 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <Sparkles className="w-3.5 h-3.5" />
                Proyectos TESOT
              </span>
              <h1 className="mt-7 text-4xl md:text-6xl font-bold leading-tight text-white">
                Ideas que se convierten en
                <span className="block text-gradient">soluciones útiles.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Cada negocio tiene retos distintos. Aquí reunimos las soluciones
                que podemos diseñar para que trabajes con menos esfuerzo y
                atiendas mejor a tus clientes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  En construcción
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Lo que podemos crear contigo
                </h2>
              </div>
              <FolderOpen className="hidden h-8 w-8 text-primary/70 sm:block" />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {projectTypes.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group rounded-2xl border border-white/[0.08] bg-card/40 p-7 transition-all duration-300 hover:border-primary/30 hover:bg-card/70"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-background text-primary">
                      <LockKeyhole className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground/50">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-8 text-center md:p-10">
              <h2 className="mb-3 text-2xl font-bold text-white">
                ¿Tienes una idea para tu negocio?
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
                Cuéntanos qué quieres mejorar y te ayudaremos a convertirlo en
                una solución clara y práctica.
              </p>
              <Link href="/#contacto">
                <Button variant="glow" size="lg">
                  Hablar con TESOT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}