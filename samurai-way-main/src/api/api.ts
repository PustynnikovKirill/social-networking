import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'ce802287-b6b0-40af-8b22-45208285eff9'
    }
})

export const usersAPI = {
    getUsers  (currentPage:number,pageSize:number) {
        return instance.get( `users?page=${currentPage}& count=${pageSize}`)
            .then(response=>response.data)
    }
}

