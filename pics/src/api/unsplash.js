import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HPRD5Jm5X9MfXYz1YKR4urmqs101Uljl0uyQ0kDT390'
    }
})