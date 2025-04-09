"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Interactive background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const colors = [
      "rgba(147, 51, 234, 0.5)", // primary
      "rgba(6, 182, 212, 0.5)", // secondary
      "rgba(236, 72, 153, 0.5)", // accent
      "rgba(250, 204, 21, 0.5)", // tertiary
    ]

    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 5 + 1
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1
      })

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="staggered-fade-in" initial="hidden" animate="visible" viewport={{ once: true }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              UI/UX Designer
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creating <span className="gradient-text">Delightful</span> Digital Experiences
            </h1>

            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              I design intuitive and engaging user interfaces that solve real problems and create meaningful connections
              between users and products.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="hero-button hero-button-primary"
                onClick={(e) => {
                  e.preventDefault()
                  const section = document.getElementById("projects")
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                View My Work
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfrqeER8BhPf6X56_eBQQSy4rI3MDqTbxp9BlIjPyx0JaHMWw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button hero-button-secondary"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                  <Image
                    src="/images/nishtha-deep.png"
                    alt="Nishtha Deep - UI/UX Designer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 right-0 floating glass rounded-2xl p-3 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-q2WcvUQQ4XYhx78iHEz5c1N1vdNzcl.png"
                  alt="Movie Ticket App"
                  width={60}
                  height={120}
                  className="rounded-lg"
                />
              </div>

              <div
                className="absolute bottom-10 -left-5 floating glass rounded-2xl p-3 shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-5sBlVilixACny8NPjQSoDp2ecBEAAH.png"
                  alt="Smart Home App"
                  width={60}
                  height={120}
                  className="rounded-lg"
                />
              </div>

              <div
                className="absolute bottom-0 right-10 floating glass rounded-2xl p-3 shadow-lg"
                style={{ animationDelay: "1.5s" }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neon%20UI%20Design%20from%20scratch-mM6ZN05XJJuNzDtjwN5v6XW1efcWcJ.png"
                  alt="Neon UI Design"
                  width={60}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown
          className="h-8 w-8 text-primary cursor-pointer"
          onClick={() => {
            const section = document.getElementById("about")
            if (section) {
              window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth",
              })
            }
          }}
        />
      </div>
    </section>
  )
}
