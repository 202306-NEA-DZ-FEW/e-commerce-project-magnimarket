import React from "react"
import Image from "next/image"
import logo from "../../../public/logo.png"
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="w-full border-2 border-bordery text-white">
      <div className="max-w-container mx-auto h-20 flex items-center">
        {/* ------  navbar-logo ------  */}

        <div className="flex items-center h-20 border-e border-bordery p-4 hover:bg-slate-50 cursor-pointer">
          <a href="#">
            {" "}
            <Image src={logo} className="w-40 h-14 " alt="Logo" />{" "}
          </a>
        </div>

        {/* ------  menu-nav ------  */}

        <div>
          <nav class="flex justify-center items-center space-x-2  text-zinc-500">
            <a
              href="/men"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              MEN
            </a>
            <a
              href="/women"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              WOMEN
            </a>
            <a
              href="/kids"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              KIDS
            </a>
            <a
              href="/new arivals"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              New Arrivals
            </a>

            {/* ------ cart icon ------  */}

            <a
              href="#"
              className="absolute right-8 flex rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              <FaShoppingCart className="  h-8 w-8 " />{" "}
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
