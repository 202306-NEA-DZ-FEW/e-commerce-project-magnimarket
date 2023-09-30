import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import SliderComponent from "@/components/Slider/Slider"
import GridComponent from "@/components/Grid/Grid"
import SuperDealItem from "@/components/Deals/SuperDealItem"
import Footer from "../components/Footer/Footer"

const HomePage = () => {
  const router = useRouter()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const products = await response.json()

      setProducts(products)
    }

    fetchTopSellingProducts()
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex-grow ">
        <SliderComponent products={products} />
      </div>
      <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 m-10">
        <SuperDealItem
          title="Computers"
          description="Get ready to compute in style with our unbeatable autumn computer deals!"
          imageSrc="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
          link={{
            pathname: "/products",
            query: { title: "computer" },
          }}
          percentageOff={75}
        />
        <SuperDealItem
          title="Autumn Shoes 2023"
          description="Discover unbe-leaf-able autumn shoe deals to keep you stylish and cozy as the leaves fall."
          imageSrc="https://images.unsplash.com/photo-1482993032093-397e0c525e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          link={{
            pathname: "/products",
            query: { title: "shoes" },
          }}
          percentageOff={70}
        />
      </div>
      <div>
        <GridComponent
          header="Best Sellers"
          products={[...products].sort((a, b) => a.price - b.price).slice(0, 8)}
        />
        <GridComponent
          header="New Arrivals"
          products={[...products]
            .sort((a, b) => b.creationAt - a.creationAt)
            .slice(0, 8)}
        />
      </div>
    </div>
  )
}

export default HomePage
