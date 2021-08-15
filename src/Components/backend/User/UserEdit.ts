import { Component } from "../../Component.js";
import { User } from "../../../Model/UserModel.js";
import { userAPI } from "../../api/userAPI.js";
import {SideBar} from "../Navbar/navbar.js"
export class UserEdit extends Component {
    public constructor(private _id:string|undefined){
        super();
        this._id=_id;
    }
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
                    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                   

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Data user</h6>
                        </div>
                        <div class="card-body">
                            <form class="user" id="btn-user">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-user"
                                        id="name" aria-describedby="name"
                                        placeholder="Name...">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="email" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address...">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                        id="password" placeholder="Password">
                                </div>  
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                        id="passconfirm" placeholder="Confilm-password">
                                </div>
                               <button class="btn btn-primary btn-user btn-block"> UPDATE</button>
                               
                                
                            </form>
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
    public async afterRender()  {
        // console.log(this._id);
        if(typeof this._id != 'undefined'){
          const data = await  userAPI.find(this._id);
          const user = await data.json();
        //   console.log(user);
           (document.querySelector('#name') as HTMLInputElement).value = user.name;
          (document.querySelector('#email') as HTMLInputElement).value = user.email;
          (document.querySelector('#password') as HTMLInputElement).value = user.password;
          document.querySelector('#btn-user')!.addEventListener('submit',async (e)=>{
            e.preventDefault();
            const inPName = document.querySelector('#name') as HTMLInputElement;
             const name: string = inPName.value;
             const email:string = (document.querySelector('#email') as HTMLInputElement).value;
             const password:string = (document.querySelector('#password') as HTMLInputElement).value;
             const passconfirm:string = (document.querySelector('#passconfirm') as HTMLInputElement).value;
             // console.log(name, email, password);
            if(passconfirm==password){
                let user: User = new User( Math.round(Math.random() * 700000), name, email, password,0);
                if(typeof this._id != 'undefined'){
                   await userAPI.update(this._id,user).then(()=>{
                       window.location.hash = '#/users/index';
                   })
                }
            }
            else{ 
                alert('password not match');

            }
           
         })
        }
       
    }
}