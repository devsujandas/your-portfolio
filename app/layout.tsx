import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProviderWrapper } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Sujan",
  description: "Creative UI/UX Designer & Product Designer - Crafting beautiful digital experiences",
  authors: [{ name: "Sujan Das", url: "https://github.com/devsujandas" }],
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Mobile input zoom fix */}
        <style>{`
          * {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          input, textarea, select {
            font-size: 16px !important;
          }
        `}</style>
      </head>

      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        <ThemeProviderWrapper>
          <div className="flex min-h-screen">
            <div className="hidden md:block md:w-20 flex-shrink-0" />
            <main className="flex-1 flex flex-col">{children}</main>
          </div>
        </ThemeProviderWrapper>

        <Analytics />
      </body>
    </html>
  )
}
