import React, { useState, useEffect } from "react"
import Tilt from "react-parallax-tilt"
import { motion, AnimatePresence } from "framer-motion"
import FilterSidebar from "@/components/FilterSidebar"
import Image from "next/image"

export async function fetcher(apiRoute) {
  const url = "https://api.escuelajs.co/api/v1/" + apiRoute

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

export async function getServerSideProps({ query }) {
  const categoryId = query.categoryId || ""
  const title = query.title || ""
  const price_min = query.price_min || "20"
  const price_max = query.price_max || "1000"

  const productsData = await fetcher("products")
  const categoriesData = await fetcher("categories")

  return {
    props: {
      productsData,
      categoriesData,
      initialFilters: {
        categoryId,
        title,
        price_min,
        price_max,
      },
    },
  }
}

const parseQueryString = (query) => {
  const search = query || ""
  return {
    categoryId: search.categoryId || "",
    title: search.title || "",
    price_min: search.price_min || "20",
    price_max: search.price_max || "1000",
  }
}

const Index = ({ productsData, categoriesData, initialFilters }) => {
  const [products, setProducts] = useState(productsData)
  const [categories, setCategories] = useState(categoriesData)
  const [displayedProducts, setDisplayedProducts] = useState(15)
  const [filters, setFilters] = useState(initialFilters)

  useEffect(() => {
    // Fetch products and categories initially
    const fetchData = async () => {
      const productsData = await fetcher("products")
      const categoriesData = await fetcher("categories")
      setProducts(productsData)
      setCategories(categoriesData)
    }

    fetchData()
  }, [])

  const filterProducts = () => {
    return products.filter((product) => {
      return (
        (!filters.title || product.title.includes(filters.title)) &&
        (!filters.price_min ||
          parseFloat(product.price) >= parseFloat(filters.price_min)) &&
        (!filters.price_max ||
          parseFloat(product.price) <= parseFloat(filters.price_max)) &&
        (!filters.categoryId ||
          filters.categoryId === product.category.id.toString())
      )
    })
  }
  const filteredProducts = filterProducts()

  const loadMoreProducts = () => {
    setDisplayedProducts(displayedProducts + 20)
  }

  return (
    <div className="flex flex-col  md:flex-row">
      <FilterSidebar
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div layout className="flex flex-wrap">
            {filteredProducts.slice(0, displayedProducts).map((product) => (
              <Tilt
                className="p-4 my-1 rounded-lg shadow-lg md:w-1/4 hover:shadow-xl hover:bg-gray-100 transform transition-transform duration-300 ease-in-out"
                layout
                options={{
                  max: 20,
                  scale: 1.05,
                  speed: 300,
                }}
                key={product.id}
              >
                <motion.div layout className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                        product.category.name + product.title,
                      )}`}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-black">
                    {product.title}
                  </h2>
                  <p className="text-gray-600">${product.price}</p>
                  <p className="text-gray-600">
                    Category: {product.category.name}
                  </p>
                  <div className="bottom-0 flex ">
                    <button
                      className="bg-blue-500 text-white px-4  rounded-md mr-2 text-sm"
                      onClick={() => handleAddToCart(product.id)} // Handle add to cart action
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-green-500 text-white px-4  rounded-md text-sm"
                      onClick={() => handleBuyNow(product.id)} // Handle buy now action
                    >
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              </Tilt>
            ))}
            {displayedProducts < filteredProducts.length && (
              <div className="w-full justify-center">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md w-full"
                  onClick={loadMoreProducts}
                >
                  Load More
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Index
