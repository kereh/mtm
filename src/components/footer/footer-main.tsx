import { icons } from "@/components/icons"
import { productAndMenu } from "@/config/site"
import { currentYear } from "@/lib/year"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-foreground text-background w-full px-4 py-3 gap-y-3 md:gap-y-0">
        <p>Get connected with us on social networks</p>
        <div className="flex flex-row items-center gap-x-4">
          <icons.facebook />
          <icons.instagram />
          <icons.email />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-4 gap-y-8 md:gap-4 py-3 px-4 mt-5 text-foreground">
        <h1 className="text-3xl place-self-center text-center font-extrabold">
          MTM <span className="block text-base font-normal">Manguni Teknik Multimedia</span>
        </h1>
        <div className="text-center space-y-4">
          <h1 className="text-lg underline underline-offset-8">PRODUCTS</h1>
          <ul className="flex flex-col items-center gap-y-1">
            {productAndMenu.map((menu) => (
              <li key={menu.title} className="text-muted-foreground cursor-pointer">{menu.title}</li>
            ))}
          </ul>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-lg underline underline-offset-8">USEFUL LINKS</h1>
          <ul className="flex flex-col items-center gap-y-1 text-muted-foreground">
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">Whatsapp</li>
          </ul>
        </div>
      </div>
      <div className="w-full p-3 text-center mt-5 ">
        <p className="text-muted-foreground">
          &copy; {currentYear} Manguni Teknik Multimedia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}