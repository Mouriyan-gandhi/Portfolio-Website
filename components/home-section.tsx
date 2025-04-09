import Image from "next/image"
import Link from "next/link"

export default function HomeSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Complex gradient background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Base layer */}
        <div className="absolute inset-0 bg-[#150b20]"></div>

        {/* Top left - dark purple */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#150b20] blur-[25px]"></div>

        {/* Bottom left - blue-purple */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#281453] blur-[30px]"></div>

        {/* Center - reddish - made more prominent and centered */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#e33a30] blur-[35px] opacity-95"></div>
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-[#e33a30] blur-[20px] opacity-90"></div>

        {/* Top right - bright orange - contained to top right only */}
        <div className="absolute top-0 right-0 w-2/5 h-2/5 bg-[#F3761F] blur-[25px]"></div>

        {/* Bottom right - vibrant purple */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#6D2EA9] blur-[30px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-center mb-16">
          <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3 flex space-x-8">
            <Link href="#" className="text-white/90 hover:text-white">
              Home
            </Link>
            <Link href="#projects" className="text-white/90 hover:text-white">
              Projects
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              Testimonials
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              Case Study
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              About me
            </Link>
          </div>
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-white text-xl">👋 Hey, I'm Nishtha Deep</p>
              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                UI/UX & Graphic
                <br />
                Designer
              </h1>
            </div>

            <p className="text-white/80 max-w-lg">
              Passionate UI/UX Designer with internship experience, skilled in wireframing, prototyping, and user
              research. Proficient in Figma, Canva, Adobe Xd and focused on usability, accessibility, and creating
              intuitive designs. Eager to collaborate and enhance user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/30 text-white rounded-md hover:bg-white/10 transition"
              >
                Get in Touch
              </Link>
              <Link
                href="#projects"
                className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition"
              >
                View Projects
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <span className="text-white/80">Interned in -</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">S</span>
                </div>
                <span className="text-white">Successthinks</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Placeholder for the profile image */}
            <div className="relative w-full h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Nishtha Deep - UI/UX Designer"
                width={400}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
