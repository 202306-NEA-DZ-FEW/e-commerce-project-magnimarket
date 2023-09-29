import React from "react"
import Image from "next/image"
// import logo from "logo."
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full border-2 border-border text-white shadow-md">
      <div className="max-w-container mx-auto h-20 flex items-center">
        {/* ------  navbar-logo ------  */}

        <div className="flex items-center h-10  border-border p-4 hover:bg-slate-50 cursor-pointer">
          <a href="#">
            {" "}
            <Image
              src={"/logo.png"}
              className="w-40 h-14 "
              alt="Logo"
              height={500}
              width={500}
            />{" "}
          </a>
        </div>

        {/* ------  menu-nav ------  */}

        <div>
          <nav class="flex justify-center items-center space-x-2  text-zinc-500">
            <Link
              href="/"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/products"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              Shop
            </Link>
            <Link
              href="/about"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              About us
            </Link>
            <Link
              href="/contact"
              class="items-center flex font-medium px-8 py-2 h-20 rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              Contact us
            </Link>

            {/* ------ cart icon ------  */}

            <Link
              href="/wishlist"
              className="absolute right-20 flex rounded-lg hover:bg-slate-100 hover:text-primary"
            >
              <FaHeart className="  h-8 w-8 hover:text-red-600 hover:h-6 transition-all ease-in-out duration-300" />{" "}
            </Link>

            <Link
              href="/cart"
              className="absolute right-8 flex rounded-lg hover:bg-slate-100 hover:text-primary "
            >
              <FaShoppingCart className="  h-8 w-8 hover:text-accent hover:h-6 hover:rotate-6 transition-all ease-in-out duration-300" />{" "}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
