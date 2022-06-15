import createDataContext from "./CreateDataContext";
import axios from "axios";
import { PhoneUrl } from "./URLs";
import { db } from '../firebase';

const PhonesReducer = (state, action) => {
    switch(action.type) {
        case 'get_Phones':
            return action.payload
        default:
            return state
    }
}

const getPhones = (dispatch) => {
    return async () => {
        try {
            db.collection('phones').onSnapshot(querySnapshot => {
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
                dispatch({ type: 'get_Phones', payload: phones })
              })             
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const { Context, Provider } = createDataContext(PhonesReducer, { getPhones }, [])