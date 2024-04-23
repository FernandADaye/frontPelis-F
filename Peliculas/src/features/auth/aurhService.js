import axios from "axios";

const API_URL = "https://tan-strange-firefly.cyclic.app/users/";

// peticion al backend
const register = async (userData) => {
const response = await axios.post(API_URL, userData);

return response.data;
};

// peticion al backend para login
const login = async (userData) => {
const response = await axios.post(API_URL + "login", userData);

if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
}

return response.data;
};


//  logOut
const logout =()=>{
    localStorage.removeItem('user')
}

const authService = {
register,
login,
logout
};
export default authService;
