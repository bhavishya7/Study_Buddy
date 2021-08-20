import axios from "axios";

const api = "http://localhost:5000"

export const sendUserDB = async (userData) => {
    try{
        const {data} = await axios.post(`${api}/auth/addUser`, userData)
        return data
    } catch(e){
        console.log(e)
    }
}