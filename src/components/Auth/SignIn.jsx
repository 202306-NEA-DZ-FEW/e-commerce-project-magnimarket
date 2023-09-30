import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { auth } from "@/util/firebase"
import { useRouter } from "next/router"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        router.push("/products")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-purple p-8 rounded shadow-md w-96 bg-accent">
        <h1 className="text-2xl font-semibold text-white mb-4">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded bg-purple"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-300 text-purple-800 py-2 px-4 rounded hover:bg-purple-400"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
