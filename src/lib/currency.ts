import { ICurrency } from "@/types"

export function currencyFormat({ amount, code }: ICurrency) {

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: code
  }).format(amount)

  return formattedAmount
}