import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);

    } catch (err) {
        console.log(err.message)
    }
}
//?getUser
export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}
//?setConversation
export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
        console.log(data)

    } catch (err) {
        console.log(err.message);
    }
}