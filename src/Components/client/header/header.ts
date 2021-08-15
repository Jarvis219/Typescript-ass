import {CategoryAPI} from '../../api/CategoryAPI.js';
import { Category } from '../../../Model/CateMode.js';
import {Banner} from './banner.js';
export const Header={
    render(){
        return `
        <div class="" id="header-active">
        <div id="contact-header">
        
        </div>
        
        <!-- header section strats -->
        <header class="header_section shadow">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="/">
                <img width=20 class="ml-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png">
              </a>
    
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> </span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav" id="menu-nav">
                  
                </ul>
                <div class=" mr-4  flex justify-center items-center gap-3">
                  <div class="relative">
                  <form id="data-search" class="">
                  <input type="text" name="data_search"  placeholder="Search..." class="px-3 border border-gray-100 rounded">
                  <button id="btn-search" class="absolute right-0   px-1 bg-gray-300 text-blue-400 text-sm rounded"style="padding:2px 7px 4px 0;margin:0 0px 0" >search</button>
                  </form>
                  </div>
                  <div class="login-logout">
                    <a href="#/login" class="signin">
                  <i class="fa fa-user" aria-hidden="true" style="font-size:19px;color:black"></i>
                  </a>
                  <a href="#/registration" class="inline-block ">
                  <i class="fas fa-user-plus" style="font-size:16px;color:black"></i>
                  </a>
                  </div>
                  <div  id="admin">  </div>
                  <div class=""><a href="#/cart">
                  <i class="fa" style="font-size:24px;color:black">&#xf07a;</i>
                  <span class='badge badge-warning ' id='lblCartCount'>  </span>
                  </a></div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <!-- end header section -->
        <!-- slider section -->
        <div id="banner-home-page"></div>
       
      </div>
        `;
    },
    async afterRender(){
    //  console.log(location.href)
    // const 
    document.querySelector('#admin').addEventListener('click',()=>{
      window.location.href = '#/users/index';
    })

    // đăng nhập, đăng xuất check quyền truy cập page admin
    if(JSON.parse(localStorage.getItem('username'))){
      const {user} = JSON.parse(localStorage.getItem('username'));
      if(user.permissions===1){
        document.querySelector('#admin')!.innerHTML = `
        <i class="fas fa-user-shield" style="font-size:17px;color:black"></i>
        `;
      }

      document.querySelector('.login-logout')!.innerHTML = `
      <i class="fas fa-sign-in-alt"></i>
      `;

      document.querySelector('.login-logout').addEventListener('click', ()=>{
        localStorage.removeItem('username');
        window.location.href = '/';
      })
      
    }

    



     let url = location.href.split('/');
    //  console.log(url)
    //  console.log(url.length)
     if(url.length===6 && url[4]=='watches'|| url[4]=='about'|| url[4]=='contacts' || url[4]=='cart'|| url[4]=='checkout'){
      (document.querySelector('#wrapper') as HTMLElement).style.display='block';
     }
     if(location.href=='http://localhost:7000/' || location.href== 'http://localhost:7000'){
       document.querySelector('#banner-home-page')!.innerHTML= Banner.render();
       document.querySelector('#header-active')!.classList.add('hero_area');
       document.querySelector('#contact-header')!.innerHTML = `
       <div class="hero_social">
       <a href="">
         <i class="fa fa-facebook" aria-hidden="true"></i>
       </a>
       <a href="">
         <i class="fa fa-twitter" aria-hidden="true"></i>
       </a>
       <a href="">
         <i class="fa fa-linkedin" aria-hidden="true"></i>
       </a>
       <a href="">
         <i class="fa fa-instagram" aria-hidden="true"></i>
       </a>
     </div>
       `;
     }
    let data = await CategoryAPI.all();
    let cate = await data.json();
    let categories = cate.map((ele:Category)=>{
      return `
                  <li class="nav-item">
                    <a class="nav-link" href="#/watches/${ele.id}">${ele.name} </a>
                  </li>
                 
      `;
    }).join('');

    // console.log(document.querySelector('#menu-nav'))
    document.querySelector('#menu-nav')!.innerHTML=  `
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  ${await categories}
                  <li class="nav-item">
                    <a class="nav-link" href="#/about"> About </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/contacts">Contact Us</a>
                  </li>
    `;

    document.querySelector('#data-search')!.addEventListener('submit', (e)=>{
      e.preventDefault();
      let dataSearch = (document.querySelector('[name="data_search"]') as HTMLInputElement).value;
      // console.log(dataSearch);
      window.location.href =`#/watches/${dataSearch}`
      // (document.querySelector('#btn-search') as HTMLInputElement).disabled = true;
      // return false;
      
    })
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