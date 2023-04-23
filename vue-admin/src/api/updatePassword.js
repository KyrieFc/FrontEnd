import axios from 'axios';

const API_URL = 'http://localhost:28080/admin-api/user/updatePassword';
export function updatePassword(oldPWD,newPWD, token) {

    return axios.post(`${API_URL}`,{newPWD:newPWD,oldPWD:oldPWD}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
