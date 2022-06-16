import createDataContext from "./CreateDataContext";
import axios from "axios";
import { CartUrl } from "./URLs";
import { db } from '../firebase';

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
            db.collection('cart').onSnapshot(querySnapshot => {
                const phones = [];
          
                querySnapshot.docs.forEach(doc => {
                  const { 
                    title,
                    releaseDate,
                    platform,
                    maxUpgrade,
                    storage,
                    memory, 
                    chip,
                    camera,
                    resolution,
                    battery,
                    size,
                    maker,
                    mainImg,
                    img1,
                    img2,
                    img3,
                    price,
                    rating, } = doc.data();
                  phones.push({
                    id: doc.id,
                    title,
                    releaseDate,
                    platform,
                    maxUpgrade,
                    storage,
                    memory,
                    chip,
                    camera,
                    resolution,
                    battery,
                    size,
                    maker,
                    mainImg,
                    img1,
                    img2,
                    img3,
                    price,
                    rating,
                  })
                })
                dispatch({ type: 'get_cart_items', payload: phones })
              })             
        }
        catch(err) {
            console.log(err)
        }
    }
}

const postCartItem = () => {
    return async (obj) => {
        try {
            await db.collection('cart').add({
                title: obj.title,
                releaseDate: obj.releaseDate,
                platform: obj.platform,
                maxUpgrade: obj.maxUpgrade,
                storage: obj.storage,
                memory: obj.memory,
                chip: obj.chip,
                camera: obj.camera,
                resolution: obj.resolution,
                battery: obj.battery,
                size: obj.size,
                maker: obj.maker,
                mainImg: obj.mainImg,
                img1: obj.img1,
                img2: obj.img2,
                img3: obj.img3,
                price: obj.price,
                rating: obj.rating,
            })
        } catch(err) {
            console.log(err)
        }
    }
}

const deleteCartItem = (dispatch) => {
    return (id) => {
       db.collection('cart').doc(id).delete()
    }
}

export const { Context, Provider } = createDataContext(CartReducer, { getCartItems, postCartItem, deleteCartItem }, [])