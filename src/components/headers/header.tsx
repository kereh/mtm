import { icons } from "@/components/icons"
import Brand from "@/components/headers/brand"
import Desktop from "@/components/headers/menu/desktop"
import ThemeSwitcher from "@/components/theme-switcher"

export default function Header() {
  return (
    <header className="sticky top-0 left-0 py-4 px-10 flex flex-row items-center justify-between backdrop-blur-sm border-b">
      <div className="flex flex-row items-center gap-x-10">
        <Brand />
        <div className="hidden md:block">
          <Desktop />
        </div>
      </div>
      <div className="md:hidden">
        <icons.menu />
      </div>
      <div className="hidden md:block">
        <ThemeSwitcher />
      </div>
    </header>
  )
}