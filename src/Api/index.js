const customFetch = async (page = 1, limit = 30) => {
    const url = 'https://api.coincap.io/v2/assets';
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await response.json();
        if (data) {
            console.log("Data", data);
            return {
                data: data.data,
                success: true
            }
        }

        throw new Error(data.message);
    }
    catch (error) {
        console.error(error);
        return {
            message: error.message,
            success: false
        }
    }
    return fetchData();
}

const getData = () => {
    return customFetch(customFetch(page, limit));
}
export default getData();