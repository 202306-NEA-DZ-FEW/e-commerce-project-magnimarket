import AuthDetail from "@/components/Auth/AuthDetail"
import SignIn from "@/components/Auth/SignIn"
import SignUp from "@/components/Auth/SignUp"
import React from "react"

const index = () => {
  return (
    <div>
      {" "}
      <SignUp />
      <SignIn />
      <AuthDetail />
    </div>
  )
}

export default index
