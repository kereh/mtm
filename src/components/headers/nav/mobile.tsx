"use client"

import { Dispatch } from "react"
import { Transition } from "@headlessui/react"
import { icons } from "@/components/icons"
import Link from "next/link"

interface IMobileProps {
  isShow: boolean
  setIsShow: Dispatch<boolean>
}

export default function Mobile({ isShow, setIsShow }: IMobileProps) {
  return (
    <Transition
      show={isShow}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed top-0 left-0 w-full h-screen bg-background/70 backdrop-blur-sm"
    >
      <div className="w-3/4 border-r h-screen bg-background p-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-semibold">MTM</h1>
          <icons.closeMenu onClick={() => setIsShow(!isShow)} />
        </div>
        <div className="my-10 text-center">
          <h1 className="font-semibold">MTM</h1>
          <p className="text-base text-muted-foreground">Manguni Teknik Multimedia</p>
        </div>
        <ul className="flex flex-col gap-6">
          <Link href="/">
            <li className="flex flex-row items-center gap-4">
              <icons.home />
              Home
            </li>
          </Link>
          <Link href="https://www.armandoloho.com">
            <li className="flex flex-row items-center gap-4">
              <icons.camera />
              Photography
            </li>
          </Link>
          <Link href="https://www.aurorafilm.id">
            <li className="flex flex-row items-center gap-4">
              <icons.video />
              Videography {"-"} Film
            </li>
          </Link>
          <Link href="/">
            <li className="flex flex-row items-center gap-4">
              <icons.code />
              Web Developer
            </li>
          </Link>
          <Link href="/about">
            <li className="flex flex-row items-center gap-4">
              <icons.info />
              About
            </li>
          </Link>
          <Link href="/#contact">
            <li className="flex flex-row items-center gap-4">
              <icons.email />
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </Transition>
  )
}