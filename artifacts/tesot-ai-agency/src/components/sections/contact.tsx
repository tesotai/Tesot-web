import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ArrowRight } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingresa un correo válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch(
        "https://n8n.tesot.site/webhook/tesot-contacto",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            source: "TESOT website",
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      setIsSubmitted(true)
    } catch {
      setSubmitError(
        "No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos momentos.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 relative bg-card/20 border-t border-border/50">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Pregúntanos lo que quieras, al instante.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 md:mb-8">
              Escribe cualquier duda sobre nuestros servicios. Nuestro sistema inteligente te responderá de inmediato. Si necesitas algo más complejo o personalizado, un especialista se pondrá en contacto contigo muy pronto.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Respuestas al instante</h4>
                  <p className="text-sm text-muted-foreground">Tu consulta es atendida de forma inmediata por nuestra inteligencia integrada.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Atención humana garantizada</h4>
                  <p className="text-sm text-muted-foreground">Si tu caso necesita un toque especial, un experto de nuestro equipo te escribirá.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Ahorro de tiempo real</h4>
                  <p className="text-sm text-muted-foreground">Olvídate de esperar días; obtén claridad sobre tu proyecto en minutos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/50 text-primary">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Solicitud Recibida</h3>
                      <p className="text-muted-foreground mb-8">
                       Hemos recibido tu pregunta. Nuestro asistente y nuestro equipo la revisarán para ayudarte cuanto antes.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Nombre Completo</label>
                      <Input 
                        {...register("name")} 
                        placeholder="Ej. María Gómez" 
                        className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Correo Electrónico</label>
                      <Input 
                        {...register("email")} 
                        type="email" 
                        placeholder="tu@correo.com" 
                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">¿Qué te gustaría saber o mejorar en tu negocio?</label>
                      <Textarea 
                        {...register("message")} 
                        placeholder="Ej. ¿Cómo pueden ayudar a que mi equipo pierda menos tiempo respondiendo correos?..." 
                        className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base mt-2" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          Procesando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Enviar pregunta o duda →
                        </span>
                      )}
                    </Button>
                    {submitError && (
                      <p role="alert" className="text-sm text-destructive text-center">
                        {submitError}
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
