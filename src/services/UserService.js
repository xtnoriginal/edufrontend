import axios from 'axios';
const API_URL = 'http://localhost:8080';



// return the user data from the session storage
export const logout = () => {
    const url = `${API_URL}/auth/logout/`;
    return axios.get(url).then(response => response.data);
}





