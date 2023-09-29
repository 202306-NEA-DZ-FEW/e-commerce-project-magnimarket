// SuperDealItem.js
import Image from "next/image"
import Link from "next/link"

export default function SuperDealItem({
  title,
  description,
  imageSrc,
  link,
  percentageOff,
}) {
  return (
    <div className="w-5/6 h-64 border rounded-2xl shadow-xl">
      <div className="relative  h-full">
        <Image
          className="object-cover w-full h-full rounded-2xl"
          src={imageSrc}
          alt={title}
          width={1600}
          height={200}
        />
        <div className="flex  flex-wrap space-x-10 absolute bottom-0 ">
          <div className="flex flex-wrap bg-black rounded-2xl justify-items-start p-4 bg-opacity-50 ">
            <div className="px-6 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">{title}</h2>
              <p className="mt-2 text-gray-400 hidden md:block">
                {description}
              </p>
              <Link
                href={link}
                className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
              >
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* <div className="w-20 h-20 bg-accent border shadow-custom border-red-700 rounded-full flex items-center justify-center -rotate-[30deg]">
          <div className="text-red-800 font-bold">
            <p className="text-sm">Up to</p>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <p className="text-4xl font-semibold">{percentageOff}</p>
              </div>
              <div className="w-1/2">
                <p className="text-xs font-semibold">%</p>
                <p className="text-sm font-semibold">off</p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}
