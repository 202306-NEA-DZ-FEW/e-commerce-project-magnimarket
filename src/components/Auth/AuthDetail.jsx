import { onAuthStateChanged, signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth } from "@/util/firebase"
const AuthDetail = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null)
    })
  })

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out succesfully")
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <> Signed out</>
      )}
    </div>
  )
}

export default AuthDetail
