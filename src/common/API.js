import axios from 'axios';
export const get = (url) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        // headers: {
        //     'Authorization': 'Bearer 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'
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

