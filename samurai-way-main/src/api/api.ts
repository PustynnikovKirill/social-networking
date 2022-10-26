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
        return instance.post(`follow/${userId}`)

    },
    unfollow (userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId:number) {
        return  profileAPI.getProfile(userId)

    }
}
export const profileAPI = {
    getProfile (userId:number) {
        console.warn ('Obsolete method. Please profileAPI object.')
        return  instance.get(`profile/`+ userId)
    },
    getStatus (userId:number) {
        return  instance.get(`profile/status/`+ userId)
    },
    updateStatus (status:string) {
        return  instance.put(`profile/status/`, {status:status})
    }

}


export const authAPI = {
    me () {
       return instance.get(`auth/me`)


    }
}

