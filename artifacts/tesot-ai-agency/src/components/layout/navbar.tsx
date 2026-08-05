import React, { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from "lucide-react"
import { SiFacebook, SiInstagram } from "react-icons/si"
import agencyLogo from "@assets/Untitled_Project_-_illustrationimage-removebg-preview_1785971012346.png"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [location] = useLocation()
  const isHome = location === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollToSection = (id: string) => {
    if (isHome) {
      const target = document.querySelector(id)
      if (target) target.scrollIntoView({ behavior: "smooth" })
    } else {
      // Navigate home then scroll after paint
      window.location.href = `/${id}`
    }
  }

  const navLinks = [
    { name: "Inicio", type: "route", href: "/" },
    { name: "Servicios", type: "route", href: "/servicios" },
    { name: "Proyectos", type: "route", href: "/proyectos" },
    { name: "Chatbot en vivo", type: "scroll", href: "#chatbot" },
    { name: "Contáctanos", type: "scroll", href: "#contacto" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled || menuOpen
          ? "bg-background/90 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="TESOT AI Agency - Inicio"
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-0.5 shadow-[0_0_22px_-8px_rgba(255,255,255,0.8)] ring-1 ring-white/40">
            <img
              src={agencyLogo}
              alt="Logo de TESOT AI Agency"
              className="h-full w-full scale-[1.18] object-contain"
            />
          </span>
          <span className="text-2xl font-bold tracking-tighter text-white">
            TESOT
            <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-primary align-middle glow-primary" />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location === link.href
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </button>
            )
          )}

          {/* Social / contact */}
          <div className="flex items-center gap-3 border-l border-border/60 pl-6">
            <a
              href="mailto:contact.tesot@gmail.com"
              aria-label="Enviar correo a contact.tesot@gmail.com"
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-white transition-colors group-hover:text-primary" aria-hidden="true" />
              <span>contact.tesot@gmail.com</span>
            </a>
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
              href="https://www.facebook.com/profile.php?id=61592807240710"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de TESOT IA"
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <SiFacebook className="h-4 w-4 text-white transition-colors group-hover:text-primary" aria-hidden="true" />
              <span>Tesot IA</span>
            </a>
          </div>

        </div>

        {/* Mobile: social icons + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="mailto:contact.tesot@gmail.com"
            aria-label="Enviar correo a contact.tesot@gmail.com"
            className="group rounded-full p-2 text-white transition-colors hover:bg-white/[0.06] hover:text-primary"
          >
            <Mail className="h-4 w-4 transition-colors group-hover:text-primary" aria-hidden="true" />
          </a>
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
            href="https://www.facebook.com/profile.php?id=61592807240710"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook de TESOT IA"
            className="group rounded-full p-2 text-white transition-colors hover:bg-white/[0.06] hover:text-primary"
          >
            <SiFacebook className="h-4 w-4 transition-colors group-hover:text-primary" aria-hidden="true" />
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
            className="rounded-full p-2 text-white transition-colors hover:bg-white/[0.06]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location === link.href
                      ? "text-white bg-white/[0.06]"
                      : "text-muted-foreground hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    setMenuOpen(false)
                    scrollToSection(link.href)
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/[0.04] transition-colors text-left"
                >
                  {link.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
