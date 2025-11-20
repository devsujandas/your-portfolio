import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProviderWrapper } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Portfolio - Sujan",
  description:
    "Creative UI/UX & Product Designer – crafting beautiful digital experiences with modern interfaces.",
  authors: [
    {
      name: "Sujan Das",
      url: "https://github.com/devsujandas",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <style>{`
          * {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          input, textarea, select {
            font-size: 16px !important;
          }
          input:focus, textarea:focus, select:focus {
            font-size: 16px !important;
          }
        `}</style>
      </head>

      <body className="font-sans antialiased">
        <ThemeProviderWrapper>
          <div className="flex min-h-screen">
            {/* Left spacer for sidebar / navbar on desktop */}
            <div className="hidden md:block md:w-20 md:flex-shrink-0" />
            {/* Main content */}
            <div className="flex-1 flex flex-col">{children}</div>
          </div>
        </ThemeProviderWrapper>
        <Analytics />
      </body>
    </html>
  )
}
