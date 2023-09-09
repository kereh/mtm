import { IGalleryImages } from "@/types"
import Link from "next/link"
import Image from "next/image"

export default function GalleryImage({ url, urlto, sizes }: IGalleryImages) {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <Link href={urlto}>
        <div className="absolute inset-0 z-10 lg:bg-black/60 transition-colors group-hover:bg-transparent rounded-lg" />
        <Image
          className="mx-auto w-full h-auto object-cover aspect-auto transition-transform group-hover:scale-105"
          src={url}
          alt={urlto}
          width={500}
          height={500}
          sizes={sizes}
          priority
        />
      </Link>
    </div>
  )
}