import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const PhonesContext = createContext();

export function PhonesProvider({children}) {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        const res = await axios.get(url);
        setData(res.data);
    }

    useEffect(() => {
        fetchData('https://orange-cars-rest-78-154-143-198.loca.lt/data');
    },[])

    return (
        <PhonesContext.Provider value={{data: data}}>
            {children}
        </PhonesContext.Provider>
    )
}

export default PhonesContext;