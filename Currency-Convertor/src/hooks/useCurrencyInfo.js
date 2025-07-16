import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        // fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies')
        // fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
        //  fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
        //  fetch('https://v6.exchangerate-api.com/v6/cc12c6b38a9d400c8f2dca40/latest/currencies/inr.json')
         fetch('https://api.exchangeratesapi.io/latest?access_key=4a350f2e7d2dd6e80c1f9d48f2e7ff96/${currency}.json')
        .then((res) => res.json()) // converting data into string to JSON format
    .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;