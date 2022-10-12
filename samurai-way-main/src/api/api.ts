import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'a05e4936-3d20-4899-8b3f-14b5bf4433fb'
    }
})

export const usersAPI = {
    getUsers  (currentPage:number,pageSize:number) {
        return instance.get( `users?page=${currentPage}& count=${pageSize}`)
            .then(response=>response.data)
    },
    follow (userId:number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },
    unfollow (userId:number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile (userId:number) {
        return  instance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)

    }
}

export const authAPI = {
    me () {
       return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)


    }
}

