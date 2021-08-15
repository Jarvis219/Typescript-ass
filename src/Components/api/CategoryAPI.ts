import { Category } from "../../Model/CateMode";
export class CategoryAPI{
    public static all() { 
        const url: string = 'http://localhost:3001/categories';
        return fetch(url,{ method: "GET"});
    }
    public static find(id:string){
        const url: string = `http://localhost:3001/categories/${id}`;
        return fetch(url,{ method: "GET"});
    }
    public static create(data:Category){
        const url: string = 'http://localhost:3001/categories';
        const categories ={
            name:data.name
        }
        return fetch(url, {
            method: "POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(categories)
        })
    }
    public static update(id:string, data:Category){
        const url: string = `http://localhost:3001/categories/${id}`;
        const categories ={
            name:data.name
        }
        return fetch(url, {
            method: "PUT",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(categories)
        })
    }
    public static delete(id:string){
        const url: string = `http://localhost:3001/categories/${id}`;
        return fetch(url,{ method: "DELETE"});
    }
    public static categoryIsne(id:string){
        const url: string = `http://localhost:3001/categories?id_ne=${id}`;
        return fetch(url,{ method: "GET"});
    }
}