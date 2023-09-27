import Link from "next/link"
import React, { useState, useEffect } from "react"

const Index = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseDown = (event) => {
      const x = event.clientX
      const y = event.clientY
      setCoordinates({ x, y })
    }

    document.body.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.body.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  return (
    <div className="h-screen">
      <div className="absolute top-0 left-0">
        <Link
          href={{
            pathname: "/products",
            query: {
              ...coordinates,
              price_max: 800,
              categoryId: 2,
            },
          }}
        >
          Click Me 1
        </Link>
      </div>
      <div className="absolute top-0 right-0">
        <Link
          href={{
            pathname: "/products",
            query: {
              ...coordinates,
              price_max: 600,
              categoryId: 1,
            },
          }}
        >
          Click Me 2
        </Link>
      </div>
      <div className="absolute bottom-0 left-0">
        <Link
          href={{
            pathname: "/products",
            query: {
              ...coordinates,
              price_max: 400,
              categoryId: 3,
            },
          }}
        >
          Click Me 3
        </Link>
      </div>
      <div className="absolute bottom-0 right-0">
        <Link
          href={{
            pathname: "/products",
            query: {
              ...coordinates,
              price_max: 1000,
              categoryId: 4,
            },
          }}
        >
          Click Me 4
        </Link>
      </div>
    </div>
  )
}

export default Index
