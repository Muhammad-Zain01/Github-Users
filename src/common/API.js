import axios from 'axios';
export const get = (url) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {
            'Authorization': `Bearer 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`
        }
    };
    return axios.request(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}

