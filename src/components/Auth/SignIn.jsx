import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { auth } from "@/util/firebase"
const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={SignIn}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
