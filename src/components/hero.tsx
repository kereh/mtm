"use client"

import { Button } from "@/components/ui/button"
import { icons } from "@/components/icons"
import { useRouter } from "next/navigation"
// import Embed from "@/components/embed"

export default function Hero() {

  const { push } = useRouter()

  return (
    <div className="w-full grid place-content-center h-[90vh]">
      <div className="max-w-2xl w-full p-6">
        <div className="flex justify-center items-center">
          <div className="space-y-4 md:text-center">
            <h1 className="text-2xl font-extrabold">Manguni Teknik Multimedia</h1>
            <p className="leading-relaxed text-muted-foreground">
              Discover the Art of Capturing Moments with Our Photography and Videography Services. Elevate Your Online Presence with Expert Web Development. Explore Our Portfolio and Unlock Your Vision Today!
            </p>
            <Button variant="secondary" onClick={() => push("/about")}>
              <div className="flex flex-row items-center gap-2">
                <icons.bookOpen className="w-4 h-4" />
                <span>Read More</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}