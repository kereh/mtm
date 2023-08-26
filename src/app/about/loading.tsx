import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <div className="w-full md:pt-20 p-6 flex justify-center">
      <div className="max-w-2xl w-full space-y-3">
        <Skeleton className="w-[25vh] h-4" />
        <Skeleton className="w-[45vh] h-4" />
      </div>
    </div>
  )
}