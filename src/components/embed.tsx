import { Suspense } from "react"
import EmbedSkeleton from "@/components/embed-skeleton"

export default function Embed() {
  return (
    <div className="w-full flex flex-col items-center gap-y-3">
      <Suspense fallback={<EmbedSkeleton />}>
        <iframe
          className="w-full h-64 shadow-xl"
          src="https://www.youtube.com/embed/SumIfPoOXnM?si=1_ExJ8_QN5eqrrx9"
          title="Manguni Teknik Multimedia"
        />
      </Suspense>
    </div>
  )
}