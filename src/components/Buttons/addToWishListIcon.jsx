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
import { db, auth } from "@/util/firebase"
import { useState, useEffect } from "react"
import Router, { useRouter } from "next/router"
import { FaHeart } from "react-icons/fa"
function WishListIcon({ productObject }) {
  const wishlistCollection = collection(db, "Wishlist")
  const [isInWishlist, setIsInWishlist] = useState(false)
  const router = useRouter()

  // Function to check if the product is in the wishlist
  const checkIfInWishlist = async () => {
    // check if the user is signed in
    const user = auth.currentUser
    if (!user) {
      return
    }

    const q = query(
      wishlistCollection,
      where("title", "==", productObject.title),
      where("price", "==", productObject.price),
      where("description", "==", productObject.description),
      where("uid", "==", user.uid),
    )

    const querySnapshot = await getDocs(q)
    if (querySnapshot.size > 0) {
      setIsInWishlist(true)
    } else {
      setIsInWishlist(false)
    }
  }

  // Check if the product is in the wishlist when the component mounts
  useEffect(() => {
    checkIfInWishlist()
  }, [wishlistCollection, productObject])

  // Listen for changes in the Firebase collection to keep the button updated
  useEffect(() => {
    const unsubscribe = onSnapshot(wishlistCollection, () => {
      checkIfInWishlist()
    })

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe()
    }
  }, [wishlistCollection])

  const toggleWishlist = async () => {
    const user = auth.currentUser
    if (!user) {
      router.push("/signin")
      return
    }

    if (isInWishlist) {
      // If the item is in the wishlist, remove it
      const q = query(
        wishlistCollection,
        where("title", "==", productObject.title),
        where("price", "==", productObject.price),
        where("description", "==", productObject.description),
        where("uid", "==", user.uid),
      )

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((docSnapshot) => {
        deleteDoc(doc(db, "Wishlist", docSnapshot.id))
          .then(() => {
            console.log("Item removed from wishlist successfully!")
            setIsInWishlist(false)
          })
          .catch((error) => {
            console.error("Error removing item from wishlist:", error)
          })
      })
    } else {
      // If the item is not in the wishlist, add it
      await addDoc(wishlistCollection, {
        ...productObject,
        uid: auth?.currentUser?.uid,
      })

      console.log("Item added to wishlist successfully!")
      setIsInWishlist(true)
    }
  }

  return (
    <div>
      <button
        onClick={toggleWishlist}
        className={`${
          isInWishlist
            ? "text-red-500 hover:transform hover:scale-95 duration-300"
            : "text-accent hover:text-accent hover:transform hover:scale-110 duration-300"
        } text-2xl border border-border w-fit  bg-bkg py-2 px-4 "text-white uppercase  hover:bg-bkgHover  focus:ring-4 focus:outline-none focus:ring-content/25  rounded-lg p-2 text-center"`}
      >
        <FaHeart />
      </button>
    </div>
  )
}

export default WishListIcon
