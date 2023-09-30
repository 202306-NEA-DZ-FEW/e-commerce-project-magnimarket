import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa"
import { Disclosure } from "@headlessui/react"
// import logo from "../../../public/logo.png"
import Image from "next/image"
import AuthDetail from "../Auth/AuthDetail"

export default function Navbar() {
  const router = useRouter()

  const [showShoppingMenu, setShowShoppingMenu] = useState(false)
  const [open, setOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/", current: router.pathname === "/" },
    { name: "Shop", href: "/products", current: router.pathname === "/shop" },
    { name: "About", href: "/about", current: router.pathname === "/about" },
    {
      name: "Contact us",
      href: "/contact",
      current: router.pathname === "/contact",
    },
  ]

  const toggleShoppingMenu = () => {
    setShowShoppingMenu(!showShoppingMenu)
  }

  useEffect(() => {
    // Close the mobile menu when the route changes
    setOpen(false)
  }, [router.pathname])

  return (
    <Disclosure
      as="nav"
      className="bg-none dark:bg-black border-b border-border dark:border-gray-900 mb-6"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <Link href="/">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={"/logo.png"}
                      alt="Your Company"
                    />
                    <Image
                      className="hidden lg:block"
                      src={"/logo.png"}
                      alt="Your Company"
                      height={80}
                      width={100}
                    />
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={`dark:text-white text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                            router.pathname === item.href
                              ? "bg-gray-800 text-white"
                              : ""
                          }`}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <AuthDetail />
              <Link
                href="/wishlist"
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <button
                  type="button"
                  onClick={toggleShoppingMenu}
                  className="rounded-full bg-purple-900 p-2 text-white hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transform hover:rotate-12 duration-300"
                >
                  <FaHeart
                    className="h-6 w-6 hover:transform hover:scale-125 duration-300"
                    aria-hidden="true"
                  />
                </button>
              </Link>
              <Link
                href="/cart"
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <button
                  type="button"
                  onClick={toggleShoppingMenu}
                  className="rounded-full bg-purple-900 p-2 text-white hover:bg-white hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transform hover:rotate-12 duration-300"
                >
                  <FaShoppingCart
                    className="h-6 w-6 hover:transform hover:scale-125 duration-300"
                    aria-hidden="true"
                  />
                </button>
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    onClick={() => setOpen(false)}
                    className={`text-gray-900 hover:bg-gray-700 hover:text-white dark:text-white block rounded-md px-3 py-2 text-base font-medium ${
                      router.pathname === item.href
                        ? "bg-gray-800 text-white"
                        : ""
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
