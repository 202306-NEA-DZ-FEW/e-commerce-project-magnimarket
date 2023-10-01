import React, { useState } from "react"
import SignUp from "@/components/Auth/SignUp"
import SignIn from "@/components/Auth/SignIn"

const Entering = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className=" flex items-center justify-center">
      <div className=" p-8 rounded shadow-md w-96 bg-purple">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsSignIn(true)}
            className={`text-lg py-1 px-4 ${
              isSignIn
                ? "text-purple-800 bg-purple-300"
                : "text-purple-400 hover:text-purple-800 hover:bg-purple-300"
            } rounded`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`text-lg py-1 px-4 ${
              !isSignIn
                ? "text-purple-800 bg-purple-300"
                : "text-purple-400 hover:text-purple-800 hover:bg-purple-300"
            } rounded`}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-6">{isSignIn ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  )
}

export default Entering
