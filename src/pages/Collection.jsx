import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import Image from '../components/Image'
import drowdownIcon from "../assets/dropdown_icon.png";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products} = useContext(ShopeContext)
  const [showFilter , setShowFilter] = useState(false)
  const [filterProduct , setFilterProduct] = useState([])
  const [category , setCategory] = useState([])
  const [subCategory , setSubCategory] = useState([])
  const toggleCategory = (e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice()
    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category))
    }
    setFilterProduct(productCopy)
  }
  useEffect(()=>{
    setFilterProduct(products)
  },[])
  useEffect(()=>{
    applyFilter()
  },[category, subCategory])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter  option  */}
      <div className="min-w-60 ">
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <Image className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ''}`} imgSrc={drowdownIcon} imgAlt={drowdownIcon}/>
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"}/>
          {/* Product sort */}
          <select className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low-High</option>
            <option value="high-low">Sort by : High-Low</option>
          </select>
        </div>
        {/* Map Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProduct.map((item, index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
