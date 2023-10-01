import React, { useState } from "react"
import { motion } from "framer-motion"
import FilterSidebar from "@/components/Filter/Filter"
import Card from "@/components/Card/Card"
import AnimatedBox from "@/components/AnimatedBox"
import { fetcher } from "@/util/API"
import Head from "next/head"

export async function getServerSideProps({ query }) {
  const categoryId = query.categoryId || ""
  const title = query.title || ""
  const price_min = query.price_min || "0"
  const price_max = query.price_max || "1000"

  const products = await fetcher("products?offset=0&limit=48")
  const categories = await fetcher("categories")

  return {
    props: {
      products,
      categories,
      initialFilters: {
        categoryId,
        title,
        price_min,
        price_max,
      },
    },
  }
}

const Index = ({ products, categories, initialFilters }) => {
  const [displayedProducts, setDisplayedProducts] = useState(20)
  const [filters, setFilters] = useState(initialFilters)

  const filterProducts = () => {
    return products.filter((product) => {
      const productTitle = product.title.toLowerCase() // Convert product title to lowercase
      const filterTitle = filters.title.toLowerCase() // Convert filter title to lowercase

      return (
        (!filters.title || productTitle.includes(filterTitle)) &&
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
    <>
      <Head>
        <title>Magni Market | Buy a Product </title>
        <meta name="keywords" content="shop, buy product"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedBox>
        <FilterSidebar
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />
        <div className="flex w-full ">
          <div className="flex-1 overflow-y-auto pl-16 ">
            <motion.div layout className="flex flex-wrap justify-center bg">
              {filteredProducts.slice(0, displayedProducts).map((product) => (
                <Card key={product.id} product={product} />
              ))}
              {displayedProducts < filteredProducts.length && (
                <div className="w-full justify-center ">
                  <button
                    className="bg-accent justify-center text-bkg py-2 my-6 rounded-md w-full"
                    onClick={loadMoreProducts}
                  >
                    Load More
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedBox>
    </>
  )
}

export default Index
