import axios from 'axios';
export const get = (url) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        // headers: {
        //     'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
        // }
    };
    return axios.request(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}

