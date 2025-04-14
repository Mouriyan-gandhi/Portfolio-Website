"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "case-studies", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace("#", ""))
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass" : "py-5 bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold gradient-text"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("home")
          }}
        >
          Nishtha Deep
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-foreground/80 hover:text-primary transition-colors ${
                activeSection === link.href.replace("#", "") ? "text-primary font-medium" : ""
              }`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
            >
              {link.name}
            </a>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="ml-4"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button asChild size="sm" className="ml-4">
            <a
              href="https://drive.google.com/file/d/1Sm2druzG1TWyRGc-kGD0C_BT7gM8d_SM/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-foreground/80 hover:text-primary transition-colors py-2 ${
                    activeSection === link.href.replace("#", "") ? "text-primary font-medium" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  {link.name}
                </a>
              ))}

              <Button asChild size="sm" className="mt-4 w-full">
                <a
                  href="https://drive.google.com/file/d/1YTRcZfB0U9VW7kX2ZtSSbU4dmY8yENog/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
