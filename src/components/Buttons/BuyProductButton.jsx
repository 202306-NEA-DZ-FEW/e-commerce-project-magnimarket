import Link from "next/link"
import React from "react"

export default function BuyProduct() {
  return (
    <Link href={"/product-registration"}>
      <button className="w-full text-white bg-accent hover:bg-bkgHover hover:text-black focus:ring-4 focus:outline-none focus:ring-content/25 rounded-lg text-xs p-2 text-center text-md font-semibold uppercase">
        Buy Now
      </button>
    </Link>
  )
}
