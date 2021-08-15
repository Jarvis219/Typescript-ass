import { Contact } from "../../Model/Contact";

export class ContactAPI{
    public static all() {
        const url = `http://localhost:3001/contacts`;
        return fetch(url,{ method: "GET"});
    }
    public static find(id:string) {
        const url = `http://localhost:3001/contacts/${id}`;
        return fetch(url,{ method: "GET"});
    }
    public static creat(data:Contact){
        const url = `http://localhost:3001/contacts`;
        const contact = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            status: data.status,
        }
        return fetch(url,{ method: "POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(contact)
    });
    }
    public static delete(id:string){
        const url = `http://localhost:3001/contacts/${id}`;
        return fetch(url,{ method: "DELETE"})
    }
    public static update(id:string, data:Contact){
        const url = `http://localhost:3001/contacts/${id}`;
        const contact = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            status: data.status
        }
        return fetch(url,{ method: "PUT",
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(contact)
    });
    }

}