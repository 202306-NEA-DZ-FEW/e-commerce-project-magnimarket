import React, { useState } from "react"

const ShoppingCart = () => {
  const [items, setItems] = useState([])

  const addToCart = (product) => {
    setItems([...items, product])
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ShoppingCart
