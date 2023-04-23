import axios from 'axios';

const API_URL = 'http://localhost:28080/admin-api/user/getUsers';

export function getUsers() {
    return axios.get(`${API_URL}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}
