"use client"
import NextNProgress from "nextjs-progressbar"

const NextNProgressClient = () => {
  return (
    <NextNProgress
      color="#4c1d95"
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  )
}

export default NextNProgressClient
