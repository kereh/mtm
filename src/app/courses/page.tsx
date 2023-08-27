import type { Metadata } from 'next'
import CourseMain from "@/components/courses/course-main"

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Manguni Teknik Multimedia",
    description: "kami adalah tim kreatif yang berdedikasi tinggi dalam menghadirkan visual dan pengalaman digital yang luar biasa. Sebagai perusahaan yang berfokus pada videography, fotografi, dan pengembangan web, kami menggabungkan keahlian teknis dengan imajinasi artistik untuk menciptakan konten yang menarik dan solusi digital yang inovatif.",
    images: [`https://mtm-kereh.vercel.app/og.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function page() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl flex flex-col gap-6 p-6">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-extrabold">LPK Aurora</h1>
          <p className="text-muted-foreground">We also have several courses.
            Select your favorite course below.</p>
        </div>
        <CourseMain />
      </div>
    </div>
  )
}