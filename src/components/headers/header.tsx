import { icons } from "@/components/icons"
import ThemeSwitcher from "@/components/theme-switcher"
import Brand from "@/components/headers/brand"
import Desktop from "@/components/headers/menu/desktop"
import Mobile from "@/components/headers/menu/mobile"

export default function Header() {
  return (
    <header className="sticky z-50 top-0 left-0 py-4 px-6 flex flex-row items-center justify-between backdrop-blur-sm bg-white/70 shadow-md dark:shadow-none dark:border-b dark:bg-background/70">
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
      <Mobile />
    </header>
  )
}