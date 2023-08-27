export interface Course {
  name: string
  description: string
  amount: number
  per: "week" | "month" | "year"
  benefits: Array<{ benefit: string }>
}