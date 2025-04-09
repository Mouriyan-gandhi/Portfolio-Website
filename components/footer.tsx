"use client"

import Link from "next/link"
import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/nishtha-deep-00a881348/",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      link: "https://www.instagram.com/deepnishtha/?igsh=MWJzcm54YmI0bXo4ZA%3D%3D#",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      name: "Email",
      link: "mailto:nishthadeep3@gmail.com",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-12 bg-gradient-to-b from-background to-background-secondary relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link href="/" className="text-2xl font-bold gradient-text mb-6 md:mb-0">
            Nishtha Deep
          </Link>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 mb-4 md:mb-0">&copy; {currentYear} Nishtha Deep. All rights reserved.</p>

          <div className="flex items-center space-x-8">
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
