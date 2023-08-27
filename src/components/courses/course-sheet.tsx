"use client"

import { z } from "zod"
import { CourseSheet } from "@/types/course-sheet-types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { courseSchema } from "@/schema/course-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { generateMessage } from "@/lib/message"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form"

// https://api.whatsapp.com/send/?phone=89612225233&text=Hello%5Cnakwoakwoa&type=phone_number&app_absent=0

export default function CourseSheet({ name, per, formattedAmount }: CourseSheet) {

  const { push } = useRouter()

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      customer_name: "",
      phone_number: "",
      customer_address: "",
    }
  })

  function onSubmit(values: z.infer<typeof courseSchema>) {
    const { customer_name, phone_number, customer_address } = values
    const message = generateMessage({
      course: name,
      phone: phone_number,
      customer: customer_name,
      address: customer_address,
    })
    const url = `https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_ADMIN_PHONE}&text=${message}&type=phone_number&app_absent=0`
    return push(url)
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/70 duration-300">Buy This Course</div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col gap-4">
          <SheetTitle>{name}</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                Course : {name}
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                Price : <span className="text-green-600">{formattedAmount} / {per}</span>
              </div>
            </div>
          </SheetDescription>
          <SheetDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4"
              >
                <FormField
                  control={form.control}
                  name="customer_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your full name here"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      {form.formState.errors.customer_name && (
                        <FormDescription className="text-red-600">
                          {form.formState.errors.customer_name.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone number here"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      {form.formState.errors.phone_number && (
                        <FormDescription className="text-red-600">
                          {form.formState.errors.phone_number.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customer_address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Address here!"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      {form.formState.errors.phone_number && (
                        <FormDescription className="text-red-600">
                          {form.formState.errors.phone_number.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
                <Button type="submit">Confirm</Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}