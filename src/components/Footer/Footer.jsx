import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="bg-accent/80 body-font flex p-4 items-center sm:flex-row flex-col border border-border">
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
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 Recoded —
        <a
          href="https://github.com/202306-NEA-DZ-FEW"
          className="text-white/50 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @Recoded
        </a>
      </p>
      <span className="hidden sm:inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          className="text-white"
          href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-magnimarket"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="block h-6 w-6 text-white" />
        </a>
      </span>
    </div>
  )
}
