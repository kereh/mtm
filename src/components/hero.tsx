import { Button } from "@/components/ui/button"
import Link from "next/link"
import Embed from "@/components/embed"

export default function Hero() {
  return (
    <div className="w-full pt-12 md:pt-28 grid place-content-center">
      <div className="max-w-6xl w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-center">
          <Embed />
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Manguni Teknik Multimedia</h1>
            <p className="leading-relaxed">
              Discover the Art of Capturing Moments with Our Photography and Videography Services. Elevate Your Online Presence with Expert Web Development. Explore Our Portfolio and Unlock Your Vision Today!
            </p>
            <Link href="/about">
              <Button variant="secondary" className="mt-7">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}