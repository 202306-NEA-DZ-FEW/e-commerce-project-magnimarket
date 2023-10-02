import React, { Component } from "react"
import Slider from "react-slick"
// import { baseUrl } from "./config"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SingleProductSlider = ({ product }) => {
  if (!product || !product.images || !Array.isArray(product.images)) {
    return null // Render nothing if images are not available
  }

  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {product.images.map((image, index) => (
        <div key={index} className="lg:ml-48 relative">
          <div>
            <img
              className="object-cover w-96 drop-shadow-md  dark:shadow-gray-500 rounded-xl "
              src={image}
              alt={`${product.title} Image ${index}`}
            />
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SingleProductSlider
