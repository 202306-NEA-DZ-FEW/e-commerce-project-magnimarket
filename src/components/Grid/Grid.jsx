import Image from "next/image"
import Link from "next/link"
import WishListIcon from "@/components/Buttons/addToWishListIcon"
import { FaCartArrowDown } from "react-icons/fa"
import Wishlist from "../Buttons/addToWishListButton"
import CartIcon from "../Buttons/addToCartIcon"
const GridComponent = ({ header, products, link }) => {
  return (
    <div className="container m-auto mb-6">
      <h2 className="text-center text-content shadow-sm shadow-border dark:shadow-none text-2xl font-semibold my-8 ">
        {header}
      </h2>

      <div className="flex flex-wrap justify-center ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full  text-content sm:w-1/2 md:w-1/3 lg:w-96 p-2 mt-4 mx-1 product rounded-md overflow-hidden shadow-md bg-bkg border border-border "
          >
            <Link href={"products/" + product.id}>
              <div className="product">
                <Image
                  className="object-cover "
                  src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                    product.title,
                  )}`}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <div className="p-4 dark:p-2   ">
                  <h3 className="text-lg font-semibold ">{product.title}</h3>
                  <p className="text-l overflow-hidden whitespace-nowrap text-ellipsis text-content">
                    $ {product.price}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex justify-center space-x-4">
              <WishListIcon productObject={product} />
              <CartIcon
                productObject={product}
                styling={
                  "w-fit text-2xl hover:text-accent py-2 px-4 uppercase border border-border  bg-bkg hover:bg-bkgHover focus:ring-4 focus:outline-none focus:ring-content/25  rounded-lg p-2 text-center"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridComponent
