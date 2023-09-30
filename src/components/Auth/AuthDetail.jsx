import { onAuthStateChanged, signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth } from "@/util/firebase"
import { useRouter } from "next/router"
import Link from "next/link"

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
    <div>
      <button onClick={userSignOut}>
        {authUser ? "Sign Out" : <Link href={"/signin"}>Sign In</Link>}
      </button>
    </div>
  )
}

export default AuthDetail
