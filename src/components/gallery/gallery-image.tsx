import { IGalleryImages } from "@/types"
import Link from "next/link"
import Image from "next/image"

export default function GalleryImage({ url, urlto }: IGalleryImages) {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <Link href={urlto}>
        <div className="absolute inset-0 z-10 lg:bg-black/60 transition-colors group-hover:bg-transparent rounded-lg" />
        <Image
          src={url}
          alt={urlto}
          width={550}
          height={550}
          priority
          className="object-cover transition-transform group-hover:scale-105"
        />
      </Link>
    </div>
  )
}