"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface IProductCard {
  title: string
  img: string
  link: string
}

export default function ProductCard({ title, img, link }: IProductCard) {

  const { push } = useRouter()

  return (
    <div className="group relative overflow-hidden rounded-md cursor-pointer" onClick={() => push(link)}>
      <AspectRatio ratio={4 / 5}>
        <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
        <Image
          src={img}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover transition-transform group-hover:scale-105"
          priority
        />
      </AspectRatio>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h3 className="text-3xl font-medium capitalize text-slate-100 md:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  )
}