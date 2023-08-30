import { ICourse } from "@/types"
import { currencyFormat } from "@/lib/currency"
import CourseSheet from "@/components/courses/course-sheet"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CourseCard({
  name,
  description,
  amount,
  per,
  benefits
}: ICourse) {

  const formattedAmount = currencyFormat({
    amount: amount,
    code: "IDR"
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-3">
          <h1 className="font-semibold">Main benefits from this courses</h1>
          <ul className="flex flex-col gap-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-muted-foreground flex flex-row items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                {benefit.benefit}
              </li>
            ))}
          </ul>
        </div>
        {/* harga */}
        <div className="w-full">
          <h1 className="font-semibold">Price</h1>
          <h2 className="text-muted-foreground">{formattedAmount} / {per}</h2>
        </div>
      </CardContent>
      <CardFooter className="w-full grid grid-cols-1 items-center gap-4">
        <CourseSheet
          formattedAmount={formattedAmount}
          name={name}
          per={per}
        />
      </CardFooter>
    </Card>

  )
}