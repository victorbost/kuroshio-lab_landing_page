import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Waves } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1B2A] via-[#1E2D3A] to-[#0D1B2A]">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#0D1B2A]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#21C6E3] to-[#0077BA]">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kuroshio-Lab</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-[#D7DFE2] hover:text-[#21C6E3] transition-colors">
                Home
              </Link>
              <Link href="https://github.com/kuroshio-lab">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#21C6E3] text-[#21C6E3] hover:bg-[#21C6E3] hover:text-white bg-transparent"
                  >
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/underwater-ocean-waves-abstract-dark-blue.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-8 text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            About Kuroshio-Lab
          </h1>

          <div className="mx-auto max-w-3xl space-y-6 text-pretty text-lg leading-relaxed text-[#D7DFE2]">
            <p>
              <strong className="text-white">Kuroshio-Lab</strong> is an open-source initiative dedicated to the
              preservation, understanding, and long-term monitoring of marine ecosystems.
              It is conceived as a digital laboratory—where data, tools, and knowledge
              circulate freely, much like the ocean currents it is named after.
            </p>

            <p>
              The project brings together modern software engineering, data science,
              and scientific rigor to build transparent, auditable, and reusable systems
              for marine biology and ocean research. Its purpose is not to replace existing
              research efforts, but to support and amplify them through accessible technology.
            </p>

            <p>
              <strong className="text-white">Open-source is a foundational principle. </strong>
              All code, data models, and architectural decisions are publicly accessible.
              Kuroshio-Lab is designed to be explored, audited, forked, and self-hosted—
              without proprietary lock-in or commercial dependency.
            </p>

            <p>
              The platform is structured as a modular ecosystem of applications addressing
              species observation, oceanographic data analysis, reef health assessment,
              knowledge dissemination, and environmental monitoring. Each component evolves
              independently while contributing to a coherent and resilient whole.
            </p>

            <p>
              At its core, Kuroshio-Lab follows a simple technical philosophy:
              <em className="text-white"> critical data deserves clean architecture</em>.
              Systems are built for clarity, reliability, and long-term maintainability,
              treating software as scientific infrastructure rather than disposable tooling.
            </p>

            <p>
              Kuroshio-Lab is a living project. It invites researchers, engineers,
              institutions, and independent contributors to participate, adapt, and extend
              the platform—because meaningful ocean preservation is a shared, open endeavor.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="bg-[#0077BA] hover:bg-[#005A8D] text-white">
                Back to Homepage
              </Button>
            </Link>
            <Link href="https://github.com/kuroshio-lab">
              <Button
                size="lg"
                variant="outline"
                className="border-[#21C6E3] text-[#21C6E3] hover:bg-[#21C6E3] hover:text-white bg-transparent"
              >
                Read the Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#21C6E3] to-[#0077BA]">
                <Waves className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm text-[#A7B2B7]">© 2025 Kuroshio-Lab. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-[#A7B2B7] hover:text-[#21C6E3] transition-colors">
                Home
              </Link>
              <Link href="https://github.com/kuroshio-lab" className="text-sm text-[#A7B2B7] hover:text-[#21C6E3] transition-colors">
                Documentation
              </Link>
              <Link href="/contact" className="text-sm text-[#A7B2B7] hover:text-[#21C6E3] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
