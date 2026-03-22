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
    title: "IIITM Gwalior Website 1",
    description: "Institutional website design for IIITM Gwalior with academic focus",
    images: [
      "/iiitm-1a.png",
      "/iiitm-1b.png",
      "/iiitm-1c.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/n7WH5iBFTibTa8UkVKHIzY/IIITM-Gwalior?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 2,
    title: "IIITM Gwalior Website 2",
    description: "Alternative institutional website concept for IIITM Gwalior",
    images: [
      "/iiitm-2a.png",
      "/iiitm-2b.png",
      "/iiitm-2c.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/1J0Z90h8ogvGlSHf7yTQXh/IIITM-Gwalior-2?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 3,
    title: "IIITM Gwalior Website 3",
    description: "Modernized web presence concept for IIITM Gwalior government project",
    images: [
      "/iiitm-3a.png",
      "/iiitm-3b.png",
      "/iiitm-3c.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/99ZEaSj9dLxumZVfj8WVVD/IIITM-Gwalior-3?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 4,
    title: "IIITM Gwalior Website 4",
    description: "Interactive UI/UX design iteration for IIITM Gwalior academic portal",
    images: [
      "/iiitm-4a.png",
      "/iiitm-4b.png",
      "/iiitm-4c.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/KZ6nZBNAOqNWh0Ac5kiEj1/IIITM-Gwalior-4?m=auto&t=L9APd648Sj6H9mkJ-6",
  },
  {
    id: 5,
    title: "IIITM Gwalior Website 5",
    description: "Final iteration of the IIITM Gwalior government institutional website",
    images: [
      "/iiitm-5a.png",
      "/iiitm-5b.png",
      "/iiitm-5c.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/Rm9ITSArf7HcHv8l4jPK8p/IIITM-GWALIOR-5?m=auto&t=L9APd648Sj6H9mkJ-6",
  },
  {
    id: 6,
    title: "Admission Adda Website 2",
    description: "Variant design for the Admission Adda educational platform",
    images: [
      "/admission_adda-1.png",
      "/admission_adda-2.png",
      "/admission_adda-3.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/fgcIeexZLPfVZ2nWpi8Zzp/Admission-Adda?node-id=56-2&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 7,
    title: "Jewellery E-Commerce Application",
    description: "Elegant online shopping platform specifically designed for fine jewelry",
    images: [
      "/jewellery-1.png",
      "/jewellery-2.png",
      "/jewellery-3.png",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/design/hkujYdq4l9ndysGa7bnWEN/Jewellery?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 8,
    title: "Learning Application (Food Application)",
    description: "Educational platform interface designed for effective online learning",
    images: [
      "/food-1.jpg",
      "/food-2.jpg",
      "/food-3.jpg",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/design/27fW3NlChcHb4ZqgydMOYZ/Food-Application?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 9,
    title: "Airlines Part Application",
    description: "Aviation-focused application interface for seamless travel booking",
    images: [
      "/pilot-1.png",
      "/pilot-2.png",
      "/pilot-3.png",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/design/v5QH29x9EiS0JVwumjFhQ4/Samantha?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 10,
    title: "Railtel Government Website",
    description: "Official government website design for Railtel with clear navigation",
    images: [
      "/rail-1.png",
      "/rail-2.png",
      "/rail-3.png",
    ],
    category: "Web Design",
    link: "https://www.figma.com/design/p06Pum2iDE6ApTqlKxxOQQ/Railtel?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
  {
    id: 11,
    title: "Boat Parts Application",
    description: "Specialized application interface for maritime hardware and boat parts",
    images: [
      "/ship-1.png",
      "/ship-2.png",
      "/ship-3.png",
    ],
    category: "Mobile App",
    link: "https://www.figma.com/design/VXcd17Q8J8K7BjFU5S0OF0/Exalto-App-2026?m=auto&t=L9APd648Sj6H9mkJ-1",
  },
]

// Image Slider Component
function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

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

// Project Card Component (shared between mobile and desktop)
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="gradient-border rounded-2xl overflow-hidden bg-card h-full flex flex-col">
        <div className="relative overflow-hidden">
          <ImageSlider images={project.images} />
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
  )
}

// Mobile Carousel Component
function MobileCarousel({ projects: items }: { projects: typeof projects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
  }

  if (showAll) {
    return (
      <div>
        <div className="grid grid-cols-1 gap-4">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Slider
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <ProjectCard project={items[currentIndex]} index={0} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-1.5 items-center">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* See All Projects button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          See All Projects <ArrowRight className="h-4 w-4" />
        </button>
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

        {/* Mobile: Slide carousel with See All */}
        <div className="block sm:hidden">
          <MobileCarousel projects={filteredProjects} />
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
