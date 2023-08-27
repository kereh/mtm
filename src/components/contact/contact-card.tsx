import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ContactForm from "@/components/contact/contact-form"

export default function ContactCard() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="font-extrabold">Contact Us</CardTitle>
        <CardDescription className="text-base text-muted-foreground">Feel free to contact us</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>

  )
}