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
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Store,
  Stethoscope,
  BriefcaseBusiness,
} from "lucide-react"

interface Service {
  id: string
  icon: React.ReactNode
  accent: string
  title: string
  summary: string
  detail: string
  benefits: string[]
  examples: string[]
}

const services: Service[] = [
  {
    id: "mensajes",
    icon: <Mail className="w-6 h-6" />,
    accent: "text-primary",
    title: "Respuestas automáticas para tus mensajes y correos",
    summary:
      "Contesta preguntas habituales, ordena solicitudes y prepara respuestas sin que tengas que estar pendiente todo el día.",
    detail:
      "La solución lee los mensajes que llegan, entiende qué necesita cada persona y responde cuando la respuesta está clara. Si hace falta una decisión tuya, prepara el borrador y te lo deja listo para revisar. Así no se pierde ningún cliente y tú mantienes el control de las conversaciones importantes.",
    benefits: [
      "Respuestas rápidas, también fuera del horario de apertura",
      "Mensajes ordenados por urgencia y tipo de solicitud",
      "Borradores preparados para que solo tengas que revisarlos",
      "Un tono de comunicación coherente con tu negocio",
    ],
    examples: [
      "Un restaurante responde horarios, carta y reservas.",
      "Una tienda informa sobre productos, envíos y devoluciones.",
      "Una clínica aclara servicios y prepara solicitudes de cita.",
    ],
  },
  {
    id: "agenda",
    icon: <CalendarCheck className="w-6 h-6" />,
    accent: "text-secondary",
    title: "Citas, reservas y pedidos que se organizan solos",
    summary:
      "Gestiona horarios, evita reservas duplicadas y confirma cada solicitud automáticamente.",
    detail:
      "Cuando alguien quiere reservar, la solución comprueba los huecos disponibles, guarda los datos y envía la confirmación. Si el horario está ocupado, propone alternativas cercanas. Si detecta que la persona ya tiene una reserva, lo avisa antes de crear otra.",
    benefits: [
      "Menos llamadas, mensajes y trabajo de coordinación",
      "Adiós a las reservas duplicadas y a los cruces de horarios",
      "Confirmaciones automáticas para clientes y equipo",
      "Alternativas inteligentes cuando el horario solicitado está ocupado",
    ],
    examples: [
      "Mesas y pedidos para restaurantes.",
      "Citas para clínicas, peluquerías y profesionales.",
      "Visitas, clases o servicios con horarios disponibles.",
    ],
  },
  {
    id: "asistente",
    icon: <MessageSquare className="w-6 h-6" />,
    accent: "text-primary",
    title: "Un asistente para tu web que atiende 24/7",
    summary:
      "Una conversación sencilla para que tus visitantes resuelvan dudas y contacten contigo al momento.",
    detail:
      "Creamos un asistente con la información real de tu negocio: servicios, precios, horarios, condiciones y preguntas frecuentes. Puede resolver dudas, recoger los datos de una persona interesada y avisarte cuando es el momento de intervenir.",
    benefits: [
      "Atención continua sin contratar otro turno",
      "Respuestas basadas en la información real de tu negocio",
      "Más oportunidades de convertir visitas en clientes",
      "Derivación a una persona cuando el caso lo necesita",
    ],
    examples: [
      "Un visitante consulta disponibilidad desde la web.",
      "Una tienda ayuda a elegir el producto adecuado.",
      "Un profesional recibe solicitudes de presupuesto.",
    ],
  },
  {
    id: "automatizacion",
    icon: <Sparkles className="w-6 h-6" />,
    accent: "text-secondary",
    title: "Automatización a medida para tu forma de trabajar",
    summary:
      "Conectamos tus herramientas y hacemos que las tareas repetitivas ocurran automáticamente.",
    detail:
      "Cada negocio tiene una manera distinta de trabajar. Analizamos tu día a día y construimos una solución que puede ordenar información, preparar documentos, enviar avisos, actualizar registros o ayudar a tu equipo a tomar decisiones más rápido.",
    benefits: [
      "Menos trabajo manual y menos errores por despistes",
      "Tus herramientas actuales trabajan conectadas",
      "Procesos pensados para tu negocio, no plantillas genéricas",
      "Más capacidad para crecer sin aumentar la carga del equipo",
    ],
    examples: [
      "Una tienda organiza pedidos y avisa de cada cambio.",
      "Una empresa prepara presupuestos y documentos.",
      "Un equipo recibe cada mañana un resumen de lo importante.",
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
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
                Soluciones para tu negocio
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Menos tareas.
                <br />
                <span className="text-gradient">Más tiempo para tus clientes.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                Ayudamos a restaurantes, tiendas, clínicas, profesionales y
                equipos de cualquier sector a trabajar mejor con soluciones
                sencillas, útiles y hechas a su medida.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-3 gap-3 md:gap-5 mb-12 max-w-2xl mx-auto">
              {[
                { icon: <Store className="w-4 h-4" />, label: "Comercios" },
                { icon: <Stethoscope className="w-4 h-4" />, label: "Servicios" },
                { icon: <BriefcaseBusiness className="w-4 h-4" />, label: "Empresas" },
              ].map((sector) => (
                <div
                  key={sector.label}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-card/30 px-3 py-3 text-center text-xs md:text-sm text-muted-foreground"
                >
                  <span className="text-primary">{sector.icon}</span>
                  {sector.label}
                </div>
              ))}
            </div>

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
                              Solución {String(index + 1).padStart(2, "0")}
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
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.detail}
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                                Lo que consigues
                              </h4>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit) => (
                                  <li
                                    key={benefit}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
                                Ejemplos reales
                              </h4>
                              <ul className="space-y-2">
                                {service.examples.map((example) => (
                                  <li
                                    key={example}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <Link href="/#contacto">
                            <Button variant="glow" size="sm">
                              Quiero hablar de mi negocio →
                            </Button>
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground mb-6 text-lg">
                Cuéntanos qué te quita tiempo y te diremos cómo simplificarlo.
              </p>
              <Link href="/#contacto">
                <Button variant="glow" size="lg">
                  Hablar con TESOT →
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