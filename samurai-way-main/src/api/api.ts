import axios from "axios";
import {FormDataProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '854b8180-5cc0-4505-a2c6-2abb4e98dc20'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}& count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)

    }
}
export const profileAPI = {
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: any) {
        let formData = new FormData()
        formData.append('image',photoFile)
        return instance.put(`profile/photo`, formData,{
           headers:{
               'Content-Type': 'multipart/form-data'
           }
        })
    },
    saveProfile (profile:FormDataProfileType){
        return instance.put(`profile`, profile)
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captchaUrl: string | null) {
        return instance.post(`auth/login`, {email, password, rememberMe,captchaUrl})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },

}

