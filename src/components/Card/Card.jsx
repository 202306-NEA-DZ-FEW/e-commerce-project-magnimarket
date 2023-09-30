import Tilt from "react-parallax-tilt"
import Image from "next/image"
import Button from "@/components/Buttons/addToCartButton"
import Wishlist from "@/components/Buttons/addToWishListButton"
import { motion, LazyMotion } from "framer-motion"

export default function Card({ product }) {
  const { title, price, description } = product

  return (
    <Tilt glareEnable={false} tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <LazyMotion features="loadFeatures">
        <motion.div
          layout
          className="w-64 m-2 mx-4 bg-bkg border-border border p-1 rounded-md shadow-xl "
        >
          <Image
            className="object-cover rounded-md"
            src={`https://source.unsplash.com/random/400x300?${encodeURIComponent(
              title,
            )}&q:10`}
            alt={title}
            width={500}
            height={500}
            loading="lazy"
          />
          <div className="p-4 ">
            <h5 className="text-md font-semibold tracking-tight text-titleContent  ">
              {title}
            </h5>
            <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis text-titleContent">
              {description}
            </p>
            <div className="flex items-center justify-between mt-3 mb-2">
              <span className="text-xl font-bold text-content">${price}</span>
            </div>
            <div className="flex flex-col items-left justify-between space-y-2">
              <Button
                productObject={product}
                styling={
                  "w-full text-white uppercase bg-accent hover:bg-bkgHover hover:text-black focus:ring-4 focus:outline-none focus:ring-content/25  font-medium rounded-lg text-xs p-2 text-center"
                }
              />
              <Wishlist productObject={product} />
            </div>
          </div>
        </motion.div>
      </LazyMotion>
    </Tilt>
  )
}
