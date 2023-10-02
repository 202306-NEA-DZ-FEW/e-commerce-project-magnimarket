import React, { useEffect, useState } from "react"
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { db, auth } from "@/util/firebase"
import Card from "@/components/Card/CardId"
import { onAuthStateChanged } from "firebase/auth"
import Head from "next/head"

function WishlistPage() {
  const [products, setProducts] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      if (auth.currentUser) {
        const userUID = auth.currentUser.uid
        const productsCollection = collection(db, "Wishlist")
        const q = query(productsCollection, where("uid", "==", userUID))
        const querySnapshot = await getDocs(q)

        const productsData = []
        querySnapshot.forEach((doc) => {
          const productData = doc.data()
          productsData.push({ ...productData, quantity: 1 })
        })

        setProducts(productsData)
      } else {
        setProducts([])
      }
    }
    const listener = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(Boolean(user))
    })

    fetchProducts()

    // Add a real-time listener to update the wishlist when changes occur
    const unsubscribe = onSnapshot(collection(db, "Wishlist"), (snapshot) => {
      fetchProducts() // Refetch products when a change occurs
    })

    return () => {
      // Clean up the listener when the component unmounts
      listener()
      unsubscribe()
    }
  }, [])

  const removeFromWishlist = (productToRemove) => {
    // You can remove the product from the Firebase collection here
    // and the real-time listener will automatically update the page.
    // Example:
    // deleteDoc(doc(db, "Wishlist", productToRemove.id));

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
    <>
      <Head>
        <title>Magni Market | wishlist</title>
        <meta name="keywords" content="shop, buy product"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="font-bold mb-4 text-3xl text-titleContent border-b-2 border-gray-300 py-2">
          Your Wishlist
        </h1>
        {isAuthenticated ? (
          <div className="flex flex-col">
            {products.length === 0 ? (
              <p className="text-lg font-bold text-content mt-4 h-screen">
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
        ) : (
          <p className="text-lg font-bold text-gray-800 mt-4 h-screen">
            Please sign in to view your wishlist.
          </p>
        )}
      </div>
    </>
  )
}

export default WishlistPage
