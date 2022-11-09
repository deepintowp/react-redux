import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";
const initState = {
    cartData:[]
}
export default function cartItem(state=[], action){
    switch (action.type) {
        case ADD_TO_CART:
            //console.log(action.data)
            return [...state, {data: action.data}]
            break;
        case REMOVE_TO_CART:
            //console.log(action.data)
            state.pop()
            return [...state]
            break;
        
        default:
            return state
            break;
    }
}

