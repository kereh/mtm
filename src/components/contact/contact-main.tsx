import Image from "next/image"
import ContactCard from "@/components/contact/contact-card"

export default function Contact() {
  return (
    <section id="contact" className="w-full flex justify-center items-center my-16 md:mt-28 md:mb-10">
      <div className="md:max-w-6xl w-full flex flex-col-reverse md:flex-row p-6 gap-10">
        <ContactCard />
        <div className="w-full md:max-w-md space-y-10">
          <Image
            src="/img/contact.svg"
            alt="contact illustration"
            width={100}
            height={100}
            className="w-36 h-36 mx-auto"
            priority
            quality={75}
          />
          <p className="text-muted-foreground">
            Don't worry about contacting our company, we are open to receiving criticism, suggestions, and work
          </p>
        </div>
      </div>
    </section>
  )
}