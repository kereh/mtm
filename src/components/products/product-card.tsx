"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useRouter } from "next/navigation"
import { IProductCard } from "@/types"
import Image from "next/image"

export default function ProductCard({ title, img, link }: IProductCard) {

  const { push } = useRouter()

  return (
    <div className="group relative overflow-hidden rounded-md cursor-pointer" onClick={() => push(link)}>
      <AspectRatio ratio={4 / 5}>
        <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
        <Image
          src={img}
          alt={title}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
          fill
          priority
        />
      </AspectRatio>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="text-3xl font-medium capitalize text-slate-100 md:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  )
}