import React, { useEffect, useState } from "react"
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { auth, db } from "@/util/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { FaShoppingCart } from "react-icons/fa"

const CartButton = () => {
  const [products, setProducts] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      if (auth.currentUser) {
        const userUID = auth.currentUser.uid
        const productsCollection = collection(db, "Products")
        const q = query(productsCollection, where("uid", "==", userUID))
        const querySnapshot = await getDocs(q)
        const productsData = []
        querySnapshot.forEach((doc) => {
          const productData = doc.data()
          productsData.push({
            ...productData,
            quantity: 1,
          })
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

    const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
      fetchProducts()
    })

    return () => {
      // Clean up the listener when the component unmounts
      listener()
      unsubscribe()
    }
  }, [])

  const totalItems = products.length

  return (
    <button
      type="button"
      className="rounded-full bg-purple-900 p-2 text-white hover:bg-bkg hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transform hover:rotate-12 duration-300"
    >
      <FaShoppingCart
        className="h-6 w-6 hover:transform hover:scale-125 duration-300"
        aria-hidden="true"
      />
      {isAuthenticated && totalItems > 0 && (
        <span className="absolute bottom-2 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
          {totalItems}
        </span>
      )}
    </button>
  )
}

export default CartButton
