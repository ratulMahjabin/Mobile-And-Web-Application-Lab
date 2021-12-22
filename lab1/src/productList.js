import React, { useState, useEffect } from 'react'
import Product from './Components/product-cart'
import data from './data.json'

export default function ProductList() {
  const [products, setProducts] = useState(data)

  function increaseLike(product) {
    let updatedList = products.filter((p) => p !== product)
    product.likes += 1
    updatedList = [...updatedList, product]
    updatedList.sort((a, b) => b.likes - a.likes)
    setProducts(updatedList)
  }

  useEffect(() => {
    let updatedList = products
    updatedList.sort((a, b) => b.likes - a.likes)
    setProducts(updatedList)
  }, [products])

  return (
    <>
      {/* {console.log(products)} */}
      {products.map((product) => (
        <>
          <Product product={product} />
          <button onClick={() => increaseLike(product)}>
            <p>{product.likes}</p>
          </button>
          <hr />
        </>
      ))}
    </>
  )
}
