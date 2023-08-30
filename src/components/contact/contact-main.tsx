import Image from "next/image"
import ContactCard from "@/components/contact/contact-card"

export default function Contact() {
  return (
    <section id="contact" className="w-full flex justify-center items-center my-16 md:mt-28 md:mb-10">
      <div className="md:max-w-2xl w-full flex justify-center p-6 gap-10">
        <ContactCard />
      </div>
    </section>
  )
}