import { Props } from "@/types/currency-types"

export function currencyFormat({ amount, code }: Props) {

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: code
  }).format(amount)

  return formattedAmount
}