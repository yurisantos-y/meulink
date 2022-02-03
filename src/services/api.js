import axios from 'axios';

export const key = "1d8e326a17a6e71e8e672ec119901d1a080fedb9";

const api = axios.create ({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}` 
    }
})

export default api;