"use client"

import { useEffect, useState } from "react"

export default function TimeDisplay() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const now = new Date()
    setTime(
      now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    )
  }, [])

  if (!time) {
    return null
  }

  return <span>{time}</span>
}
