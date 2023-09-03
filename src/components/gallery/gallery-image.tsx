import { IGalleryImages } from "@/types"
import Link from "next/link"
import Image from "next/image"

export default function GalleryImage({ url, urlto }: IGalleryImages) {
  return (
    <Link href={urlto}>
      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
        <div className="absolute inset-0 z-10 md:bg-black/60 transition-colors group-hover:bg-transparent" />
        <Image
          src={url}
          alt={urlto}
          quality={100}
          width={350}
          height={350}
          priority
          className="mx-auto aspect-auto object-cover transition-transform group-hover:scale-105"
        />
      </div>
    </Link>
  )
}