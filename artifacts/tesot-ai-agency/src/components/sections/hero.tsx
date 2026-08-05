import React from "react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            La siguiente versión de tu negocio
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Automatizamos el futuro de tu negocio con <span className="text-gradient">Inteligencia Artificial.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Transformamos operaciones repetitivas en flujos de trabajo inteligentes. 
          Un centro de comando impecable para empresas ambiciosas que exigen velocidad y precisión.
        </motion.p>

      </div>

      {/* Decorative outcomes strip */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 opacity-30 text-sm font-mono grayscale mix-blend-screen overflow-hidden">
        <motion.div 
          animate={{ x: [0, -100] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {["Más tiempo", "Clientes atendidos", "Menos tareas", "Negocios más ágiles", "Más tiempo", "Clientes atendidos", "Menos tareas", "Negocios más ágiles"].map((outcome, i) => (
            <span key={i}>{outcome}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
