import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ContactForm from "@/components/contact/contact-form"

export default function ContactCard() {
  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle className="font-semibold">Contact Form</CardTitle>
        <CardDescription className="text-base text-muted-foreground">Feel free to contact us</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  )
}