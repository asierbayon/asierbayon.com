"use client"

import { useState } from "react"
import Link from "next/link"
import { AlarmClock, Check, Copy, PlusCircle, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import TimeDisplay from "./time-display"

const timeNow = new Date().toLocaleTimeString("en-CH", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Europe/Zurich",
})

export const ProfileCard = () => {
  const [isCopying, setIsCopying] = useState(false)

  const handleCopyEmail = async () => {
    setIsCopying(true)
    await navigator.clipboard.writeText("hello@asierbayon.com")

    setTimeout(() => {
      setIsCopying(false)
    }, 1000)
  }

  return (
    <div className="mb-24 space-y-8">
      <h1 className="text-4xl font-extrabold">Hey it&apos;s,</h1>
      <div className="relative">
        <div className="absolute inset-0 z-0 flex w-full translate-y-[22%] items-end justify-center rounded-[2.5rem] bg-[#90D555] shadow-lg md:translate-y-[27%]">
          <div className="flex items-center gap-2 pb-4">
            <Zap className="h-6 w-6" />
            <p className="text-md font-medium">Currently High on Creativity</p>
          </div>
        </div>
        <Card className="relative z-10 overflow-hidden rounded-[2.5rem] border-none bg-zinc-800 p-6 text-white shadow-lg">
          <div className="absolute right-4 top-4">
            <span className="text-sm text-zinc-400"></span>
          </div>
          <div className="mb-4 flex items-center justify-between text-sm text-zinc-400">
            <p>Software Engineer</p>
            <span className="flex items-center gap-1">
              <AlarmClock className="h-4 w-4" />
              <TimeDisplay />
            </span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-full bg-white">
              <img
                src="/avatar.png"
                alt="Asier Bayón Memoji"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-normal">Asier Bayón</h2>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-zinc-400">
                  Available for work
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.linkedin.com/in/asierbayon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="secondary"
                className="w-full rounded-2xl border-t-2 border-zinc-500 bg-zinc-600 py-4 text-white hover:bg-zinc-500 md:py-6"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </Link>
            <Button
              variant="secondary"
              className="rounded-2xl border-t-2 border-zinc-600 bg-zinc-700 py-4 text-white hover:bg-zinc-600 md:flex-1 md:py-6"
              onClick={handleCopyEmail}
            >
              {isCopying ? (
                <Check className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {isCopying ? "Copied!" : "Copy Email"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
