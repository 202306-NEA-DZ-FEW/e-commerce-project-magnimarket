import Image from "next/image"
import Link from "next/link"

const GridComponent = ({ header, products, link }) => {
  return (
    <div className="container m-auto">
      <h2 className="text-center  shadow-sm shadow-border text-2xl font-semibold my-8">
        {header}
      </h2>

      <div className="flex flex-wrap justify-center ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mt-4   "
          >
            <Link href={"products/" + product.id}>
              <div className="product rounded-md overflow-hidden shadow-md bg-white  ">
                <Image
                  className="object-cover"
                  src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                    product.title,
                  )}`}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <div className="p-4   ">
                  <h3 className="text-lg font-semibold ">{product.title}</h3>
                  <p className="text-l overflow-hidden whitespace-nowrap text-ellipsis text-black">
                    $ {product.price}
                  </p>
                  <div className="flex justify-center">
                    <a href={link}>
                      <button className="bg-accent text-white w-20 h-8 rounded-lg hover:bg-purple-500">
                        Buy Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridComponent
