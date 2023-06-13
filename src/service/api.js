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
//?getConversation
export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users)
        console.log(response)
        return response.data;


    } catch (err) {
        console.log(err.message);
    }
}
//?newMessage
export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data)

    } catch (err) {
        console.log(err.message)
    }
}
//?get Message
export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (err) {
        console.log(err.message)
    }
}
//?upload Files
export const uploadFile = () => {

}
