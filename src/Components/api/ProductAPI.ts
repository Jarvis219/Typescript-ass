import {Product} from "../../Model/ProductModel";
export class ProductAPI{


    public static all() {
        const url: string = 'http://localhost:3001/products?_expand=category';
        return fetch(url, { method: "GET" })
    }
    
    public static find(id: string){
        const url: string = `http://localhost:3001/products/${id}?_expand=category`;
        return fetch(url, { method: "GET" })
    }
    public static update(id: string,data: Product){
        const url: string = `http://localhost:3001/products/${id}`;
        const products ={
            name:data.name,
            price:data.price,
            photo:data.photo,
            status:data.status,
            categoryId:data.categoryId
        }
        return fetch(url, { method: "PUT" ,
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(products)
    })
    }
    public static create(data:Product){
        const url: string = `http://localhost:3001/products`;
        const products ={
            name:data.name,
            price:data.price,
            photo:data.photo,
            status:data.status,
            categoryId:data.categoryId
            
        }
        return fetch(url, { method: "POST" ,
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(products)
    })
    }
    public static delete(id:string){
        const url: string = `http://localhost:3001/products/${id}`;
        return fetch(url, { method: "DELETE" });
    }

    // load các sản phẩm cùng danh mục
    public static findById(id:string,sort: string='asc'){
        const url: string = `http://localhost:3001/products?categoryId=${id}&_expand=category&_sort=price&_order=${sort}`;
        return fetch(url, { method: "GET" })
    }

    // tìm kiếm và sắp xếp
    public static searchProduct(data:string,sort: string='asc'){
        const url: string = `http://localhost:3001/products?q=${data}&_expand=category&_sort=price&_order=${sort}`;
        return fetch(url, { method: "GET" })
    }
    
    // phân trang
    public static pageList(num:number=1){
        const url: string = `http://localhost:3001/products?_expand=category&_page=${num}&_limit=4&_sort=id&_order=desc`;
        return fetch(url, { method: "GET" })
    }

}