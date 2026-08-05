import React from "react"
import { Link } from "wouter"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/pages/home"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Mail,
  CalendarCheck,
  MessageSquare,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

interface Service {
  id: string
  icon: React.ReactNode
  accent: string
  title: string
  summary: string
  detail: string
  benefits: string[]
  useCases: string[]
}

const services: Service[] = [
  {
    id: "correo",
    icon: <Mail className="w-6 h-6" />,
    accent: "text-primary",
    title: "Gestión Automatizada de Correo con IA (Triage & Drafts)",
    summary:
      "Respuestas automáticas inteligentes, clasificación y gestión de borradores en Gmail.",
    detail:
      "La IA analiza los correos entrantes, redacta y envía respuestas automáticas si tiene la certeza, o los deja guardados de forma segura en borradores de Gmail para revisión humana si requiere supervisión especial.",
    benefits: [
      "Reducción de hasta un 80% en el tiempo de gestión de bandeja de entrada",
      "Respuestas coherentes con tu tono y políticas de empresa",
      "Borradores listos para revisar en segundos, no horas",
      "Clasificación inteligente por prioridad, tipo y urgencia",
    ],
    useCases: [
      "Startups que reciben decenas de consultas diarias",
      "Equipos de ventas con alto volumen de correos entrantes",
      "Negocios con soporte al cliente vía email",
    ],
  },
  {
    id: "reservas",
    icon: <CalendarCheck className="w-6 h-6" />,
    accent: "text-secondary",
    title: "Sistema Automatizado de Reservas Inteligentes",
    summary:
      "Gestión de citas omnicanal con validación de conflictos y sugerencias automáticas.",
    detail:
      "Sistema integrado con Gmail que procesa solicitudes, guarda los datos de la reserva en Google Sheets y envía correos de confirmación. Incluye lógica avanzada: si la persona intenta duplicar una reserva existente, la IA le avisa por correo; si el horario no está disponible, le recomienda de forma inteligente otros huecos libres próximos.",
    benefits: [
      "Eliminación total de dobles reservas y conflictos de agenda",
      "Confirmaciones automáticas por correo en tiempo real",
      "Registro centralizado en Google Sheets sin intervención humana",
      "Sugerencias proactivas de horarios alternativos",
    ],
    useCases: [
      "Clínicas y consultorios médicos",
      "Estudios de consultoría y despachos",
      "Negocios de servicios con citas frecuentes",
    ],
  },
  {
    id: "chatbot",
    icon: <MessageSquare className="w-6 h-6" />,
    accent: "text-primary",
    title: "Chatbot Web Propio a Medida",
    summary:
      "Asistentes conversacionales integrados en tu sitio web con contexto de negocio.",
    detail:
      "Desarrollo de chatbots personalizados entrenados con la información de la empresa para atención al cliente 24/7, capaces de resolver dudas complejas, capturar leads y conectar con bases de datos en tiempo real.",
    benefits: [
      "Disponibilidad 24/7 sin coste de personal adicional",
      "Entrenado con el contenido, tono y datos reales de tu empresa",
      "Captura de leads cualificados de forma automatizada",
      "Integración con CRM, bases de datos y herramientas existentes",
    ],
    useCases: [
      "E-commerce con soporte al cliente frecuente",
      "SaaS que necesita onboarding automatizado",
      "Agencias y servicios profesionales B2B",
    ],
  },
  {
    id: "agentes",
    icon: <Brain className="w-6 h-6" />,
    accent: "text-secondary",
    title: "Desarrollo de Agentes e IAs Propias para Empresas",
    summary:
      "Soluciones de Inteligencia Artificial autónomas y adaptadas al core de tu negocio.",
    detail:
      "Creación de inteligencias artificiales a medida orientadas a automatizar flujos complejos de trabajo, análisis predictivo, procesamiento de documentos específicos y toma de decisiones autónoma dentro de la infraestructura del cliente.",
    benefits: [
      "Automatización de procesos de alto valor que antes requerían expertos",
      "Análisis predictivo basado en los datos históricos de tu empresa",
      "Procesamiento masivo de documentos: facturas, contratos, informes",
      "IA que aprende y mejora con cada interacción dentro de tu entorno",
    ],
    useCases: [
      "Empresas con flujos complejos de trabajo repetitivo",
      "Sectores legal, financiero y logístico",
      "Compañías que buscan ventaja competitiva a largo plazo",
    ],
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

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* ── Hero header ── */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
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
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 bg-primary/5"
              >
                Nuestros Servicios
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                La IA que{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  transforma
                </span>{" "}
                tus operaciones
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground max-w-xl"
              >
                No vendemos software genérico. Construimos sistemas de IA
                adaptados al ADN de tu negocio para automatizar lo que más
                tiempo y dinero te cuesta.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Accordion de servicios ── */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {services.map((service, index) => (
                  <motion.div key={service.id} variants={fadeUp}>
                    <AccordionItem
                      value={service.id}
                      className="border border-white/[0.08] rounded-xl bg-card/40 backdrop-blur-sm px-6 overflow-hidden transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-card/70 data-[state=open]:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)]"
                    >
                      <AccordionTrigger className="hover:no-underline py-6 gap-4">
                        <div className="flex items-center gap-4 text-left">
                          <div
                            className={`w-10 h-10 rounded-lg border border-white/10 bg-background flex items-center justify-center shrink-0 ${service.accent}`}
                          >
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1 font-normal">
                              Servicio {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="text-base md:text-lg font-semibold text-white leading-snug">
                              {service.title}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1 font-normal hidden md:block">
                              {service.summary}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-0 pb-6">
                        <div className="border-t border-white/[0.06] pt-6 space-y-6">
                          {/* Detail */}
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.detail}
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Benefits */}
                            <div>
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                                Beneficios clave
                              </h4>
                              <ul className="space-y-2">
                                {service.benefits.map((b) => (
                                  <li
                                    key={b}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Use cases */}
                            <div>
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
                                Ideal para
                              </h4>
                              <ul className="space-y-2">
                                {service.useCases.map((u) => (
                                  <li
                                    key={u}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    {u}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-2">
                            <Link href="/#contacto">
                              <Button variant="glow" size="sm">
                                Solicitar este servicio →
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
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
                ¿Tienes un caso de uso diferente? Lo analizamos juntos.
              </p>
              <Link href="/#contacto">
                <Button variant="glow" size="lg">
                  Hablar con el equipo →
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
