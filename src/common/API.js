import axios from 'axios';
export const get = (url) => {
    const Auth = {
        'Authorization': ''
    }
    const headers = Auth['Authorization'] != '' ? Auth : {}
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: headers
    };
    return axios.request(config)
}

