import React from "react"
import { motion, LazyMotion } from "framer-motion"
import { useRouter } from "next/router"

const AnimatedBox = ({ children }) => {
  const router = useRouter()
  const { query } = router
  const { x, y } = query

  const initialX = parseFloat(x) || 0
  const initialY = parseFloat(y) || 0

  return (
    <LazyMotion features="loadFeatures">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1,
          x: initialX,
          y: initialY,
          width: "0%",
          height: "0%",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          x: initialX,
          y: initialY,
          width: "0%",
          height: "0%",
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          x: { duration: 0.7 },
          y: { duration: 0.7 },
        }}
        className={` flex w-full h-full mt-12`}
      >
        {children}
      </motion.div>
    </LazyMotion>
  )
}

export default AnimatedBox
