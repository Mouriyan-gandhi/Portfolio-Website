"use client"

import { motion } from "framer-motion"
import { Figma, Palette, Code, FileSpreadsheet, Brush, Rocket, Smartphone } from "lucide-react"

export default function Skills() {
  const toolsData = [
    { name: "Figma", icon: <Figma className="h-6 w-6" /> },
    { name: "Canva", icon: <Palette className="h-6 w-6" /> },
    { name: "Adobe XD", icon: <Brush className="h-6 w-6" /> },
    { name: "Photoshop", icon: <Palette className="h-6 w-6" /> },
    { name: "InDesign", icon: <Palette className="h-6 w-6" /> },
    { name: "HTML", icon: <Code className="h-6 w-6" /> },
    { name: "CSS", icon: <Code className="h-6 w-6" /> },
    { name: "MS Excel", icon: <FileSpreadsheet className="h-6 w-6" /> },
  ]

  const servicesData = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that solve real problems and delight users.",
      icon: <Brush className="h-6 w-6" />,
    },
    {
      title: "Web Development",
      description: "Building responsive and accessible websites with modern technologies and best practices.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Mobile App Design",
      description: "Designing mobile experiences that are both functional and beautiful across all devices.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Prototyping",
      description: "Creating interactive prototypes to test and validate design concepts before development.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-tertiary/10 text-tertiary font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">expertise</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A showcase of my technical skills and design expertise, highlighting my proficiency in various tools and
            technologies.
          </p>
        </motion.div>

        {/* Tools I Use */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Tools I Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {toolsData.map((tool, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-4 flex flex-col items-center justify-center text-center h-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-2">{tool.icon}</div>
                <h3 className="text-sm font-medium">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services I Offer */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
