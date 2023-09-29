import React, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/util/firebase"
import Card from "@/components/CardId"

function WishlistPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "Wishlist") // Change collection name to 'Wishlist'
      const querySnapshot = await getDocs(productsCollection)

      const productsData = []
      querySnapshot.forEach((doc) => {
        const productData = doc.data()
        productsData.push({ ...productData, quantity: 1 })
      })

      setProducts(productsData)
    }

    fetchProducts()
  }, [])

  const removeFromWishlist = (productToRemove) => {
    // Filter out the product to be removed from the products state
    const updatedProducts = products.filter(
      (product) => product !== productToRemove,
    )
    setProducts(updatedProducts)
  }

  const updateQuantity = (productToUpdate, newQuantity) => {
    const updatedProducts = products.map((product) => {
      if (product.title === productToUpdate.title) {
        return { ...product, quantity: newQuantity }
      }
      return product
    })

    setProducts(updatedProducts)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold mb-4 text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 py-2">
        Your Wishlist
      </h1>
      <div className="flex flex-col">
        {" "}
        {/* Use flex to create a column layout */}
        {products.length === 0 ? (
          <p className="text-lg font-bold text-gray-800 mt-4">
            Your wishlist is empty.
          </p>
        ) : (
          products.map((product, index) => (
            <Card
              key={index}
              productObject={product}
              type={"wishlist"}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCartwishlist={removeFromWishlist}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default WishlistPage
