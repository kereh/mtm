import type { Metadata } from 'next'
import { jetbrain } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import ThemeProvider from '@/components/theme-provider'
import Header from '@/components/headers/header-main'
import Footer from '@/components/footer/footer-main'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: "Manguni Teknik Multimedia",
    template: "Manguni Teknik Multimedia - %s"
  },
  description: 'MTM - Manguni Teknik Multimedia',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
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
