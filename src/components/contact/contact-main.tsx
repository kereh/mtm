import { icons } from "@/components/icons"
import ContactCard from "@/components/contact/contact-card"

export default function Contact() {
  return (
    <section id="contact" className="w-full flex justify-center items-center my-16 md:mt-28 md:mb-10">
      <div className="w-full md:max-w-6xl flex justify-center p-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-10">
          <div className="space-y-3 md:max-w-sm">
            <h1 className="font-semibold text-xl">Contact Us</h1>
            <p className="text-muted-foreground">
              Fill in the form to contact us, don't forget to fill in the form correctly, so that there are no misunderstandings. You can also visit our social media, by clicking the buttons below.
            </p>
            <div className="flex flex-row items-center gap-6">
              <icons.facebook className="cursor-pointer" />
              <icons.instagram className="cursor-pointer" />
              <icons.email className="cursor-pointer" />
            </div>
          </div>
          <ContactCard />
        </div>
      </div>
    </section>
  )
}