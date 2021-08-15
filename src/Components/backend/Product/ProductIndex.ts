import {Component} from '../../Component.js';
import { SideBar } from "../Navbar/navbar.js";
import { ProductAPI } from '../../api/ProductAPI.js';
import { Product } from '../../../Model/ProductModel.js';

export class ProductIndex extends Component {
    public template(): string{
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
                                            <th>price</th>
                                            <th>photo</th>
                                            <th>category</th>
                                            <th>status</th>
                                            <th colspan="2">Orther</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>price</th>
                                            <th>photo</th>
                                            <th>category</th>
                                            <th>status</th>
                                            <th colspan="2">Orther</th>
                                        </tr>
                                    </tfoot>
                                    <tbody id="data-product">
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

        
        const numberPage:number|string = document.querySelector('#page-number')!.innerHTML='1';
        var sum:number = 1;
        document.getElementById('prev')!.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(sum)
            sum-=parseInt(numberPage);
            if(sum<=1){
                sum=1;
            }
            document.querySelector('#page-number')!.innerHTML=sum.toString();
            listDataPage(sum);
        })
        document.getElementById('next')!.addEventListener('click', (e) => {
            e.preventDefault();
            sum+=parseInt(numberPage);
            // console.log(sum);
            document.querySelector('#page-number')!.innerHTML=sum.toString();
            listDataPage(sum);
        })

        // list sản phẩm
        let listDataPage= async(num: number=1)=>{
            let data = await ProductAPI.pageList(num);
        let products = await data.json();
        // console.log(products)
        let dataProduct = products.map((element:any) => {
            // console.log(element.name)
            // console.log(element.category.name)
            let status = ()=>{
                if(element.status==0){
                    return `
                    <option value="0">puclic</option>
                    <option value="1">private</option>
                    <option value="2">cancel</option>
                    `;
                }else{
                    return `
                    <option value="1">private</option>
                    <option value="0">puclic</option>
                    <option value="2">cancel</option>
                    `;
                }
            }
            
            return `
            <tr>
            <td  class="border border-indigo-600 px-3  " ><span class="block py-12">${element.name}</span></td>
            <td  class="border border-indigo-600 px-3  "><span class=" block py-12">${element.price}</span></td>
            <td  class="border border-indigo-600 px-3 "><img src="${element.photo}" width="100" height="100" class=" block mx-auto "></td>
            <td  class="border border-indigo-600 px-3"><span class=" block py-12">${element.category.name}</span></td>
            <td  class="border border-indigo-600 px-3"><form> 
            <select name="status" id="status" data-id="${element.id}" class="status block py-12 w-24 mx-auto"  style="border-radius: 30px;" >${status()} </select> 
            </form></td>
            <td class="border border-indigo-600 px-3 " ><a href="#/product/edit/${element.id}" data-navigo class="block my-12 mx-auto shadow bg-green-400 py-1 px-2 rounded text-white hover:bg-blue-400 "><button>edit</button><a></td>
            <td class="border border-indigo-600 px-3 " ><button data-id="${element.id}"  class="deleted block my-12 py-1 mx-auto shadow bg-red-400 px-2 rounded text-white hover:bg-gray-400">delete</button></td>
        </tr>
            `;
        }).join("");
        document.getElementById('data-product')!.innerHTML = dataProduct;
        // console.log(document.getElementById('status'))
        changeStatus();
        document.querySelectorAll('.deleted').forEach((ele)=>{
            ele.addEventListener('click',async (e)=>{
                e.preventDefault();
                if(ele instanceof HTMLElement){
                    let id:string|undefined = ele.dataset.id;
                    if(typeof id =="string"){
                        let stt = await ProductAPI.find(id);
                        let dataStt = await stt.json();
                        // console.log(dataStt)
                        
                        // let question = confirm('you are want to delete?');

                        if(dataStt.status==0){
                           let dataNew:Product = new Product(0,dataStt.name, dataStt.price,dataStt.photo, 1, dataStt.categoryId);
                            // console.log(data)
                            await ProductAPI.update(id, dataNew)
                            .then((data)=>{
                                // console.log(data)
                                location.reload();
                            })
                        }else{
                            let question = confirm('you are want to delete?');
                             if(question){
                             deleted(id);
                        }
                        }
                    }
                }
                async  function deleted(id:string){
                    await ProductAPI.delete(id).then(()=>{
                       location.reload();
                    }).catch(err=>{
                        console.log(err)
                    })
                    }
            });
        });
        };

        listDataPage();
        
        // xóa sp
        


        // cập nhật trạng thái sp 0-public 1-private 2-cancel
        
        async function changeStatus(){
            document.querySelectorAll('.status').forEach((element)=>{
                // console.log(element)
                element.addEventListener('change',  async (e)=>{
                    e.preventDefault();
                    // console.log(1)
                    // console.log((element as HTMLInputElement ).value);
                    if(element instanceof HTMLElement){
                        let id:string|undefined = element.dataset.id;
                        if(typeof id === 'string'){
                            let sttChange = await ProductAPI.find(id);
                            let dataSttChange = await sttChange.json();
                            
                        const stt:number = parseInt((element as HTMLInputElement ).value);
                        console.log(stt)
                        if( stt == 1 || stt == 0 ){
                            const dataStt:Product = new Product(0,dataSttChange.name, dataSttChange.price, dataSttChange.photo,stt, dataSttChange.categoryId);
                            // console.log(dataStt)
                            await ProductAPI.update(id, dataStt).then(()=>{
                                // location.reload();
                            })
                        }else{
                            let question = confirm('you are want to delete?');
                            if(question){
                                await ProductAPI.delete(id).then(()=>{
                                    location.reload();
                                })
                             }
                            //  location.reload();
                            
                        }
                    }
    
                    }
                })
            })
        }
        
    }
}