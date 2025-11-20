import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProviderWrapper } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Sujan",
  description: "Creative UI/UX Designer & Product Designer - Crafting beautiful digital experiences",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Input zoom prevent (iOS requires 16px min) */}
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

      <body className={`font-sans antialiased`}>
        <ThemeProviderWrapper>
          <div className="flex">
            <div className="hidden md:block md:w-20 md:flex-shrink-0" />
            <div className="flex-1 flex flex-col min-h-screen">{children}</div>
          </div>
        </ThemeProviderWrapper>
        <Analytics />
      </body>
    </html>
  )
}
