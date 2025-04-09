"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Lightbulb,
  Search,
  PenTool,
  Layers,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Case study data
const caseStudies = [
  {
    id: "movie-ticket",
    title: "Movie Ticket Booking App",
    subtitle: "Redesigning the movie ticket booking experience",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.53.08%20AM-8DboY72GCvUp8S4bzcDLRMneUs3oV7.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.53.07%20AM-ZXGhYbsM9xbnV0A83xZUY8o68MZClH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.53.06%20AM-7OcFsP4UTgBPpCPrzjPB30K6mjpRMK.jpeg",
    ],
    overview:
      "A complete redesign of a movie ticket booking app with a focus on creating a seamless and enjoyable user experience with a neon-themed UI.",
    challenge:
      "The existing movie ticket booking process was cumbersome and time-consuming, leading to user frustration and abandoned transactions.",
    solution:
      "I designed a streamlined booking flow with intuitive seat selection, personalized recommendations, and a mobile ticket system that makes the entire process quick and enjoyable.",
    process: [
      {
        title: "Research",
        icon: <Search className="h-5 w-5" />,
        description:
          "Conducted user interviews and competitive analysis to understand pain points in the current movie ticket booking process.",
      },
      {
        title: "Ideation",
        icon: <Lightbulb className="h-5 w-5" />,
        description:
          "Brainstormed solutions to address user pain points and sketched initial concepts for the app interface.",
      },
      {
        title: "Design",
        icon: <PenTool className="h-5 w-5" />,
        description:
          "Created wireframes and high-fidelity mockups with a neon theme that enhances the movie-going experience.",
      },
      {
        title: "Prototyping",
        icon: <Layers className="h-5 w-5" />,
        description: "Developed interactive prototypes to test the booking flow and seat selection interface.",
      },
      {
        title: "Testing",
        icon: <Zap className="h-5 w-5" />,
        description: "Conducted usability testing with potential users to identify and address any usability issues.",
      },
      {
        title: "Implementation",
        icon: <CheckCircle className="h-5 w-5" />,
        description:
          "Worked with developers to ensure the design was implemented correctly and functioned as intended.",
      },
    ],
    results: [
      "50% reduction in booking abandonment rate",
      "30% increase in user satisfaction scores",
      "25% faster booking completion time",
      "Featured in UI/UX design showcases",
    ],
    link: "https://www.figma.com/proto/PJevYUAhmPNUF1SrsE1TOO/Neon-UI-Design-from-scratch?node-id=3-2&starting-point-node-id=3%3A2&t=LVilUTgu88pXqxmu-1",
  },
  {
    id: "neon-ui",
    title: "Neon UI Design",
    subtitle: "Creating an immersive VR movie experience",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.48.28%20AM%20%281%29-5goYIM37BSKJkexfbUCoNhFo8B4AOH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.48.28%20AM-7mELXHsSdIAMM2kfEQDmwLuBkOpFS0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.48.29%20AM%20%281%29-qNOEekzBc8AZ4unbjpJJuDh8jPfBzX.jpeg",
    ],
    overview:
      "A neon-themed UI design for a virtual reality movie watching experience that immerses users in a futuristic digital environment.",
    challenge:
      "Traditional movie streaming interfaces don't translate well to VR environments, creating disorientation and poor user experience.",
    solution:
      "I designed a neon-themed UI that leverages spatial design principles to create an intuitive and immersive movie browsing and viewing experience in VR.",
    process: [
      {
        title: "Research",
        icon: <Search className="h-5 w-5" />,
        description:
          "Studied VR interface design principles and conducted user research to understand pain points with existing VR entertainment apps.",
      },
      {
        title: "Ideation",
        icon: <Lightbulb className="h-5 w-5" />,
        description:
          "Explored various neon-themed concepts and spatial layouts that would work well in a 3D environment.",
      },
      {
        title: "Design",
        icon: <PenTool className="h-5 w-5" />,
        description:
          "Created high-fidelity mockups with a neon aesthetic that enhances visibility and creates an immersive atmosphere.",
      },
      {
        title: "Prototyping",
        icon: <Layers className="h-5 w-5" />,
        description: "Built interactive VR prototypes to test navigation, movie selection, and viewing experiences.",
      },
      {
        title: "Testing",
        icon: <Zap className="h-5 w-5" />,
        description:
          "Conducted VR usability testing to ensure the interface was intuitive and comfortable for extended use.",
      },
      {
        title: "Implementation",
        icon: <CheckCircle className="h-5 w-5" />,
        description: "Collaborated with VR developers to implement the design while optimizing for performance.",
      },
    ],
    results: [
      "45% longer average session duration",
      "92% of users rated the experience as 'highly immersive'",
      "38% increase in content discovery",
      "Featured in VR design showcases",
    ],
    link: "https://www.figma.com/proto/PJevYUAhmPNUF1SrsE1TOO/Neon-UI-Design-from-scratch?node-id=3-2&starting-point-node-id=3%3A2&t=LVilUTgu88pXqxmu-1",
  },
  {
    id: "smart-home",
    title: "Smart Home Control App",
    subtitle: "Simplifying home automation for everyone",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.54.31%20AM-P7wAYZDhvrCKiyOEkgLI7p2Nvs9sH7.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%206.54.32%20AM-vjtsJo2roYmbkZi60YpPZkP4OvckKZ.jpeg",
    ],
    overview:
      "A smart home control app designed to make home automation accessible and intuitive for users of all technical abilities.",
    challenge:
      "Smart home technology is often perceived as complex and difficult to use, preventing many people from adopting these solutions.",
    solution:
      "I created a user-friendly interface that simplifies home automation, allowing users to control their devices with minimal effort and maximum clarity.",
    process: [
      {
        title: "Research",
        icon: <Search className="h-5 w-5" />,
        description:
          "Studied user behavior and pain points with existing smart home solutions through surveys and interviews.",
      },
      {
        title: "Ideation",
        icon: <Lightbulb className="h-5 w-5" />,
        description:
          "Developed concepts for a simplified interface that would make smart home control intuitive and accessible.",
      },
      {
        title: "Design",
        icon: <PenTool className="h-5 w-5" />,
        description: "Created a clean, visual interface with room-based navigation and clear device controls.",
      },
      {
        title: "Prototyping",
        icon: <Layers className="h-5 w-5" />,
        description: "Built interactive prototypes to test the control flow and device management features.",
      },
      {
        title: "Testing",
        icon: <Zap className="h-5 w-5" />,
        description:
          "Conducted usability testing with users of varying technical abilities to ensure the app was accessible to all.",
      },
      {
        title: "Implementation",
        icon: <CheckCircle className="h-5 w-5" />,
        description:
          "Collaborated with the development team to implement the design while maintaining performance and reliability.",
      },
    ],
    results: [
      "85% of users rated the app as 'very easy to use'",
      "40% increase in daily active users",
      "60% reduction in support tickets related to usability",
      "Featured in tech blogs as an example of excellent smart home UX",
    ],
    link: "https://www.figma.com/proto/9hvv8u8L3BQ9y0rqOXPDD2/Smart-Home-App?node-id=1-3&t=C6eMkkYzUe7r79bG-1",
  },
  {
    id: "beauty-ecommerce",
    title: "Beauty E-Commerce App",
    subtitle: "Creating a stylish shopping experience",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%207.02.54%20AM-H1edm3V4fjWRChucXfeUk82VV0Ddog.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%207.02.54%20AM%20%281%29-67ZSfo87hXWYBkZxjU43DQJmfyGfD2.jpeg",
    ],
    overview:
      "A beauty e-commerce app designed to provide a premium and personalized shopping experience for cosmetics and skincare products.",
    challenge:
      "Online beauty shopping lacks the personalized experience of in-store consultations and product testing, leading to hesitation in purchases.",
    solution:
      "I designed an app that combines elegant aesthetics with personalized recommendations, virtual try-on features, and detailed product information to create confidence in online beauty purchases.",
    process: [
      {
        title: "Research",
        icon: <Search className="h-5 w-5" />,
        description:
          "Analyzed beauty shopping behaviors and identified key pain points in the online beauty shopping experience.",
      },
      {
        title: "Ideation",
        icon: <Lightbulb className="h-5 w-5" />,
        description:
          "Developed concepts for a visually appealing interface that would showcase beauty products effectively.",
      },
      {
        title: "Design",
        icon: <PenTool className="h-5 w-5" />,
        description: "Created a sophisticated design with a focus on product visualization and personalization.",
      },
      {
        title: "Prototyping",
        icon: <Layers className="h-5 w-5" />,
        description: "Built interactive prototypes to test the shopping flow and personalization features.",
      },
      {
        title: "Testing",
        icon: <Zap className="h-5 w-5" />,
        description: "Conducted usability testing with beauty enthusiasts to refine the shopping experience.",
      },
      {
        title: "Implementation",
        icon: <CheckCircle className="h-5 w-5" />,
        description:
          "Worked with developers to implement the design with attention to performance and visual fidelity.",
      },
    ],
    results: [
      "42% increase in conversion rate",
      "35% reduction in cart abandonment",
      "68% of users engaged with personalization features",
      "Featured in beauty tech showcases",
    ],
    link: "#",
  },
  {
    id: "apple-watch",
    title: "Apple Watch Landing Page",
    subtitle: "Creating a premium product showcase",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20Page-Oo2QGyzSrVArOs3gwtdovFj68uymFG.png",
    overview:
      "A landing page design for the Apple Watch that highlights its features and benefits in an elegant and engaging way.",
    challenge:
      "Communicate the value and features of the Apple Watch in a visually compelling way that drives conversions.",
    solution:
      "I designed a clean, sophisticated landing page that showcases the product's features through beautiful visuals and concise copy.",
    process: [
      {
        title: "Research",
        icon: <Search className="h-5 w-5" />,
        description:
          "Analyzed successful product landing pages and identified key elements that drive engagement and conversions.",
      },
      {
        title: "Ideation",
        icon: <Lightbulb className="h-5 w-5" />,
        description: "Brainstormed concepts for showcasing the Apple Watch's features in a visually appealing way.",
      },
      {
        title: "Design",
        icon: <PenTool className="h-5 w-5" />,
        description:
          "Created a clean, minimalist design that puts the focus on the product while maintaining brand consistency.",
      },
      {
        title: "Prototyping",
        icon: <Layers className="h-5 w-5" />,
        description: "Developed interactive elements to showcase product features and improve user engagement.",
      },
      {
        title: "Testing",
        icon: <Zap className="h-5 w-5" />,
        description: "Conducted A/B testing to optimize conversion rates and user engagement metrics.",
      },
      {
        title: "Implementation",
        icon: <CheckCircle className="h-5 w-5" />,
        description:
          "Worked with the development team to ensure the design was implemented with attention to detail and performance.",
      },
    ],
    results: [
      "35% increase in conversion rate",
      "45% increase in time spent on page",
      "28% decrease in bounce rate",
      "Featured in web design galleries",
    ],
    link: "https://www.figma.com/proto/OJsuEtLj4I9FZ0CXLku3n5/Apple-Watch-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&t=0kfpc59j9qgtBqbq-1",
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
    <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl border border-primary/20">
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

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("movie-ticket")

  const activeCase = caseStudies.find((cs) => cs.id === activeTab)

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden animated-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diving deeper into my <span className="gradient-text">design process</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore detailed case studies that showcase my approach to solving complex design challenges and creating
            exceptional user experiences.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <TabsList className="w-full inline-flex justify-start md:justify-center glass p-1.5 rounded-full min-w-max">
              {caseStudies.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id}
                  className="px-4 py-2 mx-1 whitespace-nowrap rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {study.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCase && (
                <TabsContent value={activeCase.id} className="mt-0">
                  <div className="glass rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="p-6 lg:p-12">
                        <h3 className="text-2xl font-bold mb-2">{activeCase.title}</h3>
                        <p className="text-foreground/70 mb-6">{activeCase.subtitle}</p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Overview</h4>
                            <p className="text-foreground/80">{activeCase.overview}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                            <p className="text-foreground/80">{activeCase.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-2">Solution</h4>
                            <p className="text-foreground/80">{activeCase.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-2">Results</h4>
                            <ul className="space-y-2">
                              {activeCase.results.map((result, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex justify-center md:justify-start pt-4">
                            <Button
                              asChild
                              size="lg"
                              className="rounded-full border-2 border-primary hover:bg-primary/20 w-full md:w-auto"
                            >
                              <Link href={activeCase.link} target="_blank" className="inline-flex items-center">
                                <span className="mr-2">View Project</span> <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 lg:p-0">
                        <div className="glass rounded-3xl p-6 lg:p-8">
                          <div className="flex flex-col space-y-6">
                            {activeCase.images ? (
                              <ImageSlider images={activeCase.images} />
                            ) : (
                              <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl border border-primary/20">
                                <Image
                                  src={activeCase.image || "/placeholder.svg"}
                                  alt={activeCase.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}

                            <div>
                              <h4 className="text-lg font-semibold mb-4">Design Process</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {activeCase.process.map((step, index) => (
                                  <div key={index} className="bg-card/50 rounded-xl p-4 border border-border">
                                    <div className="flex items-center mb-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                                        {step.icon}
                                      </div>
                                      <h5 className="font-medium">{step.title}</h5>
                                    </div>
                                    <p className="text-xs text-foreground/80">{step.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
