"use client"

import { Transition } from "@headlessui/react"
import { icons } from "@/components/icons"

export default function Mobile() {
  return (
    <Transition
      show={false}
      className="fixed top-0 left-0 w-full h-screen bg-background/70 backdrop-blur-sm"
    >
      <div className="w-3/4 border-r h-screen bg-background p-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-semibold">MTM</h1>
          <icons.closeMenu />
        </div>
        <div className="my-10 text-center">
          <h1 className="font-semibold">MTM</h1>
          <p className="text-base text-muted-foreground">Manguni Teknik Multimedia</p>
        </div>
      </div>
    </Transition>
  )
}