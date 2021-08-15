var userAPI = /** @class */ (function () {
    function userAPI() {
    }
    userAPI.all = function () {
        var url = 'http://localhost:3001/users';
        return fetch(url, { method: "GET" });
    };
    userAPI.find = function (id) {
        var url = "http://localhost:3001/users/" + id;
        // console.log(url)
        return fetch(url, { method: "GET" });
    };
    userAPI.login = function (data) {
        var url = 'http://localhost:3001/signin';
        // console.log(data);
        var user = {
            email: data.email,
            password: data.password
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user)
        });
    };
    userAPI.creat = function (data) {
        var url = 'http://localhost:3001/register/';
        // console.log(data);
        var user = {
            name: data.name,
            email: data.email,
            password: data.password,
            permissions: data.permissions,
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user)
        });
    };
    userAPI.update = function (id, data) {
        var url = "http://localhost:3001/users/" + id;
        var user = {
            name: data.name,
            email: data.email,
            password: data.password,
            permissions: data.permissions,
        };
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user)
        });
    };
    userAPI.delete = function (id) {
        var url = "http://localhost:3001/users/" + id;
        return fetch(url, { method: "DELETE" });
    };
    return userAPI;
}());
export { userAPI };
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
