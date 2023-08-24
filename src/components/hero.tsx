import { AspectRatio } from "./ui/aspect-ratio"

export default function Hero() {
  return (
    <div className="w-full h-screen backdrop-brightness-50">
      <AspectRatio ration={16 / 9}>
        <video src="/video/video.mp4" className="-z-10 w-full h-screen backdrop-brightness-50" autoPlay loop muted />
      </AspectRatio>
    </div>
  )
}