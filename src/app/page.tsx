import Contact from '@/components/contact/contact-main'
import Gallery from '@/components/gallery/gallery-main'
import Hero from '@/components/hero/hero-main'
import Products from '@/components/products/products-main'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Products />
      <Gallery />
      <Contact />
    </div>
  )
}
