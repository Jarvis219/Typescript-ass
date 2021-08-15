import { User } from "../../Model/UserModel";
export class userAPI {
    public static all() {
        const url: string = 'http://localhost:3001/users';
        return fetch(url, { method: "GET" })
    }
    public static find(id:string){
        const url: string = `http://localhost:3001/users/${id}`;
        // console.log(url)
        return fetch(url, { method: "GET" })
    }
    
    public static login(data:User){
        const url:string = 'http://localhost:3001/signin';
        // console.log(data);
        const user ={
            email:data.email,
            password:data.password
        }
        return fetch(url, {
            method: "POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(user)
        })
    }
    public static creat(data:User){
        const url:string = 'http://localhost:3001/register/';
        // console.log(data);
        const user ={
            name:data.name,
            email:data.email,
            password:data.password,
            permissions:data.permissions,
        }
        return fetch(url, {
            method: "POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(user)
        })
    }
    public static update(id:string,data:User){
        const url:string = `http://localhost:3001/users/${id}`;
        const user ={
            name:data.name,
            email:data.email,
            password:data.password,
            permissions:data.permissions,
        }
        return fetch(url, {
            method: "PUT",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(user)
        })
    }
    public static delete(id:string){
        const url: string = `http://localhost:3001/users/${id}`;
        return fetch(url, { method: "DELETE" })
    }
}
// import axios from "axios"
// axios.defaults.baseURL = 'http://localhost:3002/users';
// export class axiosRequest {
//     public static get(options: object) {
//         return axios({
//             method: "GET",
//             ...options
//         });
//     }
//     public static put(options: object) {
//         return axios({
//             method: "PUT",
//             ...options
//         });
//     }
//     public static post(options: object) {
//         return axios({
//             method: "POST",
//             ...options
//         });
//     }
//     public static delete(options: object) {
//         return axios({
//             method: "DELETE",
//             ...options
//         });
//     }
// }
// export class userAPI {
//     public static all() {
//         const url: string = 'http://localhost:3002/users';

//     }
// }