"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
