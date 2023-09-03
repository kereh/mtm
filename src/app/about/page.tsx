import Image from "next/image"

export default function page() {
  return (
    <div className="w-full grid place-content-center md:py-16 p-6">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/img/illustration/about.svg"
            alt="About us MTM"
            className="relative w-64 h-64 mx-auto"
            width={100}
            height={100}
            quality={75}
            priority
          />
          <div className="max-w-2xl w-full">
            <div className="mb-5 space-y-3">
              <h1 className="text-2xl font-extrabold">About Us</h1>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              We are a creative team dedicated to delivering great visuals and digital experiences. As a company focused on videography, photography and web development, we combine technical expertise with artistic imagination to create engaging content and innovative digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}