import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}

const deleteUser = (userId) => axios.delete('api/v1/participant', { data: { id: userId } });

const getUsersWithPaginate = (page, limit) => axios.get(`api/v1/participant?page=${page}&limit=${limit}`);

const getAllUsers = () => axios.get('api/v1/participant/all');

const postLogin = (email, password) => axios.post('api/v1/login', { email, password, delay: 5000 })

const postRegister = (email, username, password) => axios.post('api/v1/register', { email, username, password })

export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUsersWithPaginate, postLogin, postRegister }