import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const PhonesContext = createContext();

export function PhonesProvider({children}) {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const response = axios.get("https://eight-lions-argue-78-154-143-198.loca.lt/data");
        setData(response.data);
    },[])

    return (
        <PhonesContext.Provider value={{data: data}}>
            {children}
        </PhonesContext.Provider>
    )
}

export default PhonesContext;