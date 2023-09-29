import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore"
import { db } from "@/util/firebase"
import { useState, useEffect } from "react"

function Button({ productObject, styling }) {
  const productsInCart = collection(db, "Products")
  const [isInCart, setIsInCart] = useState(false)

  // Function to check if the product is in the cart
  const checkIfInCart = async () => {
    const q = query(
      productsInCart,
      where("title", "==", productObject.title),
      where("price", "==", productObject.price),
      where("description", "==", productObject.description),
    )

    const querySnapshot = await getDocs(q)
    if (querySnapshot.size > 0) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }

  // Check if the product is in the cart when the component mounts
  useEffect(() => {
    checkIfInCart()
  }, [productsInCart, productObject])

  // Listen for changes in the Firebase collection to keep the button updated
  useEffect(() => {
    const unsubscribe = onSnapshot(productsInCart, () => {
      checkIfInCart()
    })

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe()
    }
  }, [productsInCart])

  const toggleCart = async () => {
    if (isInCart) {
      // If the item is in the cart, remove it
      const q = query(
        productsInCart,
        where("title", "==", productObject.title),
        where("price", "==", productObject.price),
        where("description", "==", productObject.description),
      )

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((docSnapshot) => {
        deleteDoc(doc(db, "Products", docSnapshot.id))
          .then(() => {
            console.log("Document removed from cart successfully!")
            setIsInCart(false)
          })
          .catch((error) => {
            console.error("Error removing document from cart:", error)
          })
      })
    } else {
      // If the item is not in the cart, add it
      await addDoc(productsInCart, productObject)
      console.log("Document added to cart successfully!")
      setIsInCart(true)
    }
  }

  return (
    <div>
      <button
        onClick={toggleCart}
        className={`${isInCart ? "bg-red-500" : "bg-accent"} ${styling}`}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  )
}

export default Button
