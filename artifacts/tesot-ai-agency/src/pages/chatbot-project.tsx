import React from "react"
import { Link } from "wouter"
import { ArrowLeft, Bot, CheckCircle2, Sparkles } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/pages/home"
import { Chatbot } from "@/components/sections/chatbot"

export default function ChatbotProject() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/3 top-0 h-80 w-[620px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />
          </div>

          <div className="container relative z-10 mx-auto max-w-5xl px-6">
            <Link
              href="/proyectos"
              className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Proyectos
            </Link>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Proyecto destacado
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Chatbot de atención
                <span className="block text-gradient">inteligente y personalizado.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Esta es una demostración real de cómo puede funcionar un
                asistente creado por TESOT. Escríbele una pregunta y descubre
                cómo entiende el contexto de tu negocio.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Responde dudas de clientes",
                "Disponible todo el día",
                "Adaptado a tu negocio",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-card/40 px-4 py-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-y border-white/[0.06] bg-card/20">
          <Chatbot />
        </div>

        <section className="pb-28 pt-6">
          <div className="container mx-auto px-6 text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-secondary/20 bg-secondary/5 p-8 md:p-10">
              <Bot className="mx-auto mb-4 h-8 w-8 text-secondary" />
              <h2 className="mb-3 text-2xl font-bold text-white">
                ¿Quieres un asistente así para tu negocio?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Podemos adaptar la conversación, el tono y las funciones a tus
                clientes y a la forma en la que trabajas.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_20px_-6px_hsl(var(--primary)/0.8)] transition-opacity hover:opacity-90"
              >
                Cuéntanos tu idea →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}