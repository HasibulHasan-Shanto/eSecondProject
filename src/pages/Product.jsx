import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ShopeContext } from '../context/ShopeContext'

const Product = () => {
  const {productId} = useParams()
  const {Product} = useContext(ShopeContext)
  const [productData , setProductData] = useState(false)

  const fetchProductData = async()=>{
    Product.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        console.log(item)
        return null
      }
    })
  }
  return (
    <div>Product</div>
  )
}

export default Product