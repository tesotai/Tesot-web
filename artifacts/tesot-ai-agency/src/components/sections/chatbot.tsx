import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  role: "bot" | "user"
  content: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "bot",
    content: "Hola. Soy el asistente de TESOT. Puedes preguntarme cualquier cosa sobre nuestros servicios, proyectos, automatizaciones o sobre cómo podemos ayudarte."
  }
]

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsTyping(true)

    try {
      const response = await fetch(
        "https://n8n.tesot.site/webhook/1362a32b-6bfe-4723-85eb-00c1fe50dd70",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: currentInput, chatHistory: messages }),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()

      // n8n puede devolver la respuesta en distintos campos según el nodo configurado
      const botContent =
        data?.output ||
        data?.response ||
        data?.text ||
        data?.message ||
        data?.answer ||
        (typeof data === "string" ? data : null) ||
        "Gracias por tu mensaje. Nuestro equipo revisará tu consulta y te contactará pronto."

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: botContent,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content:
            "En este momento el agente no está disponible. Por favor, intenta de nuevo en unos momentos o contáctanos directamente.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <section id="chatbot" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          
          <div className="lg:w-1/2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-4 md:mb-6">
              <Sparkles className="w-4 h-4" />
              Demo en Vivo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Experimenta el nivel de <span className="text-gradient">nuestros agentes.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 md:mb-8">
              No es un chatbot de reglas. Es un agente conversacional avanzado diseñado por TESOT, capaz de entender contexto complejo, razonar sobre tu modelo de negocio y proponer arquitecturas de automatización en tiempo real.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Memoria contextual persistente</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Razonamiento analítico avanzado</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Latencia de respuesta optimizada</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-card rounded-2xl border border-border/50 shadow-2xl flex flex-col h-[440px] md:h-[500px] relative z-10 overflow-hidden border-glow">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50 bg-background/50 flex items-center gap-3 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Arquitecto IA de TESOT</h3>
                  <p className="text-xs text-muted-foreground">En línea y listo</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={message.id}
                    className={`flex items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.role === "bot" ? "bg-primary/20 border-primary/30 border text-primary" : "bg-muted border-border border text-muted-foreground"
                    }`}>
                      {message.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                      message.role === "bot" 
                        ? "bg-card border border-border text-white rounded-tl-sm" 
                        : "bg-primary text-primary-foreground rounded-tr-sm shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]"
                    }`}>
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-primary/30 border flex items-center justify-center shrink-0 text-primary">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-card border border-border p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className="p-4 bg-background/50 border-t border-border/50 backdrop-blur-sm">
                <div className="relative flex items-center">
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="pr-12 bg-card border-border/50 h-12"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    variant="ghost" 
                    className="absolute right-1 text-primary hover:text-primary hover:bg-primary/10"
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
