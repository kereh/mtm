"use client"

import dynamic from "next/dynamic"
import Hero from '@/components/hero/hero-main'

const ContactDynamic = dynamic(() => import("@/components/contact/contact-main"), { ssr: true })
const GalleryDynamic = dynamic(() => import("@/components/gallery/gallery-main"), { ssr: true })
const ProductsDynamic = dynamic(() => import("@/components/products/products-main"), { ssr: true })

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Hero />
      <ProductsDynamic />
      <GalleryDynamic />
      <ContactDynamic />
    </div>
  )
}
