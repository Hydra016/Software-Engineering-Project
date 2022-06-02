import createDataContext from "./CreateDataContext";
import axios from "axios";
import { CartUrl } from "./URLs";

const CartReducer = (state, action) => {
    switch(action.type) {
        case 'get_cart_items':
            return action.payload
        case 'delete_cart_item' : 
            return state.filter((item) => item.id !== action.payload);
        case 'post_cart_item' : 
            return state
        default:
            return state
    }
}


const getCartItems = (dispatch) => {
    return async () => {
        try {
            const response = await axios.get(CartUrl) 
            dispatch({ type: 'get_cart_items', payload: response.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}

const postCartItem = (dispatch) => {
    return async (obj) => {
        try {
            const response = await axios.post(CartUrl, { obj })
            dispatch({ type: 'post_cart_item', payload: response.data })
            console.log(`response: ${response.data}`)
        } catch(err) {
            console.log(err)
        }
    }
}

const deleteCartItem = (dispatch) => {
    return async (id) => {
        await axios.delete(`${CartUrl}/${id}`);
        dispatch({ type: 'delete_cart_item', payload: id });
    }
}

export const { Context, Provider } = createDataContext(CartReducer, { getCartItems, postCartItem, deleteCartItem }, [])