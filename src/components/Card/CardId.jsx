import React from "react"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "@/util/firebase"
import Button from "../Buttons/addToCartButton" // Import the Button component
import { useState } from "react"

function Card({
  productObject,
  type,
  onUpdateQuantity,
  onRemoveFromCartwishlist,
}) {
  const collectionName = type === "cart" ? "Products" : "Wishlist"
  const productCollection = collection(db, collectionName)
  const [quantity, setQuantity] = useState(1)

  const removeFromCollection = async () => {
    const querySnapshot = await getDocs(productCollection)
    querySnapshot.forEach((docSnapshot) => {
      const docData = docSnapshot.data()
      if (
        docData.title === productObject.title &&
        docData.price === productObject.price &&
        docData.description === productObject.description
      ) {
        deleteDoc(doc(db, collectionName, docSnapshot.id))
          .then(() => {
            console.log("Product removed successfully!")
          })
          .catch((error) => {
            console.error("Error removing product:", error)
          })
      }
    })

    onRemoveFromCartwishlist(productObject)
  }

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10)
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity)
      onUpdateQuantity(productObject, newQuantity) // Notify parent of quantity change
    }
  }

  const totalProductPrice = productObject.price * quantity

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white text-gray-800 relative mb-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <img
            src={`https://source.unsplash.com/random/400x300?${encodeURIComponent(
              productObject.title,
            )}&q:10`}
            alt={productObject.title}
            className="w-full h-64 object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full lg:w-2/3 p-4 relative">
          <button
            onClick={removeFromCollection}
            className="bg-red-500 text-white rounded-full w-10 h-10 absolute top-2 right-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            X
          </button>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-2">
            {productObject.title}
          </h2>
          <p className="text-lg lg:text-2xl text-gray-700 mb-2">
            {productObject.description}
          </p>
          <p className="text-lg lg:text-2xl font-bold text-blue-500">
            ${productObject.price.toFixed(2)}
          </p>
          {type === "cart" && (
            <div className="flex justify-between items-center mt-4">
              <div>
                <label
                  htmlFor={`quantity-${productObject.title}`}
                  className="mr-2 font-bold"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`quantity-${productObject.title}`}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border rounded-md px-2 py-1 text-sm"
                  style={{ width: "40px" }}
                />
              </div>
              <div>
                <p className="font-bold">
                  Total Price: ${totalProductPrice.toFixed(2)}
                </p>
              </div>
            </div>
          )}
          {type === "wishlist" && (
            <div className="flex justify-end mt-4">
              <Button
                productObject={productObject}
                styling={"text-white font-bold py-2 px-4 rounded"}
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                style={{ width: "120px", height: "50px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
