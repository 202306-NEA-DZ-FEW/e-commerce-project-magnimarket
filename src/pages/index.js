import Image from "next/image"
import { fetcher } from "@/util/API"
import Button from "@/components/button"
import Wishlist from "@/components/wishList"
import Card from "@/components/CardId"

export default function Home() {
  const setProduct = {
    title: "New Product3",
    price: 10,
    description: "A description3",
    categoryId: 1,
    images: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Runfalcon_3_Cloudfoam_Low_Running_Shoes_Black_HQ3790_01_standard.jpg",
    ],
  }
  return (
    <main>
      <Card productObject={setProduct} type={"wishlist"} />

      <Wishlist productObject={setProduct} />
    </main>
  )
}
