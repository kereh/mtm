import ContactCard from "@/components/contact/contact-card"

export default function Contact() {
  return (
    <section id="contact" className="w-full flex justify-center items-center my-32">
      <div className="md:max-w-2xl w-full p-4 space-y-6">
        <ContactCard />
      </div>
    </section>
  )
}