import { fetcher } from "@/util/API"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SimilarProducts({ product, header }) {
  const [similarProducts, setSimilarProducts] = useState([])

  useEffect(() => {
    // Check if the product has a category
    if (!product.category || !product.category.id) {
      return // Return early if category information is not available
    }

    // Fetch similar products based on the category of the current product
    const fetchSimilarProducts = async () => {
      try {
        const response = await fetcher(
          `products?category_id=${product.category.id}`,
        )
        setSimilarProducts(response)
      } catch (error) {
        console.error("Error fetching similar products:", error)
      }
    }

    fetchSimilarProducts()
  }, [product])

  const settings = {
    lazyLoad: "ondemand",
    dots: false,
    infinite: false,
    speed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="">
      <h2 className="text-3xl ml-10 pl-10 dark:text-white text-gray-800">
        {header}
      </h2>
      <Slider {...settings}>
        {similarProducts.map((similarProduct) => (
          <div key={similarProduct.id} className="w-1/4 p-4">
            <Link href={"/products/" + similarProduct.id}>
              <div className="product rounded-md overflow-hidden shadow-md bg-bkg">
                <Image
                  className="object-cover"
                  src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                    similarProduct.title,
                  )}`}
                  alt={similarProduct.title}
                  width={500}
                  height={500}
                />
                <div className="p-4 text-content">
                  <h3 className="text-lg font-semibold">
                    {similarProduct.title}
                  </h3>
                  <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis text-content">
                    {similarProduct.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}
