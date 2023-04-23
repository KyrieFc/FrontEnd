import request from '@/utils/request'
import {getAccessToken} from "@/utils/auth";

// 用户登录
export function login(username, password) {
    const url = 'admin-api/user/login'
    const data = {
        username,
        password
    }
    return request({
        url: '/user/login',
        method: 'post',
        data: data
    })
}


// 获取用户信息
export function getInfo() {
    return request({
        url: '/user/profile/get',
        method: 'get',
    })
}
