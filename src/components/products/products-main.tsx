import { productAndMenu } from "@/config/site"
import ProductCard from "@/components/products/product-card"

export default function Products() {
  return (
    <section id="product" className="w-full flex justify-center">
      <div className="max-w-6xl w-full p-6 flex flex-col justify-center">
        <div className="text-center mb-10">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">Products</h1>
          <p className="leading-relaxed text-muted-foreground">
            Explore our products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {productAndMenu.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              img={product.img}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}