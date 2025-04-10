import "@/styles/globals.css"

import { Metadata, Viewport } from "next"
import { Onest } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "React Query",
    "Portfolio",
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@asier_bayon",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const onest = Onest({
  subsets: ["latin"],
  // Optionally specify weights you want to use
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest", // This allows us to use it as a CSS variable
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-[#e7e7e7] text-zinc-800 antialiased dark:bg-background dark:text-zinc-200",
          onest.variable
        )}
      >
        <div className="container flex min-h-screen flex-col py-4 md:w-[45rem] md:py-8">
          {children}
          <Footer />
        </div>
        <script
          data-goatcounter="https://asierbayon.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </html>
  )
}
