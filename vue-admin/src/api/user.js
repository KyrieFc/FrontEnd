import axios from 'axios';

const API_URL = 'http://localhost:28080/admin-api/user/update-profile';

export function updateUser(token, userData) {
    return axios.put(`${API_URL}`, userData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}


