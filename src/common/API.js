import axios from 'axios';

export const get = (url) => {
    return axios.get(url)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}

