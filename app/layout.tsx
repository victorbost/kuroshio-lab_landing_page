import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kuroshio-Lab | Marine Biology Tools Suite",
  description:
    "Kuroshio-Lab: Open-source cloud-native platform for marine data intelligence, research, and ecosystem monitoring. Built with Next.js, Django, and AWS.",
  icons: {
    icon: [
      {
        url: "/kuroshio-logo.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/kuroshio-logo.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/kuroshio-logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/kuroshio-logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
