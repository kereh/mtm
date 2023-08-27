"use client"

import { useTheme } from "next-themes"
import { icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <icons.light className="w-4 h-4 hidden dark:block" />
      <icons.dark className="w-4 h-4 block dark:hidden" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  )
}