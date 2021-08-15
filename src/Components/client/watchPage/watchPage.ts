import {Component} from "../../Component.js";
import { Header } from "../header/header.js";
import { Footer } from "../footer/footer.js";
import { ProductAPI } from "../../api/ProductAPI.js";
import {Product} from '../../../Model/ProductModel.js';
// import {Category} from '../../Model/CateMode.js';
export class WachPage extends Component {
    public constructor(private _id:string|undefined){
        super();
        this._id=_id;
    }
    public template(): string {
        return `
       <div>
       ${Header.render()}

       <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2 id="category-name">
          Latest Watches
        </h2>
      </div>
      <div class="mx-auto flex justify-center items-center gap-10">
        <div>
          <form>
            <select class="sort-select form-select border border-blue-200 py-2 px-3 rounded text-blue-400" >
              <option selected>Open this select menu</option>
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select> 
          </form>
        </div>
        <div>

        </div>
      </div>
      <div class="row" id="data-watches">
        
        
      </div>
      <div class="btn-box">
        <a href="">
          View All
        </a>
      </div>
    </div>
  </section>

  <!-- end shop section -->

       ${Footer.render()}
       </div>
        `;
    };


    public async afterRender(){

    await Header.afterRender();
    
    const id = this._id;

    let dataCheck = await ProductAPI.all();
    let resuleCheck = await dataCheck.json();
    // true trả về index false trả về 0
    let total = resuleCheck.filter((element:any) =>{
      return (element.categoryId==id);
    })
    
    if(typeof id =="string"){
        // list dữ liệu nhận 
        let listData=async (totals:number|string|object,id:number|string,sort:string='asc')=>{
          let ids:string= id.toString();
          var products;
          
          if(totals===0){
            // dữ liệu tìm kiếm
            let dataSearch = await ProductAPI.searchProduct(ids,sort);
            products = await dataSearch.json();
            // console.log(products);
          }else{
            // dữ liệu danh mục
           let data = await ProductAPI.findById(ids,sort);
           products = await data.json();
          }
          
          let result = products.map((element:Product)=>{
            if(element.status==0){
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
                      <div class="text-center text-4xl text-blue-400 hover:text-green-500"><button data-id="${element.id}" id="cara" class="add-cart "><i class="fa fa-cart-plus" aria-hidden="true"></i></button></div>
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
          // console.log(products)
          document.getElementById('category-name')!.innerHTML = await products[0].category.name;
          document.getElementById('data-watches')!.innerHTML= await result;
          btnAddtoCart();
       } ;

       listData(total.length,id);
      //  console.log(total.length,id)
      // selecter sắp xếp theo giá asc|desc
       document.querySelector('.sort-select')!.addEventListener('change', (e) => {
        e.preventDefault();
        const dataSort = (document.querySelector('.sort-select')as HTMLInputElement).value;
        // console.log(dataSort)
        listData(total.length,id, dataSort);
       
      })
        
       
    }
    // add to cart 




   
    let btnAddtoCart =()=>{
      document.querySelectorAll('.add-cart')!.forEach((element)=>{
        element.addEventListener('click', (e)=>{
          e.preventDefault();
          if(element instanceof HTMLElement){
            let cartId:string|undefined = element.dataset.id;
            if(typeof cartId=='string'){
              addToCart(cartId)
            }
          }
        })
      })
    }
    

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
    console.log(sumItemCart());
    countcart.innerHTML = sumItemCart().toString();
    }
    
    

    
    

    }
}