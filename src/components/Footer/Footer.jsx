import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="dark:bg-black bg-white body-font flex mt-6 p-4 items-center sm:flex-row flex-col border-t  border-border">
      <Link href="/">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="block h-8 w-auto lg:hidden"
            src="/logo.png"
            alt="Your Company"
          />
          <img
            className="hidden h-8 w-auto lg:block"
            src="/logo.png"
            alt="Your Company"
          />
        </div>
      </Link>
      <p className="text-sm dark:text-gray-200 text-gray-600  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 Recoded —
        <a
          href="https://github.com/202306-NEA-DZ-FEW"
          className="dark:text-gray-200 text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @Recoded
        </a>
      </p>
      <span className="hidden  sm:inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          className="dark:text-gray-200 text-gray-600 "
          href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-magnimarket"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="block h-6 w-6 dark:text-gray-200 text-gray-600 " />
        </a>
      </span>
    </div>
  )
}
