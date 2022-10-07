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
    }

}
