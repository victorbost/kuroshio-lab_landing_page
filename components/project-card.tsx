import type { LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  icon: LucideIcon
  status: "live" | "coming-soon"
  color: "primary" | "eco" | "coral"
}

export function ProjectCard({ title, description, icon: Icon, status, color }: ProjectCardProps) {
  const colorClasses = {
    primary: "from-[#0077BA] to-[#003A63]",
    eco: "from-[#30C39E] to-[#0077BA]",
    coral: "from-[#FF6F59] to-[#0077BA]",
  }

  const isLive = status === "live"

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
        isLive
          ? "cursor-pointer hover:border-[#21C6E3] hover:shadow-lg hover:shadow-[#21C6E3]/20"
          : "cursor-not-allowed opacity-75",
      )}
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
              colorClasses[color],
            )}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <Badge
            variant={isLive ? "default" : "secondary"}
            className={cn(
              "text-xs",
              isLive
                ? "bg-[#30C39E]/10 border-[#30C39E] text-[#30C39E]"
                : "bg-[#A7B2B7]/10 border-[#A7B2B7] text-[#A7B2B7]",
            )}
          >
            {isLive ? "Live" : "Coming Soon"}
          </Badge>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-[#A7B2B7]">{description}</p>

        {isLive && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#21C6E3]">
            {"Launch Application"}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Hover effect gradient */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300",
          isLive && "group-hover:opacity-10",
          `bg-gradient-to-br ${colorClasses[color]}`,
        )}
      />
    </Card>
  )
}
