import BuyProduct from "@/components/Buttons/BuyProductButton"
import Button from "@/components/Buttons/addToCartButton"
import Wishlist from "@/components/Buttons/addToWishListButton"
import SimilarProducts from "@/components/SimilarProducts/SimilarProducts"
import SingleProductSlider from "@/components/Slider/ProductSlider"
import React, { useState } from "react"

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  console.log(product)

  return (
    <div className="m-8 ml-10 mr-10 p-4 pl-10 pr-10">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
        {/* Product Images (Slider) */}
        <div className="md:w-1/2">
          <SingleProductSlider product={product} />
          {/* You can use libraries like react-slick for the slider */}
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl m-4 p-4 ml-0 pl-0 font-semibold text-content">
            {product.title}
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-700">
            {product.description}
          </p>
          <div className="flex text-content">
            <p className="text-xl uppercase font-bold mt-2 pt-2">$</p>
            <p className="text-4xl font-bold mt-2 pt-2">{product.price}</p>
          </div>

          {/* Quantity Input */}
          {/* <div className="mt-4 ">
            <label className="block text-xl font-bold text-content">Quantity:</label>
            <input
              className="w-12"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div> */}

          {/* Action Buttons */}
          <div className="mt-6 space-x-2">
            <div className="py-2 ml-2 px-0">
              <BuyProduct />
            </div>
            <Button
              productObject={product}
              styling={
                "w-full text-white uppercase bg-accent hover:bg-bkgHover hover:text-content focus:ring-4 focus:outline-none focus:ring-content/25 font-medium rounded-lg text-xs p-2 text-center"
              }
            />
            <div className="py-2 items-center justify-center">
              <Wishlist styling={" "} productObject={product} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <SimilarProducts header="Related items" product={product} />
      </div>
    </div>
  )
}

export default ProductPage

export async function getServerSideProps({ params }) {
  // Fetch the single product details from the API
  try {
    const { productId } = params
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products/" + productId,
    )
    const product = await response.json()

    return {
      props: {
        product,
      },
    }
  } catch (error) {
    // Handle errors here
    console.error("Error fetching product details:", error)
    return {
      props: {
        product: {},
      },
    }
  }
}
