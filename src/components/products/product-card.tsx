"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface IProductCard {
  title: string
  img: string
}

export default function ProductCard({ title, img }: IProductCard) {

  return (
    <div className="group relative overflow-hidden rounded-md">
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