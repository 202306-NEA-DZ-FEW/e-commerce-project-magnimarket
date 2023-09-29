import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

const SliderComponent = ({ products }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#AAA",
          borderRadius: "50%",
        }}
        onClick={onClick}
      ></div>
    )
  }
  const PreArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#AAA",
          borderRadius: "50%",
        }}
        onClick={onClick}
      ></div>
    )
  }
  const settings = {
    lazyLoad: "ondemand",
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          initialSlide: 1,
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
    <div className="w-4/6 h-1/4 m-auto rounded-md shadow-custom relative">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="ml-4 relative">
            <Link href={"products/" + product.id}>
              <div>
                <Image
                  className="object-cover rounded-md"
                  src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                    product.category.name,
                  )}`}
                  alt={product.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="slider-caption absolute bottom-0 left-0 right-0 px-5 pb-5 text text-black">
                <h3 className="text-md font-semibold tracking-tight text text-black">
                  {product.title}
                </h3>
                <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis w-40 text text-blue-700">
                  {product.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent
