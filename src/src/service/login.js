import { auth } from './api';

const autenticacao = async (data) => {
    return auth.post("login", data);
};

export { autenticacao };