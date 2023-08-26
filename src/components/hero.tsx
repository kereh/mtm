"use client"

import { Button } from "@/components/ui/button"
import { icons } from "@/components/icons"
import { useRouter } from "next/navigation"
import Embed from "@/components/embed"

export default function Hero() {

  const { push } = useRouter()

  return (
    <div className="w-full md:pt-28 grid place-content-center">
      <div className="max-w-6xl w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-center">
          <Embed />
          <div className="space-y-4">
            <h1 className="text-2xl font-extrabold">Manguni Teknik Multimedia</h1>
            <p className="leading-relaxed text-muted-foreground">
              Discover the Art of Capturing Moments with Our Photography and Videography Services. Elevate Your Online Presence with Expert Web Development. Explore Our Portfolio and Unlock Your Vision Today!
            </p>
            <Button variant="secondary" className="mt-7 flex flex-row items-center gap-x-3" onClick={() => push("/about")}>
              <icons.bookOpen className="w-4 h-4" />
              <span>Read More</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}