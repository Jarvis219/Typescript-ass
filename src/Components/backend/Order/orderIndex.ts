import {Component} from "../../Component.js";
import { CheckOut } from "../../../Model/checkOutModel.js";
import { OrderAPI } from "../../api/OrderAPI.js";
import {SideBar} from "../../backend/Navbar/navbar.js";
export class OrderIndex extends Component {
    public template(): string {
        return `
        ${SideBar.render()}
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <form class="form-inline">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                    </form>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle"
                                    src="https://i.ytimg.com/vi/FlBlt5xVvWY/maxresdefault.jpg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">Tables Product</h1>
                    

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered text-center mx-auto" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Sum Price</th>
                                            <th>view</i></th>
                                            <th colspan="2">Orther</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Sum Price</th>
                                            <th>view</i></th>
                                            <th colspan="2">Orther</th>
                                        </tr>
                                    </tfoot>
                                    <tbody id="data-order">

                                    </tbody>
                                </table>
                            </div>
                            <div class="flex justify-end items-center">
                             
                                <div class="px-2 rounded-l-lg py-2  bg-gray-100 shadow-sm"><button id="prev" class="font-bold text-blue-500">Prev</button></div>
                                <div  class="px-3 shadow-sm   py-2  bg-gray-200  "><span  class="font-bold text-blue-500" id="page-number">1</spanid></div>
                                <div  class="px-2 rounded-r-lg py-2  bg-gray-100 shadow-sm"><button  id="next" class="font-bold text-blue-500">Next</button></div>
                                
                           
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

        <div id="detail-order" class=" container mx-auto absolute mt-56 right-0 hidden">
            <div class="bg-gray-200 w-3/4  px-8">
                <div  class="flex justify-center items-center gap-10 py-4 ">
                        <div class="text-sm">
                        <div>
                            <span id="name-detail">
                                Name: kai
                            </span>
                        </div>
                        <div>
                            <span id="email-detail">
                                Email:@
                            </span>
                        </div>
                        <div>
                            <span id="phone-detail">
                                Phone:sdsadas
                            </span>
                        </div>
                        <div>
                            <span id="address-detail">
                                Address:sdas
                            </span>
                        </div>
                    </div>
                    <div>
                        <table class="text-center text-xs">
                            <thead>
                                <tr>
                                    <th class="border-2 border-blue-200 p-1">product</th>
                                    <th class="border-2 border-blue-200 p-1">amount</th>
                                    <th class="border-2 border-blue-200 p-1">price</th>
                                    <th class="border-2 border-blue-200 p-1">sum</th>
                                </tr>
                            </thead>
                            <tbody id="data-detail">
                                <tr>
                                    <td class="border-2 border-blue-200 p-1">1</td>
                                    <td class="border-2 border-blue-200 p-1">1</td>
                                    <td class="border-2 border-blue-200 p-1">1</td>
                                    <td class="border-2 border-blue-200 p-1">1</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="text-right "><button class="shadow bg-red-400 px-2 rounded text-white mr-10 mb-3 cancel">Cancel</button></div>
            </div>
            
        </div>

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

        `;
    }

    public async afterRender() {
        

        listOrder();

         async  function listOrder(){
            let datas = await OrderAPI.all();
            let orders = await datas.json();
            let result = orders.map((element:CheckOut)=>{
                return `
                <tr class="col-${element.id}">
                    <td  class="border border-indigo-600 px-3  " ><span class="block py-12">${element.name}</span></td>
                    <td  class="border border-indigo-600 px-3  "><span class=" block py-12">${element.email}</span></td>
                    <td  class="border border-indigo-600 px-3 "><span class="block py-12">0${element.phone}</span></td>
                    <td  class="border border-indigo-600 px-3"><span class=" block py-12">${element.address}</span></td>
                    <td  class="border border-indigo-600 px-3"><span class=" block py-12">$${element.sumMoney}</span> </td>
                    <td  class="border border-indigo-600 px-3"><span data-id="${element.id}" class="view-order cursor-pointer block py-12"><i class="far fa-eye"></i></span></td>
                    <td class="border border-indigo-600 px-3 " ><a href="#/order/edit/${element.id}"  data-navigo class="block my-12 mx-auto shadow bg-green-400 py-1 px-2 rounded text-white hover:bg-blue-400 "><button disabled>edit</button><a></td>
                    <td class="border border-indigo-600 px-3 " ><button data-id="${element.id}"  class="deleted block my-12 py-1 mx-auto shadow bg-red-400 px-2 rounded text-white hover:bg-gray-400">delete</button></td>
                </tr>
                `;
            }).join("");
            document.getElementById('data-order')!.innerHTML = await result;
            checkView();
            deleted();
         }

         function checkView(){
             document.querySelector('.cancel')!.addEventListener('click',()=>{
                document.querySelector('#detail-order')!.classList.toggle('hidden')
             })
             document.querySelectorAll('.view-order').forEach(ele=>{
                 ele.addEventListener('click',async ()=>{
                     if(ele instanceof HTMLElement){
                         let id = ele.dataset.id;
                        try {
                            let response = await OrderAPI.find(id);
                            let data =  await response.json();
                            document.querySelector('#name-detail')!.innerHTML = 'Name: '+ data.name;
                            document.querySelector('#email-detail')!.innerHTML = 'Email: '+ data.email;
                            document.querySelector('#address-detail')!.innerHTML = 'Address: '+ data.address;
                            document.querySelector('#phone-detail')!.innerHTML = 'Phone: 0'+data.phone;
                            document.querySelector('#detail-order')!.classList.toggle('hidden')
                            let result = data.product.map((ele:any)=>{
                                // console.log(ele)
                                return `
                                <tr >
                                <td class="border-2 border-blue-200 p-1">${ele.product}</td>
                                <td class="border-2 border-blue-200 p-1">${ele.amount}</td>
                                <td class="border-2 border-blue-200 p-1">$${ele.price}</td>
                                <td class="border-2 border-blue-200 p-1">$${ele.sum}</td>
                              </tr>
                                `;
                            }).join('');
                            document.getElementById('data-detail')!.innerHTML = `${result}
                            <tr class="font-bold text-blue-400">
                            <td colspan="1️" class="border-2 border-blue-200 p-1">SUM</td>
                            <td colspan="3" id="sumproduct" class="border-2 border-blue-200 p-1">$${data.sumMoney}</td>
                          </tr>
                            `;
                        } catch (error) {
                            console.log(error);
                        }
                     }
                 })
             })
         }

         function deleted(){
             document.querySelectorAll('.deleted').forEach(ele=>{
                 ele.addEventListener('click',async function(){
                     if(ele instanceof HTMLElement){
                         let id:string = ele.dataset.id;
                        
                         const question = confirm('are you want to delete ?');
                         if(question){
                          
                           try {
                            await  OrderAPI.deleted(id);
                            let removeItem = document.querySelector(`.col-${id}`);
                            removeItem.remove();
                           } catch (error) {
                               console.log(error)
                           }
                         }
                     }
                 })
             })
         }
    }
}