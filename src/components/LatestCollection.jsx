import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const LatestCollection = () => {
    const [latestProduct , setlatestProduct] = useState([])
    useEffect(()=>{
        setlatestProduct(products.slice(0,10))
    },[])

    const { products } =useContext(ShopeContext)

  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl">
            <Title text1={"Latest"} text2={"Collection"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>
        {/* Rendering product */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {latestProduct.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default LatestCollection






// import React, { useContext, useEffect, useState } from 'react';
// import { ShopeContext } from '../context/ShopeContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const LatestCollection = () => {
//     const [latestProduct, setlatestProduct] = useState([]);
//     const { products } = useContext(ShopeContext);

//     useEffect(() => {
//         if (products) {
//             setlatestProduct(products.slice(0, 10));
//         }
//     }, [products]);

//     return (
//         <div className='my-10'>
//             <div className="text-center py-8 text-3xl">
//                 <Title text1={"Latest"} text2={"Collection"}/>
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//                     Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//                 </p>
//             </div>
//             {/* Rendering product */}
//             {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//                 {latestProduct.map((item, index) => (
//                     <ProductItem key={index} id={item._id} image={[item.image]} name={item.name} price={item.price}/>
//                 ))}
//             </div> */}
//         </div>
//     );
// };

// export default LatestCollection;