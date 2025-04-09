"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "Movie Ticket App",
    description: "A neon-themed movie ticket booking app with seat selection and mobile tickets",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.53.08%20AM-8DboY72GCvUp8S4bzcDLRMneUs3oV7.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.53.07%20AM-ZXGhYbsM9xbnV0A83xZUY8o68MZClH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.53.06%20AM-7OcFsP4UTgBPpCPrzjPB30K6mjpRMK.jpeg",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/proto/PJevYUAhmPNUF1SrsE1TOO/Neon-UI-Design-from-scratch?node-id=3-2&starting-point-node-id=3%3A2&t=LVilUTgu88pXqxmu-1",
  },
  {
    id: 2,
    title: "Neon UI Design",
    description: "Virtual reality movie watching experience with neon aesthetics",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.48.28%20AM%20%281%29-5goYIM37BSKJkexfbUCoNhFo8B4AOH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.48.28%20AM-7mELXHsSdIAMM2kfEQDmwLuBkOpFS0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.48.29%20AM%20%281%29-qNOEekzBc8AZ4unbjpJJuDh8jPfBzX.jpeg",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/proto/PJevYUAhmPNUF1SrsE1TOO/Neon-UI-Design-from-scratch?node-id=3-2&starting-point-node-id=3%3A2&t=LVilUTgu88pXqxmu-1",
  },
  {
    id: 3,
    title: "Smart Home App",
    description: "Control your home devices with this intuitive smart home interface",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.54.31%20AM-P7wAYZDhvrCKiyOEkgLI7p2Nvs9sH7.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.54.32%20AM-vjtsJo2roYmbkZi60YpPZkP4OvckKZ.jpeg",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/proto/9hvv8u8L3BQ9y0rqOXPDD2/Smart-Home-App?node-id=1-3&t=C6eMkkYzUe7r79bG-1",
  },
  {
    id: 4,
    title: "E-Commerce Landing Page",
    description: "Modern e-commerce landing page with clean design",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Pro%2016_%20-%205-Tov46Ln7ZK3ZaFxwFdoWnA06LG5QSi.png",
    category: "Web Design",
    link: "https://www.figma.com/proto/JqbDglBpiA2cLr4KfRC7iD/Untitled?node-id=1-2&starting-point-node-id=1%3A2&t=3Gou4yObjutSfOjn-1",
  },
  {
    id: 5,
    title: "Apple Watch Landing Page",
    description: "Sleek landing page for Apple Watch with modern aesthetics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20Page-b4VCZWOdYBSrdHijUE9RILCImQu2Ap.png",
    category: "Web Design",
    link: "https://www.figma.com/proto/OJsuEtLj4I9FZ0CXLku3n5/Apple-Watch-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&t=0kfpc59j9qgtBqbq-1",
  },
  {
    id: 6,
    title: "Beauty E-Commerce App",
    description: "Stylish e-commerce app for beauty products",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%207.02.54%20AM-H1edm3V4fjWRChucXfeUk82VV0Ddog.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%207.02.54%20AM%20%281%29-67ZSfo87hXWYBkZxjU43DQJmfyGfD2.jpeg",
    ],
    category: "Mobile App",
    link: "#",
  },
  {
    id: 7,
    title: "Fashion E-Commerce Website",
    description: "Trendy fashion e-commerce website with seasonal collections",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fashion%20ecommerce.JPG-0bA9NW8bz71BGh8UnlB9ebzMgl147i.jpeg",
    category: "Web Design",
    link: "#",
  },
  {
    id: 8,
    title: "Grocery Delivery App",
    description: "Simple and effective grocery delivery app interface",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grocery%20App.JPG-tyRQoFTT4cSyXvDXUpIEOqtz6ta4sT.jpeg",
    category: "Mobile App",
    link: "#",
  },
]

// Image Slider Component
function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [images.length, isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/20">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={handlePrev}
          className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-white/50"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const categories = ["All", "Mobile App", "Web Design"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent -z-10" />

      <motion.div ref={containerRef} className="container mx-auto px-4" style={{ y }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing my <span className="gradient-text">creative work</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A collection of UI/UX design projects that demonstrate my skills in creating intuitive and engaging user
            experiences.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 glass p-1.5 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category ? "bg-primary text-white" : "hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="gradient-border rounded-2xl overflow-hidden bg-card h-full flex flex-col">
                <div className="relative overflow-hidden">
                  {project.images ? (
                    <ImageSlider images={project.images} />
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full self-start">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                  >
                    Explore Details <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
