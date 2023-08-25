import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="bg-background/80 w-full h-screen absolute" />
      <video className="absolute w-full h-screen -z-10 top-0 left-0 bg-blend-overlay object-cover bg-center" autoPlay loop muted>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <div className="max-w-lg w-full space-y-4 z-10 text-background dark:text-foreground p-4 text-center">
        <h1 className="text-3xl font-bold">Manguni Teknik Multimedia</h1>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, atque adipisci possimus maxime reprehenderit ad tempora earum saepe reiciendis dolorum.
        </p>
        <Link href="/about">
          <Button className="text-foreground mt-4" variant="secondary">About Us</Button>
        </Link>
      </div>
    </div>
  )
}