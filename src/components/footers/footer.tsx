import { icons } from "@/components/icons"
import { menus } from "@/lib/menu"

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
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-4 gap-y-8 md:gap-4 py-3 px-4 bg-background text-foreground">
        <div className="text-center space-y-4">
          <h1 className="text-lg underline underline-offset-8">MTM</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit assumenda! Eaque, nostrum. Molestias, totam.
          </p>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-lg underline underline-offset-8">PRODUCTS</h1>
          <ul className="flex flex-col items-center gap-y-1">
            {menus.map((menu) => (
              <li key={menu.title} className="text-muted-foreground">{menu.title}</li>
            ))}
          </ul>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-lg underline underline-offset-8">USEFUL LINKS</h1>
          <ul className="flex flex-col items-center gap-y-1 text-muted-foreground">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}