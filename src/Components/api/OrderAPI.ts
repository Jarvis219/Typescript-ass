import {CheckOut} from '../../Model/checkOutModel.js';
export class OrderAPI{
    public static all() {
        const url = 'http://localhost:3001/orders';
        return fetch(url, { method: "GET" });
    }
    
    public static create(data:CheckOut){
        const dataNew={
            name:data.name,
            email:data.email,
            phone:data.phone,
            address:data.address,
            product:data.product,
            sumMoney:data.sumMoney
        }
        const url = 'http://localhost:3001/orders';
        return fetch(url, { method: "POST",
    headers:{
        "content-type": "application/json"
    },
    body:JSON.stringify(dataNew)
    });
    }

    public static update(id:string, data:CheckOut){
        const dataNew={
            name:data.name,
            email:data.email,
            phone:data.phone,
            address:data.address,
            product:data.product,
            sumMoney:data.sumMoney
        }
        const url = 'http://localhost:3001/orders';
        return fetch(url, { method: "PUT",
    headers:{
        "content-type": "application/json"
    },
    body:JSON.stringify(dataNew)
    });
    }
    public static find(id:string) {
        const url = `http://localhost:3001/orders/${id}`;
        return fetch(url, { method: "GET" });
    }
    public static deleted(id:string) {
        const url = `http://localhost:3001/orders/${id}`;
        return fetch(url, { method: "DELETE" });
    }
}