import React,{createContext, useEffect} from "react";
import { useState } from "react";
// import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const [all_product,setAll_Product] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
    
    },[])
    const contextValue = {all_product};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider ;