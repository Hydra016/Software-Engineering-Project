import createDataContext from "./CreateDataContext";
import axios from "axios";
import { TopPicksUrl } from "./URLs";

const TopPicksReducer = (state, action) => {
    switch(action.type) {
        case 'get_TopPicks':
            return action.payload
        default:
            return state
    }
}

const getTopPicks = (dispatch) => {
    return async () => {
        try {
            const response = await axios.get(TopPicksUrl) 
            dispatch({ type: 'get_TopPicks', payload: response.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const { Context, Provider } = createDataContext(TopPicksReducer, { getTopPicks }, [])