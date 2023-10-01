import React, { Component } from "react"
import Slider from "react-slick"
// import { baseUrl } from "./config"

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
    <div className="w-full ">
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index} className="ml-4 relative w-full">
            <div>
              <img
                className="object-cover w-3/4 rounded-md"
                src={image}
                alt={`${product.title} Image ${index}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SingleProductSlider
