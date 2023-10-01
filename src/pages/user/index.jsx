// components/UserPage.js
import Link from "next/link"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth } from "@/util/firebase"

const UserPage = () => {
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    // Make sure to unsubscribe when the component unmounts to prevent memory leaks.
    return () => unsubscribe()
  }, [])
  return (
    <>
      {authUser ? (
        <div className="flex flex-col bg-gray-100 p-4 justify-center items-center h-screen">
          <h1 className="text-2xl font-bold mb-12">
            Welcome, {authUser.email}
          </h1>
          <div className="flex space-x-4 items-center">
            <Link
              href="/wishlist"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Your Wishlist
            </Link>
            <Link
              href="/cart"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Your Cart
            </Link>
            <Link
              href="/sellItem"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Sell a Product
            </Link>
            <Link
              href="/products"
              className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Buy a Product
            </Link>
          </div>
        </div>
      ) : (
        <Link
          className="h-screen bg-accent flex justify-center items-center hover:underline text-white text-6xl font-semibold"
          href={"/signin"}
        >
          PLEASE SIGN IN!
        </Link>
      )}
    </>
  )
}

export default UserPage
