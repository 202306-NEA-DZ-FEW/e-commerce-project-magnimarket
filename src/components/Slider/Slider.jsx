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
    lazyLoad: "onDemand",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
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
    <div className="w-4/5 h-4/6	m-auto relative">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="2xl:p-4 lg:p-0 p-4 relative ">
            <Link href={"products/" + product.id}>
              <div>
                <Image
                  className="object-cover w-fit drop-shadow-md  dark:shadow-gray-500 rounded-xl lg:h-48  h-64 2xl:h-72"
                  src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                    product.category.name,
                  )}`}
                  alt={product.title}
                  width={600}
                  height={500}
                />
              </div>
              <div className="slider-caption lg:w-4/5 2xl:w-5/6  absolute bottom-0 left-0 bg-black rounded-r-xl bg-opacity-50 p-6 mb-5 2xl:mb-10 2xl:ml-4 ml-4 lg:ml-0  mr-1 text-black hover:bg-accent ">
                <h3 className="text-xl font-semibold tracking-tight  text-white">
                  {product.title}
                </h3>
                <p className="text-sm p-1 overflow-hidden whitespace-nowrap text-ellipsis w-32 text text-gray-400 ">
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
