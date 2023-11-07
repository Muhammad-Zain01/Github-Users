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
}

