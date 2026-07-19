import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://memawsflower.com"),
  title: "Me Maw's Cannabis Flower — Homegrown Craft Cannabis",
  description: "Me Maw's homegrown craft cannabis. Psychedelic vibes, farm-fresh flower, grown with love by your favorite hippie grandparents. Premium strains, craft quality, groovy good times.",
  keywords: ["cannabis", "craft cannabis", "homegrown", "dispensary", "cannabis flower", "Me Maw's"],
  openGraph: {
    title: "Me Maw's Cannabis Flower",
    description: "Homegrown craft cannabis with psychedelic vibes. Farm-fresh flower grown with love.",
    images: ["/logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-maw-dark text-maw-text antialiased">
        {children}
      </body>
    </html>
  )
}
