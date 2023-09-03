import { galleryImagesList } from "@/config/site"
import GalleryImage from "@/components/gallery/gallery-image"

export default function Gallery() {
  return (
    <section id="gallery" className="w-full flex justify-center items-center my-16">
      <div className="md:max-w-6xl w-full p-6 space-y-6 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">Gallery</h1>
          <p className="text-muted-foreground">The picture taken is a picture of the portrait we did</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImagesList.images.map((img, index) => (
            <div className="break-inside-avoid" key={index}>
              <GalleryImage
                url={img.url}
                urlto={img.urlto}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}