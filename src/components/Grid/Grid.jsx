import Image from "next/image"
import Link from "next/link"

const GridComponent = ({ header, products }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl font-semibold my-4">{header}</h2>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <Link href={"products/" + product.id}>
              <div className="product rounded-md overflow-hidden shadow-md bg-white">
                <Image
                  className="object-cover"
                  src={`https://source.unsplash.com/random/1600x900?${encodeURIComponent(
                    product.title,
                  )}`}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis text-black">
                    {product.description}
                  </p>
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
