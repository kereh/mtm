import { products } from "@/lib/product-items"
import ProductCard from "@/components/products/product-card"

export default function Products() {
  return (
    <div className="w-full my-32 md:my-40 flex justify-center">
      <div className="max-w-6xl w-full p-6 flex flex-col justify-center">
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold underline underline-offset-8">Products</h1>
          <p className="leading-relaxed">
            Explore our products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          {products.map((product) => (
            <ProductCard
              title={product.title}
              img={product.img}
              key={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}