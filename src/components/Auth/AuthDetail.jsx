import { onAuthStateChanged, signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth } from "@/util/firebase"
import { useRouter } from "next/router"
import Link from "next/link"
import { FaUserAlt } from "react-icons/fa"

const AuthDetail = () => {
  const router = useRouter()

  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null)
    })
  }, [])

  const userSignOut = () => {
    if (authUser) {
      signOut(auth)
        .then(() => {
          console.log("Signed out succesfully")
          router.push("/")
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {authUser && (
        <Link
          href={"/user"}
          className="flex  hover:underline text-accent items-center "
        >
          <FaUserAlt className="mr-2 w-5 h-5" />
          <div className="hidden md:block">{authUser.email}</div>
        </Link>
      )}
      <button
        onClick={userSignOut}
        className={`${
          authUser
            ? "bg-red-500 text-white p-1 px-2 border border-border rounded-md hover:bg-red-900"
            : "font-bold border border-border p-1 px-2 rounded-md text-content hover:bg-accent"
        }`}
      >
        {authUser ? "Sign Out" : <Link href={"/signin"}>Sign In</Link>}
      </button>
    </div>
  )
}

export default AuthDetail
