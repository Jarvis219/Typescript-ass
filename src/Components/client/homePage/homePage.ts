import {Component} from '../../Component.js';
// import { CategoryAPI } from '../api/CategoryAPI.js';
import { ProductAPI } from '../../api/ProductAPI.js';
import { Header } from '../header/header.js';
import { Footer } from '../footer/footer.js';
import {AboutSection} from '../homePage/AboutSection.js';
import { Product } from "../../../Model/ProductModel.js";
export class HomePage extends Component {
    public template(): string {
        return `
        <div>
        ${Header.render()}
        <section class="shop_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Latest Watches
            </h2>
          </div>
          <div class="row" id="data-product">
            
          </div>
          <div class="btn-box">
            <a href="">
              View All
            </a>
          </div>
        </div>
      </section>
        ${AboutSection.render()}
        ${Footer.render()}
        </div>
        `;
    }
    public async afterRender(){
     await  Header.afterRender();
     let data = await ProductAPI.all();
        let products= await data.json();
        let result = products.map((element:Product) =>{
            if(element.status==0){
              // console.log(1)
              return `
            <div class="col-sm-6 col-xl-3 overflow-hidden" >
            <div class="box">
              <a href="">
                <div class="img-box">
                  <img src="${element.photo}"  alt="">
                </div>
                <div class="detail-box overflow-hidden h-20">
                  <h6>
                    ${element.name}
                  </h6>
                  <h6>
                    Price:
                    <span>
                     $${element.price}
                    </span>
                    <div class="text-center text-4xl text-blue-400 hover:text-green-500"><button class="btn-cart" data-id="${element.id}"><i class="fa fa-cart-plus" aria-hidden="true"></i></button></div>
                  </h6>
                 
                </div>
               
                <div class="new">
                  <span>
                    New
                  </span>
                </div>
              </a>
            </div>
          </div>
            `;
            }
        }).join("");

        document.getElementById('data-product')!.innerHTML= result;

        document.querySelectorAll('.btn-cart')!.forEach((element) => {
          element.addEventListener('click', (e)=>{
            e.preventDefault();
            if(element instanceof HTMLElement){
              let id:string|undefined = element.dataset.id;
              if(typeof id =="string"){
                addToCart(id);
                
              }
            }
           
          })
        });
        let countcart = (document.getElementById('lblCartCount')as HTMLElement)
    
        // let sumItemCart=()=>{
        //   let cartStorage = localStorage.getItem('cart');
        //   let screenCart=null;
        //   if(cartStorage==null){
        //     screenCart=[];
        //   }else{
        //     screenCart=JSON.parse(cartStorage);
        //   }
        //   let totalItem:number =0;
        //   screenCart.forEach((element:any)=>{
        //     totalItem+=element.amount;
        //   });
        //   return totalItem;
        // }
        // // console.log(sumItemCart());
        // countcart.innerHTML = sumItemCart().toString();
        let addToCart=(productId:string) => {
          // console.log(productId)
          let cartLocalStorage:string|null = localStorage.getItem('cart');
          let screenCart = null;
          if(cartLocalStorage==null){
            screenCart=[];
          }else{
            screenCart = JSON.parse(cartLocalStorage);
          }
        
          const cart ={
            product:productId,
            amount:1
          }
    
          let checkCart = screenCart.findIndex((element:any)=>element.product==productId);
          // console.log(checkCart)
          if(checkCart==-1){
            cart.amount=1;
            screenCart.push(cart);
          }else{
            screenCart[checkCart].amount++;
          }
          localStorage.setItem('cart', JSON.stringify(screenCart));
    
    
          // count amout cart
          let countcart = (document.getElementById('lblCartCount')as HTMLElement)
        
        let sumItemCart=()=>{
          let cartStorage = localStorage.getItem('cart');
          let screenCart=null;
          if(cartStorage==null){
            screenCart=[];
          }else{
            screenCart=JSON.parse(cartStorage);
          }
          let totalItem:number =0;
          screenCart.forEach((element:any)=>{
            totalItem+=element.amount;
          });
          return totalItem;
        }
        // console.log(sumItemCart());
        countcart.innerHTML = sumItemCart().toString();
        }
        
    }
}