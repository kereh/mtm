"use client"

import { Button } from "@/components/ui/button"
import { icons } from "@/components/icons"
import { useRouter } from "next/navigation"

export default function Hero() {

  const { push } = useRouter()

  return (
    <div className="w-full grid place-content-center h-[65vh] md:h-[90vh]">
      <div className="max-w-2xl w-full p-6">
        <div className="grid grid-cols-1 justify-center items-center">
          <div className="space-y-8 md:space-y-4 md:text-center">
            <h1 className="font-extrabold text-3xl md:text-4xl">Manguni Teknik Multimedia</h1>
            <p className="leading-relaxed text-muted-foreground">
              Discover the Art of Capturing Moments with Our Photography and Videography Services. Elevate Your Online Presence with Expert Web Development. Explore Our Portfolio and Unlock Your Vision Today!
            </p>
            <div className="flex flex-row md:justify-center items-center gap-4">
              <Button
                variant="default"
                onClick={() =>
                  push("https://api.whatsapp.com/send/?phone=6281248336870&type=phone_number&app_absent=0/"
                  )}
              >
                <div className="flex flex-row items-center gap-2">
                  <icons.laugh className="w-4 h-4" />
                  <span>Hire Us!</span>
                </div>
              </Button>
              <Button
                variant="secondary"
                onClick={() => push("/about")}
              >
                <div className="flex flex-row items-center gap-2">
                  <icons.bookOpen className="w-4 h-4" />
                  <span>Read More</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}