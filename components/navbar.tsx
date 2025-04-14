"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-600">CamLait</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Accueil", href: "/" },
              { name: "À Propos", href: "/a-propos" },
              { name: "Produits", href: "/#products" },
              { name: "Localisation", href: "/#location" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Nous Contacter
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg py-4 px-4 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Produits", href: "/#products" },
                { name: "Localisation", href: "/#location" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Nous Contacter
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
