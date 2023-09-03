import type { Metadata } from 'next'
import { jetbrain } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { site } from '@/config/site'
import ThemeProvider from '@/components/theme-provider'
import Header from '@/components/headers/header-main'
import Footer from '@/components/footer/footer-main'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.site),
  title: {
    default: site.title,
    template: `${site.title} - %s`,
  },
  description: site.description,
  keywords: site.keywords.map((keyword) => {
    return keyword
  }),
  authors: site.authors.map((author) => {
    return {
      name: author.name,
      url: author.url
    }
  }),
  creator: site.authors[0].name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.site,
    title: site.title,
    description: site.description,
    images: site.images.map((img) => {
      return img
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: site.images.map((img) => {
      return img
    }),
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("--font-jetbrain", jetbrain.variable)}>
        <ThemeProvider defaultTheme='dark' attribute='class'>
          <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
