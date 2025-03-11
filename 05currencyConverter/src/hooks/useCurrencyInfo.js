import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // ✅ Corrected string interpolation
            .then((res) => res.json()) // ✅ Fixed incorrect .json() call
            .then((res) => setData(res[currency]))
            .catch((error) => console.error("Error fetching currency data:", error)); // ✅ Added error handling
    }, [currency]);

    return data;
};

export default useCurrencyInfo;
