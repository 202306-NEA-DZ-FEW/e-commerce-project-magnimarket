import React, { useState } from "react"

const ShoppingCart = () => {
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const addToCart = (product) => {
    setItems([...items, product])
    setTotalPrice(totalPrice + product.price)
  }

  const removeFromCart = (product) => {
    const index = items.indexOf(product)
    if (index > -1) {
      items.splice(index, 1)
      setItems([...items])
      setTotalPrice(totalPrice - product.price)
    }
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ShoppingCart
