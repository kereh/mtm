"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "@/schema/contact-schema"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: "",
      email: "",
    }
  })

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                {form.formState.errors.fullname
                  ? (
                    <FormDescription>
                      {form.formState.errors.fullname.message}
                    </FormDescription>
                  )
                  : (
                    <FormDescription>
                      Enter your fullname here
                    </FormDescription>
                  )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" {...field} />
                </FormControl>
                {form.formState.errors.email
                  ? (
                    <FormDescription>
                      {form.formState.errors.email.message}
                    </FormDescription>
                  )
                  : (
                    <FormDescription>
                      insert your valid and active email here
                    </FormDescription>
                  )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  {"+62"} is Indonesia phone code, use yours
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Use a complete and valid address
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 mt-6">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message here" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-2/3 self-center">Submit</Button>
        </div>
      </form>
    </Form>
  )
}