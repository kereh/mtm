import Link from "next/link"

export default function Brand() {
  return (
    <div className="flex flex-row items-center">
      <Link href="/">
        <h1 className="text-xl md:text-center font-semibold duration-300">
          MTM <span className="block font-normal text-sm text-muted-foreground">Manguni Teknik Multimedia</span>
        </h1>
      </Link>
    </div>
  )
}