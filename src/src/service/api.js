import axios from "axios";
import {URL} from '../baseURL/baseURL';

const baseURL = URL;

const app = axios.create({
    baseURL,
});

app.interceptors.request.use(
    (config) => {
        return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        };
    },
    (error) => Promise.reject(error)
);

app.interceptors.response.use(
    (config) => {
        return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        };
    },
    function (error) {
        if(error.response.status == '498') {
            // store.dispatch()
            // store.dispatch({ type: 'SET_LOGOUT' });

        }
        // return console.log(error);

        return Promise.reject(error)
    }
);

const auth = axios.create({
    baseURL,
});

export { auth, app };