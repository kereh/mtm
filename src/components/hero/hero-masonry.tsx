import Image from "next/image"

export const hero_images: Array<{
  link: string
}> = [
    { link: "/img/hero/hero_1.jpg" },
    { link: "/img/hero/hero_2.jpg" },
    { link: "/img/hero/hero_3.jpg" },
  ]

export default function HeroMasonry() {
  return (
    <div className="columns-1 md:columns-2 space-y-4 mx-auto">
      {hero_images.map((img) => (
        <Image
          src={img.link}
          alt="gambar"
          className="w-24 h-24 md:w-auto md:h-auto rounded-lg hover:scale-105"
          width={500}
          height={500}
          priority
        />
      ))}
    </div>
  )
}