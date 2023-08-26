const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

// ALL API CALLS

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const response = await fetch(BASE_URL + url, {
            headers,
            params,
        });
        const data = response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};