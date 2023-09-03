"use client"

import dynamic from "next/dynamic"
import Hero from '@/components/hero/hero-main'

const ContactDynamic = dynamic(() => import("@/components/contact/contact-main"))
const GalleryDynamic = dynamic(() => import("@/components/gallery/gallery-main"))
const ProductsDynamic = dynamic(() => import("@/components/products/products-main"))

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
