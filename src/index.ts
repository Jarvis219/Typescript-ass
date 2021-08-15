

/*///<reference path ="./Components/User/UserCreat.ts"/>
///<reference path ="./Components/Component.ts"/> */
// ---------------------------Admin-------------------------------//
import { UserCreat } from './Components/backend/User/UserCreat.js';
import { UserIndex } from './Components/backend/User/UserIndex.js';
import { Component } from './Components/Component.js';
import { UserEdit } from './Components/backend/User/UserEdit.js';
import {UserDelete} from './Components/backend/User/UserRemove.js';
import {CateCreat} from './Components/backend/Category/CateCreat';
import {CateEdit} from './Components/backend/Category/CateEdit';
import {CateIndex} from './Components/backend/Category/CateIndex';
import {ProductCreat} from './Components/backend/Product/ProductCreat.js';
import {ProductIndex} from './Components/backend/Product/ProductIndex.js'
import {ProductEdit} from './Components/backend/Product/ProductEdit.js';
import {OrderIndex} from './Components/backend/Order/orderIndex.js';

// ---------------------------Client-------------------------------//
import {HomePage} from './Components/client/homePage/homePage.js';
import {WachPage} from './Components/client/watchPage/watchPage.js';
import { AboutPage } from './Components/client/aboutPage/AboutPage.js';
import {ContactPage} from './Components/client/contactPage/contactPage.js'
import {ContactIndex} from './Components/backend/Contact/ContactIndex.js';
import {Login} from './Components/client/userPage/login.js';
import { CartPage} from './Components/client/cartPage/cart.js';
import {CheckOutPage} from './Components/client/checkOutPage/checkOut.js';
import {Registration} from './Components/client/userPage/registration.js';


// import { Route } from 'navigo';
import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo('/',{ hash: true, linksSelector: "a" });
//  declare const window:any; 

//  type Route = {
//     name: string;
//     path: string | RegExp;
//   };
//   type Match = {
//     url: string;
//     queryString: string;
//     hashString: string;
//     route: Route;
//     data: {[key:string]:string} | null ;
//     params: {[key:string]:string} | null;
//   };

if(JSON.parse(localStorage.getItem('username'))){
var {user} = JSON.parse(localStorage.getItem('username'));
}

const routes = () => {
    router
      .on('/',async ()=>{
        const gui:Component = new HomePage();
        await  gui.render();
        // gui.afterRender();
      })
      .on('/login', async ()=>{
        const gui:Component = new Login();
        await gui.render();
      })
      .on('/registration', async ()=>{
        const gui:Component = new Registration();
        await gui.render();
      })
      .on('/watches/:id',async (params:any) => {
      // console.log( params)
        const id = params?.data?.id;
        const gui:Component = new WachPage(id);
        await  gui.render();
        // gui.afterRender();
      })
      .on('/about',async ()=>{
        const gui:Component = new AboutPage();
       await gui.render();
        gui.afterRender();
      })
      .on('/contacts', async ()=>{
        const gui:Component = new ContactPage();
        await gui.render();
        // gui.afterRender();
      })
      .on('/cart', async ()=>{
        const gui:Component = new CartPage();
        await gui.render();
      })
      .on('/checkout', async ()=>{
        const gui:Component = new CheckOutPage();
        await gui.render();
      })
      .on('/users/index',async () => {
          if(user){
            if(user.permissions===1){
              const gui: Component = new UserIndex();
              await gui.render();
            }else{
              window.location.href= '/';
            }
          }else{
            window.location.href= '/';
          }
        })
        .on('/category/index',async () => {
           if(user){
            if(user.permissions===1){
              const gui: Component = new CateIndex();
               await gui.render();
            }else{
              window.location.href= '/';
            }
          }else{
            window.location.href= '/';
          }
        })
        .on('/product/index',async () => {
           
           if(user){
            if(user.permissions===1){
              const gui: Component = new ProductIndex();
              await gui.render();
            }else{
              window.location.href= '/';
            }
          }else{
            window.location.href= '/';
          }
        })
        .on('/contact/index',async () => {
          
         if(user){
          if(user.permissions===1){
            const gui: Component = new ContactIndex();
            await gui.render();
          }else{
            window.location.href= '/';
          }
        }else{
          window.location.href= '/';
        }
      })
      .on('/order/index',async () => {
       
        if(user){
          if(user.permissions===1){
            const gui: Component = new OrderIndex();
            await gui.render();
          }else{
            window.location.href= '/';
          }
        }else{
          window.location.href= '/';
        }
    })
        .on('/users/creat', () => {
            
            if(user){
              if(user.permissions===1){
                const gui: Component = new UserCreat();
                gui.render();
              }else{
                window.location.href= '/';
              }
            }else{
              window.location.href= '/';
            }
        })
        .on('/category/creat', () => {
            
            if(user){
              if(user.permissions===1){
                const gui: Component = new CateCreat();
                gui.render();
              }else{
                window.location.href= '/';
              }
            }else{
              window.location.href= '/';
            }
        })
        .on('/product/creat', () => {
            
            if(user){
              if(user.permissions===1){
                const gui: Component = new ProductCreat();
                 gui.render();
              }else{
                window.location.href= '/';
              }
            }else{
              window.location.href= '/';
            }
            
        })
        .on('/users/edit/:id',async (params: any)=>{
          //  console.log(params)
            const id = params?.data?.id;
            // console.log(id);
            
            if(user){
              if(user.permissions===1){
                const gui:Component = new UserEdit(id);
                await  gui.render();
              }else{
                window.location.href= '/';
              }
            }else{
              window.location.href= '/';
            }
        })
        .on('/category/edit/:id',async (params: any)=>{
            // console.log(params)
             const id = params?.data?.id;
             // console.log(id);
            
           if(user){
            if(user.permissions===1){
              const gui:Component = new CateEdit(id);
              await  gui.render();
            }else{
              window.location.href= '/';
            }
          }else{
            window.location.href= '/';
          }
         })
         .on('/product/edit/:id',async (params: any)=>{
          // console.log(params)
           const id = params?.data?.id;
           if(user){
            if(user.permissions===1){
              const gui:Component = new ProductEdit(id);
              await  gui.render();
            }else{
              window.location.href= '/';
            }
          }else{
            window.location.href= '/';
          }
          
       })
        .on('/users/delete/:id', async(params: any)=>{
            const id = params?.data?.id;
            // console.log(id);
          if(user){
            if(user.permissions===1){
              const gui:Component = new UserDelete(id);
              await  gui.render();
            }else{
              window.location.href= '/';
            }
          }else{
            window.location.href= '/';
          }
        })
        .resolve();

  
}   

routes();





