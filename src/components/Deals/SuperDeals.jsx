import Image from "next/image"
import Link from "next/link"

export default function SuperDeals() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 m-10">
      <div className="w-1/2 h-64 border rounded-lg shadow-custom">
        <div className="relative h-full">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={`https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80`}
            alt="electronics"
            width={1600}
            height={200}
          />
          <div className="flex flex-wrap space-x-10 absolute bottom-0 right-0 m-4">
            <div class="flex flex-wrap justify-items-start bg-gray-900 bg-opacity-50 h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Computers</h2>
                <p class="mt-2 text-gray-400 hidden md:block">
                  Get ready to compute in style with our unbeatable autumn
                  computer deals!.
                </p>
                <Link
                  href={{
                    pathname: "/products",
                    query: { title: "computer" },
                  }}
                  class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                >
                  <span>Shop Now</span>
                  <svg
                    class="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-20 h-20 border shadow-custom -rotate-[30deg] border-red-700 bg-yellow-500 rounded-full flex items-center justify-center">
              <div className="text-red-800 font-bold">
                <p className="text-sm">Up to</p>
                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <p className="text-4xl font-semibold">75</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs font-semibold">%</p>
                    <p className="text-sm font-semibold">off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-64 border rounded-lg shadow-custom">
        <div className="relative h-full">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={`https://images.unsplash.com/photo-1482993032093-397e0c525e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80`}
            alt="clothes"
            width={1600}
            height={200}
          />
          <div className="flex space-x-10 absolute bottom-0 m-4">
            <div class="flex justify-items-start bg-gray-900 bg-opacity-50 h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">
                  Autumn Shoes 2023
                </h2>
                <p class="mt-2 text-gray-400">
                  Discover unbe-leaf-able autumn shoe deals to keep you stylish
                  and cozy as the leaves fall.
                </p>
                <Link
                  href={{
                    pathname: "/products",
                    query: { title: "shoes" },
                  }}
                  class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                >
                  <span>Shop Now</span>
                  <svg
                    class="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-20 h-20 bg-yellow-500 border shadow-custom border-red-700 rounded-full flex items-center justify-center -rotate-[30deg]">
              <div className="text-red-800 font-bold">
                <p className="text-sm">Up to</p>
                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <p className="text-4xl font-semibold">70</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs font-semibold">%</p>
                    <p className="text-sm font-semibold">off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
