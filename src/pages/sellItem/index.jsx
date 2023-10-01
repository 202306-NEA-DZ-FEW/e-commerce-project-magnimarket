import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth } from "@/util/firebase"
import axios from "axios"
import { fetcher } from "@/util/API"
import Link from "next/link"

function Index() {
  const [authUser, setAuthUser] = useState(null)
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    description: "",
    categoryId: "",
    images: ["https://source.unsplash.com/random"],
  })
  const [createdProduct, setCreatedProduct] = useState(null)
  const [categories, setCategories] = useState([])
  const [newImageLink, setNewImageLink] = useState("") // State to store the new image link

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    // Fetch categories when the component mounts
    fetchCategories()

    // Make sure to unsubscribe when the component unmounts to prevent memory leaks.
    return () => unsubscribe()
  }, [])

  // Function to fetch categories
  const fetchCategories = async () => {
    try {
      const response = await fetcher("categories")
      setCategories(response) // Assuming response is an array of categories
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData({
      ...productData,
      [name]: value,
    })
  }

  const handleImageLinkChange = (e) => {
    setNewImageLink(e.target.value)
  }

  const handleAddImageLink = () => {
    if (newImageLink) {
      setProductData({
        ...productData,
        images: [...productData.images, newImageLink],
      })
      setNewImageLink("") // Clear the input field after adding the image link
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/products/",
        productData,
      )
      if (response.status === 201) {
        console.log("Product created successfully")
        setCreatedProduct(response.data)
        // Clear the form by resetting the productData
        setProductData({
          title: "",
          price: 0,
          description: "",
          categoryId: "",
          images: ["https://source.unsplash.com/random"],
        })
      } else {
        console.log(`Failed to create product. Status code: ${response.status}`)
      }
    } catch (error) {
      console.error("Error creating product:", error)
    }
  }
  console.log(productData)

  return (
    <div>
      {authUser ? (
        <div className="mx-auto max-w-md p-6 bg-white rounded-lg shadow-lg">
          <p className="text-center mb-4">
            Buy an awesome Item, {authUser.email}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={productData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoryId" className="block text-gray-700">
                Category:
              </label>
              <select
                id="categoryId"
                name="categoryId"
                value={productData.categoryId}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-accent"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700">
                Images:
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="images"
                  name="images"
                  value={newImageLink}
                  onChange={handleImageLinkChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-accent"
                />
                <button
                  type="button"
                  onClick={handleAddImageLink}
                  className="bg-accent text-white px-4 py-2 ml-2 rounded-lg hover:bg-purple-950 focus:outline-none"
                >
                  Add Image
                </button>
              </div>
            </div>
            <div className="mb-4">
              <ul>
                {productData.images.map((image, index) => (
                  <li key={index}>{image}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-purple-950 focus:outline-none"
              >
                Create Product
              </button>
            </div>
          </form>

          {createdProduct && (
            <div>
              <h2 className="text-center text-xl font-semibold mb-2">
                Created Product Information:
              </h2>
              <p>Title: {createdProduct.title}</p>
              <p>Price: {createdProduct.price}</p>
              <p>Description: {createdProduct.description}</p>
              <p>Category: {createdProduct.category.name}</p>
              <p>Category: {createdProduct.images}</p>
            </div>
          )}
        </div>
      ) : (
        <Link
          className="h-screen bg-accent flex justify-center items-center hover:underline text-white text-6xl font-semibold"
          href={"/signin"}
        >
          PLEASE SIGN IN!
        </Link>
      )}
    </div>
  )
}

export default Index
