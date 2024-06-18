import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/questions",
})

export const getQuestions = async () => {
    const response = await api.get('/questions')
    return response.data
}