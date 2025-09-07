import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "MadarX",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  
}

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
