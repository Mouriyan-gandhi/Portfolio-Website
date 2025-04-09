import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import CaseStudies from "@/components/case-studies"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-secondary">
      <Header />
      <Hero />
      <About />
      <Projects />
      <CaseStudies />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
