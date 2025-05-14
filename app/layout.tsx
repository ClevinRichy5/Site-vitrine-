import type React from "react"
import "./globals.css"
import { Open_Sans } from "next/font/google"

const open_sans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Camlait.SA",
  description:
    "Discover the richness of nature with our premium quality milk products, crafted with care from farm to table."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={open_sans.className}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'