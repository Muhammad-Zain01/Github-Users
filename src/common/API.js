import axios from 'axios';
export const get = (url) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {
            'Authorization': 'Bearer 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'
        }
    };
    return axios.request(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        })
}

