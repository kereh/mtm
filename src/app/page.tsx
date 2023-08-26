import Contact from '@/components/contact/contact'
import Hero from '@/components/hero'
import Products from '@/components/products/products'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Products />
      <Contact />
    </div>
  )
}
