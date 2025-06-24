import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryan Sharma - Portfolio",
  description: "Software Engineer | Web Developer | Problem Solver",
  keywords: ["Aryan Sharma", "Software Engineer", "Web Developer", "Full Stack", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Aryan Sharma" }],
  creator: "Aryan Sharma",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Aryan Sharma - Portfolio",
    description: "Software Engineer | Web Developer | Problem Solver",
    siteName: "Aryan Sharma Portfolio",
    images: [
      {
        url: "/favicon.jpg",
        width: 400,
        height: 400,
        alt: "Aryan Sharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Sharma - Portfolio",
    description: "Software Engineer | Web Developer | Problem Solver",
    images: ["/favicon.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
