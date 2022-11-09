import { ADD_TO_CART, REMOVE_TO_CART } from "../constant"

export const addToCart = (data)=>{
    
    return {
        data,
        type:ADD_TO_CART
    }
}
export const removeToCart = ()=>{
    
    return {
       
        type:REMOVE_TO_CART
    }
}
