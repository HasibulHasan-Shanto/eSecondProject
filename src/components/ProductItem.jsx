import React, { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import { Link } from 'react-router-dom'
import Image from './Image'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopeContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className="overflow-hidden">
            <Image className={'hover:scale-110 transition ease-in-out'} imgSrc={image[0]}/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem


// import React, { useContext } from 'react';
// import { ShopeContext } from '../context/ShopeContext';
// import { Link } from 'react-router-dom'; // Correct import
// import Image from './Image';

// const ProductItem = ({ id, image, name, price }) => {
//     const { currency } = useContext(ShopeContext);

//     return (
//         <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//             <div className="overflow-hidden">
//                 <Image imgSrc={image[0]}/>
//             </div>
//             <p className='pt-3 pb-1 text-sm'>{name}</p>
//             <p className='text-sm font-medium'>{currency}{price}</p>
//         </Link>
//     );
// };

// export default ProductItem;