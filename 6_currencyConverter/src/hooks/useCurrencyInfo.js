import { useEffect, useState } from "react";

// Making a Custom hook
function useCurrencyInfo(currency){
     const [data, setData] = useState({}) // used to store the data

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // becoz api se file json mein nahi , string mein aayegi usko json mein convert krna pdega
        .then((res) => setData(res[currency])) // to hold the data becoz useState 
        // console.log(data);
    }, [currency]) // currency ki value agar change ho then we wanna call it again so its in dependency array
    
    // console.log(data);
    return data;
}

export default useCurrencyInfo;