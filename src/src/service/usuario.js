import { app } from './api';

// endpoint de cadastro 
const post_usuario = async (data) => {
    return app.post('user', data);
}

// endpoint para buscar listagem paginada
const get_listagem_usuarios = async () => {
    return app.get('user')
}

// endpoit para buscar usuario pelo ID
const get_usuario = async (id) => {
    return app.get(`user/${id}`)
}

// endpoint para editar uma usuario
const put_usuario = async (id, data) => {
    return app.put(`user/${id}`, data)
}

export { 
    post_usuario, 
    get_listagem_usuarios,
    get_usuario,
    put_usuario
};