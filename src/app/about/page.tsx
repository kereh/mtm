import { Metadata } from "next"
import Image from "next/image"

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
    <div className="w-full grid place-content-center md:py-16 p-6">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/img/about.svg"
            alt="About us MTM"
            className="relative w-64 h-64 mx-auto border rounded-xl p-4"
            width={100}
            height={100}
            quality={75}
            priority
          />
          <div className="max-w-2xl w-full">
            <div className="mb-5 space-y-3">
              <h1 className="text-2xl font-extrabold">About Us</h1>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              We are a creative team dedicated to delivering great visuals and digital experiences. As a company focused on videography, photography and web development, we combine technical expertise with artistic imagination to create engaging content and innovative digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}