import createDataContext from "./CreateDataContext";
import axios from "axios";
import { PhoneUrl } from "./URLs";

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
            const response = await axios.get(PhoneUrl) 
            dispatch({ type: 'get_Phones', payload: response.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const { Context, Provider } = createDataContext(PhonesReducer, { getPhones }, [])