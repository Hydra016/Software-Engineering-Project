import createDataContext from "./CreateDataContext";
import axios from "axios";
import { ExtrasUrl } from "./URLs";

const ExtrasReducer = (state, action) => {
    switch(action.type) {
        case 'get_Extras':
            return action.payload
        default:
            return state
    }
}

const getExtras = (dispatch) => {
    return async () => {
        try {
            const response = await axios.get(ExtrasUrl) 
            dispatch({ type: 'get_Extras', payload: response.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const { Context, Provider } = createDataContext(ExtrasReducer, { getExtras }, [])