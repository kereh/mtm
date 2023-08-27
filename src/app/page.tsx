import Contact from '@/components/contact/contact-main'
import Hero from '@/components/hero/hero-main'
import Products from '@/components/products/products-main'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Products />
      <Contact />
    </div>
  )
}
