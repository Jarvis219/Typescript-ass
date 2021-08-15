import { User } from '../../../Model/UserModel';
import { Component } from "../../Component.js";
import { userAPI } from '../../api/userAPI.js'
import { SideBar } from "../Navbar/navbar.js";
import { Product } from "../../../Model/ProductModel.js";
export class UserIndex extends Component {
    // private listUser: User[];
    public constructor() {
        super();
        // this.listUser = [];
        // this.fakeData();
    }
    // private fakeData(): void {
    //     let user1: User = new User(1, "kai1", "kai1@gmail.com", "10000");
    //     let user2: User = new User(2, "kai2", "ka2i@gmail.com", "20000");
    //     let user3: User = new User(3, "kai3", "kai3@gmail.com", "30000");
    //     this.listUser.push(user1);
    //     this.listUser.push(user2);
    //     this.listUser.push(user3);
    // }
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
                        <h1 class="h3 mb-2 text-gray-800">Tables User</h1>
                        
    
                        <!-- DataTales Example -->
                        <div class="card shadow mb-4">
                            
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Permission</th>
                                                <th colspan="2">Orther</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Permission</th>
                                                <th>Orther</th>
                                            </tr>
                                        </tfoot>
                                        <tbody id="data-user">
                                        </tbody>
                                    </table>
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
       
        `
    }
    public async afterRender() {
       
        const response = await userAPI.all();
        const data = await response.json();
        // console.log(data)
        let dataUser: string = data.map((element:User) => {
            // console.log(element.name)
            const Permission = () => {
                if (element.permissions == 1) {
                    return `
                    <label>Admin <input type="radio" data-id="${element.id}" data-name="${element.name}" data-email="${element.email}" data-permission="${element.permissions}" data-pass="${element.password}"  class="permission" value="1" name="permission"
                     checked> </label>
                    <label>Member  <input type="radio"  data-id="${element.id}" data-name="${element.name}" data-email="${element.email}" data-permission="${element.permissions}" data-pass="${element.password}"   class="permission" value="0"  name="permission"
                    > </label>
                    `;
                } else {
                    return `
                    <label>Admin <input type="radio"  data-id="${element.id}" data-name="${element.name}" data-email="${element.email}" data-permission="${element.permissions}" data-pass="${element.password}"    class="permission" value="1"   name="permission"
                     > </label>
                    <label>Member  <input type="radio"  data-id="${element.id}" data-name="${element.name}" data-email="${element.email}" data-permission="${element.permissions}" data-pass="${element.password}"  class="permission" value="0"  name="permission"
                    checked> </label>
                    `;
                }
            }
            
            return `
                <tr>
                   
                    <td  class="border border-indigo-600 px-3 py-1">${element.name}</td>
                    <td class="border border-indigo-600 px-3 py-1"  >${element.email}</td>
                    <td class="border border-indigo-600 px-3 py-1"  ><form>${Permission()}</form></td>
                    <td class="border border-indigo-600 px-3 py-1" ><button data-id="${element.id}"  class="deleted shadow bg-red-400 px-2 py-1 rounded text-white hover:bg-gray-400">delete</button></td>
                </tr>
                `
        }).join("");
 
        document.querySelector('#data-user')!.innerHTML = dataUser;
        document.querySelectorAll('.deleted').forEach(ele=>{
           ele.addEventListener('click', (e)=>{
               e.preventDefault();
               if(ele instanceof HTMLElement){
                let id:string|undefined = ele.dataset.id;
                if( typeof id == "string"){
                    let question = confirm('you are want to delete?');
                    if(question){
                        window.location.hash = `#/users/delete/${id}`;
                        // deleted(id);
                    }
                }
               }
              
           })
            // ele.forEach(element => {
            //     console.log(element)
            // });
        })
    //   async  function deleted(id:string){
    //     await userAPI.delete(id).then(()=>{
    //         window.location.hash = '#/users/index';
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    //     }

        document.querySelectorAll('.permission').forEach((ele)=>{
            ele.addEventListener('change',async (e)=>{
                e.preventDefault();
                // console.log(typeof ele)
                if(ele instanceof HTMLElement){
                    let id:string|undefined = ele.dataset.id;
                    if(typeof id =="string"){
                        // console.log(id)
                        type userData = number | string | undefined;
                        const name:userData = ele.dataset.name;
                        const email:userData = ele.dataset.email;
                        const password:userData = ele.dataset.pass;
                        const permission:number =  parseInt((ele as HTMLInputElement).value);
                        // console.log(permission)
                        // console.log(typeof name, typeof email, typeof password, typeof (permission))
                        if(typeof name == 'string' && typeof email =='string' && typeof password =='string' && typeof permission=='number'){
                            let user:User = new User(0,name,email,password,permission);
                            await userAPI.update(id,user)
                            .then(()=>{
                                window.location.hash = '#/users/index';
                            }).catch(err=>console.log(err))
                        }
                       
                    }
                }
            })
        })

    }
}