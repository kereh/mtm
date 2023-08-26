import { z } from "zod"

export const contactSchema = z.object({
  fullname:
    z.string()
      .min(2, { message: "Your name is too short" })
      .max(30, { message: "Max 30 characters" }),
  email:
    z.string()
      .email({ message: "Please insert a valid email" }),
  phone:
    z.number()
      .max(20, { message: "Max 20 characters" }),
  address:
    z.string()
      .max(50, { message: "Max 20 characters" }),
  message:
    z.string()
      .min(2, { message: "Your message is too short" })
      .max(250, { message: "Max 250 characters" })
})