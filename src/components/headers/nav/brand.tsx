import Link from "next/link"

export default function Brand() {
  return (
    <div className="flex flex-row items-center">
      <Link href="/">
        <h1 className="text-2xl font-semibold">MTM</h1>
      </Link>
    </div>
  )
}