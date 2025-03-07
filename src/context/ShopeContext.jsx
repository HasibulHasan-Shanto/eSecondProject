import { createContext, useEffect, useState } from "react";
import { products } from '../assets/assets'

export const ShopeContext = createContext();

const ShopeContextProvider = (props) =>{
    const currency = '$'
    const delevery_fee = 10
    const [search , setSearch] = useState('')
    const [showSearch , setShowSearch] = useState(false)
    const [cartItem , setCartItem] = useState([])

    const addToCart = async (itemId,size)=>{
        let cartData = structuredClone(cartItem)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] +=1
            }  
            else{
                cartData[itemId][size] =1
            }
        }

        else{
            cartData[itemId] ={}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)


    }


    useEffect(()=>{

    },[])

    const value ={
        products,currency , delevery_fee,
        search,setSearch,showSearch,setShowSearch ,
        cartItem, addToCart
    }
    return(
        <ShopeContext.Provider value={value}>
            {props.children}
        </ShopeContext.Provider>
    )
}

export default ShopeContextProvider