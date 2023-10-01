import { onAuthStateChanged, signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth } from "@/util/firebase"
import Link from "next/link"

export default function BuyProduct() {
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null)
    })
  }, [])
  return (
    <div>
      {!authUser && (
        <Link href={"/signin"}>
          <p className="text-red-500 hover:underline ml-5">
            Please Sign-in to Buy!
          </p>
        </Link>
      )}
      <Link href={"/product-registration"}>
        <button
          disabled={!authUser}
          className="w-full disabled:opacity-50 disabled:hover:bg-accent disabled:hover:text-white text-white bg-accent hover:bg-bkgHover hover:text-accent focus:ring-4 focus:outline-none focus:ring-content/25 rounded-lg text-xs p-2 text-center text-md font-semibold uppercase"
        >
          Buy Now
        </button>
      </Link>
    </div>
  )
}
