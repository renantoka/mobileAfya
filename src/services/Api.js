import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://dev-marcilio-afya.herokuapp.com',
});

export default Api;