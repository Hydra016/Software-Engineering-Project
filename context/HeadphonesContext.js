import createDataContext from "./CreateDataContext";
import axios from "axios";
import { HeadphonesUrl } from "./URLs";

const HeadphonesReducer = (state, action) => {
    switch(action.type) {
        case 'get_Headphones':
            return action.payload
        default:
            return state
    }
}

const getHeadphones = (dispatch) => {
    return async () => {
        try {
            const response = await axios.get(HeadphonesUrl) 
            dispatch({ type: 'get_Headphones', payload: response.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const { Context, Provider } = createDataContext(HeadphonesReducer, { getHeadphones }, [])