import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SiFacebook, SiInstagram } from "react-icons/si"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Chatbot en vivo", href: "#chatbot" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#inicio" 
          onClick={(e) => scrollToSection(e, "#inicio")}
          className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
        >
          TESOT
          <span className="w-2 h-2 rounded-full bg-primary glow-primary inline-block"></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-border/60 pl-6">
            <a
              href="https://www.instagram.com/tesot.ia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de TESOT IA"
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <SiInstagram className="h-4 w-4 text-white transition-colors group-hover:text-primary" aria-hidden="true" />
              <span>@tesot.ia</span>
            </a>
            <a
              href="https://www.facebook.com/TesotIA"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de TESOT IA"
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <SiFacebook className="h-4 w-4 text-white transition-colors group-hover:text-primary" aria-hidden="true" />
              <span>Tesot IA</span>
            </a>
          </div>
          <Button 
            variant="glow" 
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contacto
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://www.instagram.com/tesot.ia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de TESOT IA"
            className="group rounded-full p-2 text-white transition-colors hover:bg-white/[0.06] hover:text-primary"
          >
            <SiInstagram className="h-4 w-4 transition-colors group-hover:text-primary" aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/TesotIA"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook de TESOT IA"
            className="group rounded-full p-2 text-white transition-colors hover:bg-white/[0.06] hover:text-primary"
          >
            <SiFacebook className="h-4 w-4 transition-colors group-hover:text-primary" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  )
}
