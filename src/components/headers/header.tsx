import Brand from "@/components/headers/brand"
import Desktop from "@/components/headers/menu/desktop"
import ThemeSwitcher from "@/components/theme-switcher"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b py-4 px-10 flex flex-row items-center justify-between backdrop-blur">
      <div className="flex flex-row items-center gap-x-10">
        <Brand />
        <Desktop />
      </div>
      <ThemeSwitcher />
    </header>
  )
}