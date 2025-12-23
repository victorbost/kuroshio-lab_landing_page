import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { Waves, Database, BarChart3, MapPin, FileText } from "lucide-react"

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Marine Species Observation Tracker",
      description:
        "Build core CRUD functionality for logging species sightings on an interactive map, including photo storage (S3) and initial API integration (GBIF/OBIS).",
      icon: Database,
      status: "coming-soon" as const,
      color: "eco",
    },
    {
      id: 2,
      title: "Ocean Data Dashboard",
      description:
        "Focus on data pipeline design and visualization. The system uses Celery/AWS Lambda for periodic, asynchronous ingestion of real-time ocean data (e.g., NOAA, Copernicus) into PostgreSQL. The Next.js frontend displays this information via dynamic, interactive charts (Recharts/Plotly). Deployment is Dockerized and managed via a CI/CD pipeline to AWS ECS/Elastic Beanstalk.",
      icon: BarChart3,
      status: "coming-soon" as const,
      color: "primary",
    },
    {
      id: 3,
      title: "Coral Reef Health Index",
      description:
        "Develop an application that integrates a small Python ML model (regression/classification) to predict coral bleaching risk. The process involves building an ETL pipeline to fetch and store satellite sea surface temperature data, deploying the model within the Django API, and visualizing the prediction scores via a dedicated Next.js dashboard.",
      icon: Waves,
      status: "coming-soon" as const,
      color: "coral",
    },
    {
      id: 4,
      title: "Marine Life Encyclopedia with Recommendation Engine",
      description:
        "Create a rich, educational CRUD application focused on marine species. Key features include API integration for external data enrichment (WoRMS) and advanced search capabilities, including fuzzy search. An optional goal is to prototype a recommendation engine based on taxonomic similarity. The final application will be hosted on AWS ECS via Docker.",
      icon: MapPin,
      status: "coming-soon" as const,
      color: "primary",
    },
    {
      id: 5,
      title: "Marine Monitoring Platform",
      description:
        "The flagship project: a unified monitoring interface aggregating high-volume data from multiple sources (NOAA, MarineTraffic, Global Fishing Watch). The backend utilizes a scalable Django GraphQL API supported by a resilient ingestion pipeline (Celery/Lambda). The platform is a production-level deployment on AWS ECS with comprehensive CloudWatch monitoring and complex map-layer visualization.",
      icon: FileText,
      status: "coming-soon" as const,
      color: "eco",
    },
  ]

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
              <Link href="/about" className="text-sm text-[#D7DFE2] hover:text-[#21C6E3] transition-colors">
                About
              </Link>
              <Link href="https://github.com/victorbost/kuroshio-lab_landing_page">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/underwater-ocean-waves-abstract-dark-blue.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <Badge className="mb-6 border-[#21C6E3] bg-[#21C6E3]/10 text-[#21C6E3]">
              5-Project Marine Biology Suite
            </Badge>
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {"Marine Data Intelligence"}
              <span className="block bg-gradient-to-r from-[#21C6E3] via-[#0077BA] to-[#003A63] bg-clip-text text-transparent">
                {"Built for Researchers"}
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#D7DFE2]">
              A comprehensive suite of cloud-native web applications for marine data collection, visualization, and
              analysis. Powered by Next.js, Django, and AWS infrastructure with seamless integration of multiple APIs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0077BA] hover:bg-[#005A8D] text-white">
                Explore Tools
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#D7DFE2] text-[#D7DFE2] hover:bg-white/5 bg-transparent"
              >
                Read Manifesto
              </Button>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#30C39E]" />
              <span className="text-sm text-[#D7DFE2]">Next.js</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#30C39E]" />
              <span className="text-sm text-[#D7DFE2]">Django</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#30C39E]" />
              <span className="text-sm text-[#D7DFE2]">AWS</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#30C39E]" />
              <span className="text-sm text-[#D7DFE2]">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{"Five Specialized Tools"}</h2>
            <p className="mx-auto max-w-2xl text-pretty text-[#A7B2B7]">
              Each application addresses a critical need in marine research, from data ingestion to publication-ready
              reporting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0077BA]/10 to-[#003A63]/10 p-8 backdrop-blur-sm lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">{"Cloud-Native Architecture"}</h3>
                <p className="mb-6 leading-relaxed text-[#D7DFE2]">
                  Built on AWS infrastructure with Route 53 subdomain routing, each tool operates independently while
                  sharing a unified data pipeline. Leveraging EC2, S3, Lambda, and ECS for scalability and resilience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#30C39E]" />
                    <span className="text-sm text-[#D7DFE2]">Decoupled frontend and backend architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#30C39E]" />
                    <span className="text-sm text-[#D7DFE2]">
                      Real-time API integration with major marine databases
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#30C39E]" />
                    <span className="text-sm text-[#D7DFE2]">Automated data validation and quality control</span>
                  </li>
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-3xl font-bold text-[#21C6E3]">5</div>
                  <div className="text-sm text-[#A7B2B7]">Web Applications</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-3xl font-bold text-[#21C6E3]">3</div>
                  <div className="text-sm text-[#A7B2B7]">Data Source APIs</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-3xl font-bold text-[#21C6E3]">12</div>
                  <div className="text-sm text-[#A7B2B7]">Months Roadmap</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-3xl font-bold text-[#21C6E3]">100%</div>
                  <div className="text-sm text-[#A7B2B7]">Cloud Native</div>
                </div>
              </div>
            </div>
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
              <Link href="/about" className="text-sm text-[#A7B2B7] hover:text-[#21C6E3] transition-colors">
                About
              </Link>
              <Link href="https://github.com/victorbost/kuroshio-lab_landing_page" className="text-sm text-[#A7B2B7] hover:text-[#21C6E3] transition-colors">
                Documentation
              </Link>
              <Link href="mailto:admin@kuroshio-lab.com" className="text-sm text-[#A7B2B7] hover:text-[#21C6E3] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
