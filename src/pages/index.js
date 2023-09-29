import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import SliderComponent from "@/components/Slider/Slider"
import GridComponent from "@/components/Grid/Grid"
import SuperDeals from "@/components/Deals/SuperDeals"

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
    <div className="flex flex-col h-screen">
      <div className="flex-grow ">
        <SliderComponent products={products} />
      </div>
      <SuperDeals />
      <div>
        <GridComponent
          header="Best Sellers"
          products={[...products].sort((a, b) => b.price - a.price).slice(0, 8)}
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

