"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Heart } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { value: "1.6+", label: "Years of Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "8+", label: "Design Awards" },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate about creating <span className="gradient-text">human-centered</span> designs
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I combine creativity with strategic thinking to design digital experiences that are both beautiful and
            functional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-lg">
              Hello! I'm Nishtha Deep, a UI/UX designer with a passion for creating intuitive and engaging digital
              experiences. With a background in both design and user psychology, I bring a holistic approach to every
              project.
            </p>

            <p className="text-lg">
              I believe that great design is not just about aesthetics, but about solving real problems for real people.
              My process involves deep user research, thoughtful wireframing, and iterative prototyping to ensure that
              the final product not only looks beautiful but also works beautifully.
            </p>

            <p className="text-lg">
              When I'm not designing, you can find me exploring new design trends, attending UX workshops, or sketching
              ideas for my next project. I'm always eager to learn and grow as a designer.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">My Design Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>User-centered approach in every decision</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Simplicity and clarity over complexity</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Accessibility and inclusivity by default</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Experience & Education</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                Work Experience
              </h4>

              <div className="space-y-6">

                <div>
                <div className="flex justify-between mb-1">
                  <h5 className="font-semibold">UI/UX Designer</h5>
                  <span className="text-sm text-foreground/70">May 2025 – Present</span>
                  </div>
                  <p className="text-primary mb-1">Maxtra Technologies</p>
                  <p className="text-sm text-foreground/70">
                   Responsible for designing intuitive and user-centric web and mobile interfaces that prioritize usability and aesthetics.
                   Collaborate closely with cross-functional teams—including developers, product managers, and marketing specialists—to 
                   ensure cohesive and seamless digital experiences that align with user needs and business goals.
                 </p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <h5 className="font-semibold">UI/UX Designer</h5>
                    <span className="text-sm text-foreground/70">Nov 2024 - Apr 2025</span>
                  </div>
                  <p className="text-primary mb-1">Vegetablez</p>
                  <p className="text-sm text-foreground/70">
                    Led the end-to-end UI/UX design process for the application, ensuring an intuitive and seamless user
                    experience. Created interactive prototypes and user flows to enhance design communication and
                    improve usability. Conducted A/B testing with pilot customers, gathering insights to refine and
                    optimize product features. Developed the front-end implementation, ensuring smooth design-to-code
                    translation for a functional product.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h5 className="font-semibold">UI/UX & Graphic Design Intern</h5>
                    <span className="text-sm text-foreground/70">May 2022 - August 2022</span>
                  </div>
                  <p className="text-primary mb-1">Successthinks</p>
                  <p className="text-sm text-foreground/70">
                    Designed and implemented key website features, including certificates, UI enhancements, and an
                    affiliate program. Worked on complex calculations, backend integrations, and automated email
                    connections to improve functionality. Collaborated with the execution team to refine the overall
                    user experience and interface design. Utilized Figma, Canva, and data-driven analysis to enhance
                    design performance and optimize usability.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-secondary" />
                Education
              </h4>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h5 className="font-semibold">Bachelor of Technology (Computer Science Engineering)</h5>
                    <span className="text-sm text-foreground/70">2019 - 2023</span>
                  </div>
                  <p className="text-secondary mb-1">GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</p>
                  <p className="text-sm text-foreground/70">
                    Studied computer science fundamentals, software development, and design principles with a focus on
                    user experience and interface design.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h5 className="font-semibold">Class 12th (CBSE)</h5>
                    <span className="text-sm text-foreground/70">2018 - 2019</span>
                  </div>
                  <p className="text-secondary mb-1">Vivekanand Senior Sec. International School</p>
                  <p className="text-sm text-foreground/70">
                    Participated in various design competitions and won accolades for creative projects. Developed a
                    strong foundation in visual arts and digital design.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h5 className="font-semibold">Class 10th (CBSE)</h5>
                    <span className="text-sm text-foreground/70">2016 - 2017</span>
                  </div>
                  <p className="text-secondary mb-1">Bhai Parmanand Vidya Mandir School</p>
                  <p className="text-sm text-foreground/70">
                    Actively participated in school design competitions and creative events, showcasing early talent in
                    visual communication and artistic expression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
