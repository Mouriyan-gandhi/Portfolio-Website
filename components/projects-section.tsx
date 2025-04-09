"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import type { Mesh } from "three"
import { motion } from "framer-motion"

// Project data
const projects = [
  {
    id: 1,
    title: "Movie Ticket App",
    description: "A neon-themed movie ticket booking app with seat selection and mobile tickets",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-sl9txjUvP1ITVWK27mjSmLNyIgNNLb.png",
    link: "https://www.figma.com/proto/PJevYUAhmPNUF1SrsE1TOO/Neon-UI-Design-from-scratch?node-id=3-2&starting-point-node-id=3%3A2&t=LVilUTgu88pXqxmu-1",
  },
  {
    id: 2,
    title: "Neon UI Design",
    description: "Virtual reality movie watching experience with neon aesthetics",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neon%20UI%20Design%20from%20scratch-Zh20tEMNVW5uEZ7ImMizbVLFjK657N.png",
    link: "https://www.figma.com/proto/PJevYUAhmPNUF1SrsE1TOO/Neon-UI-Design-from-scratch?node-id=3-2&starting-point-node-id=3%3A2&t=LVilUTgu88pXqxmu-1",
  },
  {
    id: 3,
    title: "Smart Home App",
    description: "Control your home devices with this intuitive smart home interface",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-okCaUMwIwixBhp3cJRNVEgyJ3kPLvK.png",
    link: "https://www.figma.com/proto/9hvv8u8L3BQ9y0rqOXPDD2/Smart-Home-App?node-id=1-3&t=C6eMkkYzUe7r79bG-1",
  },
  {
    id: 4,
    title: "E-Commerce Landing Page",
    description: "Modern e-commerce landing page with clean design",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Pro%2016_%20-%205-WFUbA0gqu30tphW87LnVFPP1dnBFyr.png",
    link: "https://www.figma.com/proto/JqbDglBpiA2cLr4KfRC7iD/Untitled?node-id=1-2&starting-point-node-id=1%3A2&t=3Gou4yObjutSfOjn-1",
  },
  {
    id: 5,
    title: "Apple Watch Landing Page",
    description: "Sleek landing page for Apple Watch with modern aesthetics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20Page-Oo2QGyzSrVArOs3gwtdovFj68uymFG.png",
    link: "https://www.figma.com/proto/OJsuEtLj4I9FZ0CXLku3n5/Apple-Watch-Landing-Page?node-id=1-2&starting-point-node-id=1%3A2&t=0kfpc59j9qgtBqbq-1",
  },
  {
    id: 6,
    title: "Grocery App",
    description: "Simple and effective grocery delivery app interface",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grocery%20App.JPG-1spe3HYs3WHMQYSWwOw0pd1owMJR64.jpeg",
    link: "#",
  },
]

// 3D Cube Component
function Cube({ selectedFace, setSelectedFace, isHovered }) {
  const meshRef = useRef<Mesh>(null)

  // Load textures for each face of the cube
  const textures = useTexture([
    projects[0].image,
    projects[1].image,
    projects[2].image,
    projects[3].image,
    projects[4].image,
    projects[5].image,
  ])

  // Rotate the cube automatically unless hovered
  useFrame((state, delta) => {
    if (meshRef.current && !isHovered) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh
      ref={meshRef}
      onClick={(e) => {
        e.stopPropagation()
        setSelectedFace((e.face?.materialIndex || 0) % 6)
      }}
    >
      <boxGeometry args={[3, 3, 3]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          map={texture}
          transparent={true}
          opacity={selectedFace === null || selectedFace === index ? 1 : 0.5}
          attachArray="material"
        />
      ))}
    </mesh>
  )
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="aspect-[4/5] relative overflow-hidden rounded-xl border border-purple-500/20">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <p className="text-white/80 mt-2">{project.description}</p>
          <Link
            href={project.link}
            target="_blank"
            className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-purple-600/80 backdrop-blur-sm text-white rounded-md hover:bg-purple-500 transition-colors"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-white text-lg font-bold">{project.title}</h3>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [selectedFace, setSelectedFace] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Handle project selection from cube
  useEffect(() => {
    if (selectedFace !== null) {
      setSelectedProject(projects[selectedFace])
    } else {
      setSelectedProject(null)
    }
  }, [selectedFace])

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-[#150b20] to-[#1f0f35]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A collection of UI/UX and graphic design projects I've worked on. Each project showcases my skills in
            wireframing, prototyping, and creating intuitive user experiences.
          </p>
        </motion.div>

        {/* 3D Cube Showcase */}
        <div className="relative h-[500px] mb-20">
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              onPointerOver={() => setIsHovered(true)}
              onPointerOut={() => setIsHovered(false)}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Cube selectedFace={selectedFace} setSelectedFace={setSelectedFace} isHovered={isHovered} />
            </Canvas>
          </motion.div>

          {/* Project Details Card */}
          {selectedProject && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/30 text-white z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <p className="text-white/70 mt-2">{selectedProject.description}</p>
                </div>
                <button onClick={() => setSelectedFace(null)} className="text-white/70 hover:text-white">
                  ✕
                </button>
              </div>
              <div className="mt-4">
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mb-20">
          <Link
            href="#project-grid"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors"
          >
            View All Projects
          </Link>
        </div>

        {/* Project Grid */}
        <div id="project-grid">
          <motion.h3
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mobile App Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
