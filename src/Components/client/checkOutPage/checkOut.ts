import {Component} from "../../Component.js";
import { Header } from "../header/header.js";
import { Footer } from "../footer/footer.js";
import { CheckOut } from "../../../Model/checkOutModel.js";
import {OrderAPI} from "../../api/OrderAPI.js";
export class CheckOutPage extends Component {
    public  template():string{
        return`
    <div >
        ${Header.render()}
        <div class="container font-serif mb-8">
       
            <main class="mx-auto">
                <div class="py-5 text-center">
               
                <h2>Checkout form</h2>
                </div>

                <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-primary">Your cart</span>
                    <span class="badge bg-primary rounded-pill " id="count">3</span>
                    </h4>
                    <ul class="list-group mb-3" id="data-product">
                    </ul>
                    <div class="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong >$<span id="sum-price"></span></strong>
                    </div>
                </div>
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" id="btn-checkout" novalidate>
                    <div class="row g-3 font-serif">
                        <div class="col-sm-6">
                        <label for="firstName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="names" placeholder="name..." value="" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>

                        <div class="col-sm-6 my-1">
                        <label for="lastName" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" placeholder="phone..." value="" required>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>

                        <div class="col-12 my-1">
                        <label for="username" class="form-label">Email</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                        <div class="invalid-feedback">
                            Your username is required.
                            </div>
                        </div>
                        </div>

                        <div class="col-12  my-1">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                        </div>

                    </div>

                    <hr class="my-4">

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="same-address">
                        <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div>

                    

                    <hr class="my-4">

                    <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>
                </div>
            </main>
        </div>
        ${Footer.render()}
  </div>
        `;
    }
    public async afterRender() {
        await Header.afterRender();

        function listproduct(){
            let getCheckout:object[] = JSON.parse(localStorage.getItem('checkout'));
            let sumPrices:number = 0;
            let count:number = getCheckout.length;
            let datas = getCheckout.map((ele:any)=>{
                sumPrices += parseInt(ele.sum)
                return `
                <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0 names">${ele.product}</h6>
                <small class="text-muted ">X<span class="amounts">${ele.amount}</span></small>
                </div>
                <span class="text-muted ">$<span class="totals">${ele.price}</span></span>
            </li>
                `;
            }).join("");
            document.getElementById('data-product')!.innerHTML = datas;
            document.getElementById('sum-price')!.innerHTML = sumPrices.toString();
            document.getElementById('count')!.innerHTML = String(count);

            checkOut();
        }
        listproduct();

        function checkOut(){
            document.getElementById('btn-checkout').addEventListener('submit', async(e)=>{
                e.preventDefault();
                let getCheckout:object[] = JSON.parse(localStorage.getItem('checkout'));
                
                const name:string = (document.querySelector('#names') as HTMLInputElement).value;
                const phone:number = parseInt((document.querySelector('#phone') as HTMLInputElement).value);
                const email:string = (document.querySelector('#email') as HTMLInputElement).value;
                const address:string = (document.querySelector('#address') as HTMLInputElement).value;
                const sumMoney:number = parseInt((document.querySelector('#sum-price') as HTMLInputElement).innerHTML);
                const product:object=getCheckout;
                let order:CheckOut = new CheckOut(0,name,phone,email,address,product,sumMoney);
                console.log(order)
                await OrderAPI.create(order)
                .then(() => {
                    alert('Check out successfully!')
                    localStorage.removeItem('checkout');
                    localStorage.removeItem('cart');
                    window.location.href = '/';
                }).catch(error => {console.log(error)})
            })
        }
    }
}