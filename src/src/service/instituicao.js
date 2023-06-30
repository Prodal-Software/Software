import { app } from './api';

// endpoint de cadastro 
const post_instituicao = async (data) => {
    return app.post('instituicao', data);
}

// endpoint para buscar listagem paginada
const get_listagem_instituicoes = async () => {
    return app.get('instituicao');
}

// endpoit para buscar instituicao pelo ID
const get_instituicao = async (id) => {
    return app.get(`instituicao/${id}`);
}

// endpoint para editar uma instituicao
const put_instituicao = async (id, data) => {
    return app.put(`instituicao/${id}`, data);
}

export { 
    post_instituicao, 
    get_listagem_instituicoes,
    get_instituicao,
    put_instituicao
};