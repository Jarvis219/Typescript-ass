import {Component} from "../../Component.js";
import {SideBar} from "../../backend/Navbar/navbar.js";
import {ContactAPI} from "../../api/ContactAPI.js";
import { Contact } from "../../../Model/Contact.js";
export class ContactIndex extends Component{
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
                        <h1 class="h3 mb-2 text-gray-800">Tables Contact</h1>
                        
    
                        <!-- DataTales Example -->
                        <div class="card shadow mb-4">
                            
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Messages</th>
                                                <th>Status</th>
                                                <th>Orther</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Messages</th>
                                            <th>Status</th>
                                            <th>Orther</th>
                                            </tr>
                                        </tfoot>
                                        <tbody id="data-contact">
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
        `;
    }
    public async afterRender() {
        let data = await ContactAPI.all();
        let contacts = await data.json();
        let result = contacts.map((element:Contact)=>{
            let status =()=>{
                if(element.status==0){
                    return `
                    <option value="0">not seen</option>
                    <option value="1">watched</option>
                    `;
                }else{
                    return `
                    <option value="1">watched</option>
                    `;
                }
            }
            return `
            <tr>
            <td  class="border border-indigo-600 px-3 py-1">${element.name}</td>
            <td class="border border-indigo-600 px-3 py-1"  >${element.email}</td>
            <td class="border border-indigo-600 px-3 py-1"  >0${element.phone}</td>
            <td class="border border-indigo-600 px-3 py-1"  >${element.message}</td>
            <td class="border border-indigo-600 px-3 py-1"  ><form><select data-id="${element.id}" class="status">${status()}</select></form></td>
            <td class="border border-indigo-600 px-3 py-1" ><button data-id="${element.id}"  class="deleted shadow bg-red-400 px-2 py-1 rounded text-white hover:bg-gray-400">delete</button></td>
        </tr>
            `;
        }).join("");

        document.getElementById('data-contact')!.innerHTML= await result;

        // cập nhật trạng thái liên hệ
        document.querySelectorAll('.status').forEach((element)=>{
            element.addEventListener('change',  async (e)=>{
                e.preventDefault();
                if(element instanceof HTMLElement){
                    let id:string|undefined = element.dataset.id;
                    if(typeof id =='string'){
                     let data =   await ContactAPI.find(id);
                     let contact = await data.json();
                     const stt={
                         ...contact,
                         status: (element as HTMLInputElement).value
                     }
                     await ContactAPI.update(id, stt);
                    }
                }
               
            })
        })


        // xóa liên hệ
        document.querySelectorAll('.deleted').forEach((element)=>{
            element.addEventListener('click',  async (e)=>{
                e.preventDefault();
                if(element instanceof HTMLElement){
                    let id:string|undefined = element.dataset.id;
                    if(typeof id =="string"){
                        let question = confirm('you are want to delete?');
                        if(question){
                            await ContactAPI.delete(id).then(()=>{
                                location.reload();
                            })
                        }
                    }

                }
                
            })
        })
    }
}
