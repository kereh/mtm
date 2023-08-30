import type { Metadata } from 'next'
import { jetbrain } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import ThemeProvider from '@/components/theme-provider'
import Header from '@/components/headers/header-main'
import Footer from '@/components/footer/footer-main'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://mtm-kereh.vercel.app/"),
  title: {
    default: "Manguni Teknik Multimedia",
    template: `%s - Manguni Teknik Multimedia`,
  },
  description: "kami adalah tim kreatif yang berdedikasi tinggi dalam menghadirkan visual dan pengalaman digital yang luar biasa. Sebagai perusahaan yang berfokus pada videography, fotografi, dan pengembangan web, kami menggabungkan keahlian teknis dengan imajinasi artistik untuk menciptakan konten yang menarik dan solusi digital yang inovatif.",
  keywords: [
    "Photography",
    "Videography",
    "Web Developer",
    "Manguni",
    "Multimedia",
    "Web Developer",
  ],
  authors: [
    {
      name: "kereh",
      url: "https://github.com/kereh",
    },
  ],
  creator: "kereh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mtm-kereh.vercel.app/",
    title: "Manguni Teknik Multimedia",
    description: "kami adalah tim kreatif yang berdedikasi tinggi dalam menghadirkan visual dan pengalaman digital yang luar biasa. Sebagai perusahaan yang berfokus pada videography, fotografi, dan pengembangan web, kami menggabungkan keahlian teknis dengan imajinasi artistik untuk menciptakan konten yang menarik dan solusi digital yang inovatif.",
    siteName: "MTM",
    images: [`/img/og/mtm.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manguni Teknik Multimedia",
    description: "kami adalah tim kreatif yang berdedikasi tinggi dalam menghadirkan visual dan pengalaman digital yang luar biasa. Sebagai perusahaan yang berfokus pada videography, fotografi, dan pengembangan web, kami menggabungkan keahlian teknis dengan imajinasi artistik untuk menciptakan konten yang menarik dan solusi digital yang inovatif.",
    images: [`/img/og/mtm.png`],
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
