import {Component} from "../../Component.js";
import {Header} from "../header/header.js";
import {Footer} from "../footer/footer.js";
import { ProductAPI } from "../../api/ProductAPI.js";
export class CartPage extends Component {
    public template(): string {
        return `
        <div>
        ${Header.render()}

        <div class="container my-20">
                    <div class="row flex justify-center items-center"> 
                        <div class="col-sm-12 col-md-10 col-md-offset-1">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th class="text-center">Price</th>
                                        <th class="text-center">Total</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody id="data-cart">
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td><h3>Total</h3></td>
                                        <td class="text-right"><h3 id="monney-sum">$31.53</h3></td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>   </td>
                                        <td>  <a href="/" >
                                        <button type="button" class="btn btn-default">
                                            <span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></a></td>
                                        <td>
                                        <a href="#/checkout" >
                                        <button type="button" class="btn btn-success">
                                            Checkout <span class="glyphicon glyphicon-play"></span>
                                        </button></a></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
            </div>
            ${Footer.render()}
        </div> 
        `;
    }
    public async afterRender() {
        await Header.afterRender();
        listDataCart();
        async function listDataCart(){
            let cart:object[] = JSON.parse(localStorage.getItem('cart')!);
            let totals:any= [];
            let setCheckOut:any= [];
            let count:number=0;
            // console.log(data.length)
            cart.forEach((element:any)=>{
                 new Promise((resolve:any, reject:any) => {
                     console.log(typeof element.product);
                    resolve(ProductAPI.find(element.product))
                })
                .then((data:any)=>data.json())
                .then((data)=>{
                    
                    let monney:number =  data.price * parseInt(element.amount);

                    setCheckOut.push({
                        product: data.name,
                        amount: element.amount,
                        price: data.price,
                        sum: monney,
                    })
                    
                    return `
                    <tr>
                        <td class="col-sm-8 col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="${data.photo}" style="width: 72px; height: 72px;"> </a>
                            <div class="media-body ml-2">
                                <h4 class="media-heading"><a href="#">${data.name}</a></h4>
                                <h5 class="media-heading"> by <a href="#">${data.category.name}</a></h5>
                            </div>
                        </div></td>
                        <td class="col-sm-1 col-md-1" style="text-align: center">
                        <input type="email" class="form-control text-center" id="exampleInputEmail1" value="${element.amount}" disabled="disabled">
                        </td>
                        <td class="col-sm-1 col-md-1 text-center "><strong>$${data.price}</strong></td>
                        <td class="col-sm-1 col-md-1 text-center "><strong>$<span class="data-monney">${monney}</span</strong></td>
                        <td class="col-sm-1 col-md-1">
                        
                        </tr>
                    `
                }).then((data)=>{
                    // console.log(data.toString())
                    totals.push(data)
                    
                    
                    count =count+1;
                    // console.log(cart.length)
                    if(count==cart.length){
                        // console.log(count)
                        localStorage.setItem('checkout',JSON.stringify(setCheckOut));
                        document.querySelector('#data-cart')!.innerHTML=totals.join("");
                        sumMonney();
                    }
                })
                // let cart =  ProductAPI.find(element.product);
                // let dataCart =  cart.json();
                // let monney:number =  dataCart.price * parseInt(element.amount);
                
                // return `
                //     <tr>
                //     <td class="col-sm-8 col-md-6">
                //     <div class="media">
                //         <a class="thumbnail pull-left" href="#"> <img class="media-object" src="${dataCart.photo}" style="width: 72px; height: 72px;"> </a>
                //         <div class="media-body">
                //             <h4 class="media-heading"><a href="#">Product name</a></h4>
                //             <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                //             <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                //         </div>
                //     </div></td>
                //     <td class="col-sm-1 col-md-1" style="text-align: center">
                //     <input type="email" class="form-control text-center" id="exampleInputEmail1" value="3" disabled="disabled">
                //     </td>
                //     <td class="col-sm-1 col-md-1 text-center"><strong>$${dataCart.price}</strong></td>
                //     <td class="col-sm-1 col-md-1 text-center"><strong>$${monney}</strong></td>
                //     <td class="col-sm-1 col-md-1">
                //     <button type="button" class="btn btn-danger">
                //         <span class="glyphicon glyphicon-remove"></span> Remove
                //     </button></td>
                //     </tr>
                // `;
                
            });
            // console.log(1);
                // document.querySelector('#data-cart')!.innerHTML= await totals;
                
        }

        function sumMonney(){
              let totalM:NodeList =  document.querySelectorAll('.data-monney')!;
            //   console.log(totalM)
              let sumPrice:number =0;
              totalM.forEach((ele:any)=>{
                //   console.log(parseInt(ele.innerHTML))
                sumPrice += parseInt(ele.innerHTML);
              })
            //   console.log(sumPrice);
                document.querySelector('#monney-sum')!.innerHTML='$'+sumPrice.toString();
        }


        

       
    }
}