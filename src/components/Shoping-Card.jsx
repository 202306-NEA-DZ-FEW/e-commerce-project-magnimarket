import React, { useState } from "react"
import { Link } from "react-router-dom"

const Wishlist = () => {
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [count, setCount] = useState(1)

  const addToCart = (product, count) => {
    setItems([...items, { product, count }])
    setTotalPrice(totalPrice + product.price * count)
  }

  const removeFromCart = (product) => {
    const updatedItems = items.filter((item) => item.product.id !== product.id)
    setItems(updatedItems)
    setTotalPrice(totalPrice - product.price * product.count)
  }

  return (
    <>
      <div className="card">
        <div className="container">
          <div>
            <img src={img} alt="no image" />
          </div>
        </div>
      </div>
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div>{item.count} qte</div>
              <button onClick={() => setCount((count) => count + 1)}>+</button>
              <button
                onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
              >
                -
              </button>
              <button onClick={() => setCount(1)}>reset</button>
              {item.product.name} - ${item.product.price}
              <button onClick={() => removeFromCart(item.product)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={() => addToCart(product, count)}>Add to Cart</button>
      </div>
    </>
  )
}

export default Wishlist
