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
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const fetchApiConfig = async () => {
    try {
        const response = await fetchDataFromApi("/configuration");
            const url = {
                backdrop: response.images.secure_base_url + "original",
                poster: response.images.secure_base_url + "original",
                profile: response.images.secure_base_url + "original",
            }
        return url;
        } catch (err) {
            console.log(err);
            return err;
        }
};