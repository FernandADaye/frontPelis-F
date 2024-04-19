import axios from 'axios'

const API_URL = 'https://tan-strange-firefly.cyclic.app/users/crear'


// peticion al backend
const register = async(userData) =>{
    const response = await axios.post(API_URL, userData)

    return response.data
}

const authService={
    register
}
export default authService