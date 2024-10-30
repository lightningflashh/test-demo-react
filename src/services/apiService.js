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

const getQuizByUser = () => axios.get('api/v1/quiz-by-participant');

const getDataQuiz = (id) => axios.get(`api/v1/questions-by-quiz?quizId=${id}`);

const postSubmitQuiz = (data) => axios.post(`api/v1/quiz-submit`, { ...data });

const postCreateNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.post('api/v1/quiz', data);
}

const getAllQuizForAdmin = () => axios.get(`api/v1/quiz/all`);

const putUpdateQuizForAdmin = (id, name, description, difficulty, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.put('api/v1/quiz', data);
}

const deleteQuizForAdmin = (id) => {
    return axios.delete(`api/v1/quiz/${id}`);
}

const postCreateNewQuestionForQuiz = (quiz_id, description, questionImage) => {
    const data = new FormData();
    data.append('quiz_id', quiz_id);
    data.append('description', description);
    data.append('questionImage', questionImage);
    return axios.post('api/v1/question', data);
}

const postCreateNewAnswerForQuestion = (description, correct_answer, question_id) =>
    axios.post('api/v1/answer', { description, correct_answer, question_id });

const postAssignQuiz = (quizId, userId) => axios.post('api/v1/quiz-assign-to-user', { quizId, userId });

const getQuizWithQA = (quizId) => axios.get(`api/v1/quiz-with-qa/${quizId}`);

const postUpsertQA = (data) => axios.post(`api/v1/quiz-upsert-qa`, { ...data });

const logout = (email, refresh_token) => axios.post('api/v1/logout', { email, refresh_token });

const getOverview = () => axios.get('api/v1/overview');

export {
    postCreateNewUser, getAllUsers, putUpdateUser,
    deleteUser, getUsersWithPaginate, postLogin,
    postRegister, getQuizByUser, getDataQuiz,
    postSubmitQuiz, postCreateNewQuiz, getAllQuizForAdmin,
    putUpdateQuizForAdmin, deleteQuizForAdmin,
    postCreateNewQuestionForQuiz, postCreateNewAnswerForQuestion,
    postAssignQuiz, getQuizWithQA, postUpsertQA,
    logout, getOverview
}