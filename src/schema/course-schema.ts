import { z } from "zod"

export const courseSchema = z.object({
  customer_name: z.string()
    .min(2, {
      message: "Customer name is too short"
    })
    .max(50, {
      message: "Customer name maximum is 50 characters"
    }),
  customer_address: z.string()
    .min(2, {
      message: "Customer address is too short"
    })
    .max(100, {
      message: "Customer address maximum is 100 characters"
    }),
  phone_number: z.string()
    .min(2, {
      message: "Please, fill this form correctly"
    })
    .max(20, {
      message: "Max numbers 20"
    })
})