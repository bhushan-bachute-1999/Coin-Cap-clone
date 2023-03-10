const fetchExchangeRate = async (from, to, amount) => {
    try {
        const config = {
            method: "GET",
            headers: {
                apikey: "Kd7dkaLaABQbd5btTXwYbYRLsAiaWa4N"
            },
            redirect: "follow"
        }
        const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`
        const response = await fetch(url, config);
        const result = await response.json();
        console.log("Success", result.success);
        if (result.success) {
            console.log("Result", result);
            return {
                result: result.result,
                success: true
            }
        }
        throw new Error("Error in conversion");
    }
    catch (error) {
        console.error("Error");
        return {
            message: error.message,
            success: false
        }
    }
}

const getExchangeRates = (from, to, amount) => {
    return fetchExchangeRate(from, to, amount);
}

export default getExchangeRates;  