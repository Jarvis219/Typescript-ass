import {Component} from '../../Component.js';
import { ProductAPI } from '../../api/ProductAPI.js';
import { Product } from '../../../Model/ProductModel.js';
import { CategoryAPI } from '../../api/CategoryAPI.js';
import {Category} from '../../../Model/CateMode.js';
import {SideBar} from "../Navbar/navbar.js";
import firebase from "firebase/app" ;
import 'firebase/storage';

export class ProductEdit extends Component {
    public constructor(private _id:string|undefined){
        super();
        this._id=_id;
    }
    public template(): string {
        return`
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
                                    src="public/img/undraw_profile.svg">
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
                    <h1 class="h3 mb-2 text-gray-800">Product</h1>
                   

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Creat Product</h6>
                        </div>
                        <div class="card-body">
                            <form class="product" id="product-data">
                                <div class="form-group">
                                    <input type="text" class="check-validate form-control form-control-user"
                                        id="name" aria-describedby="name"
                                        placeholder="Name product...">
                                </div>
                                <div class="form-group">
                                    <input type="number" class="check-validate form-control form-control-user"
                                        id="price" aria-describedby="price"
                                        placeholder="Price ...">
                                </div>
                                <div class="form-group">
                                <img src="" width="100" height="100" id="img">
                                    <input type="file" class="form-control  " style="border-radius: 30px; padding:10px 0 40px 15px;"
                                        id="image" aria-describedby="image"
                                        placeholder="Photo product...">
                                </div>
                                <div class="form-group">
                                    <select name="status" id="status" class="check-validate form-control "  style="border-radius: 30px;" >
                                        <option value="0">puclic</option>
                                        <option value="1">private</option>
                                        <option value="2">cancel</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select name="category" id="category" class="check-validate form-control "  style="border-radius: 30px;" >
                                       
                                      
                                    </select>
                                </div>
                                <button class="btn btn-primary btn-user btn-block "  id="btn-creat">CREAT</button>
                                
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
    public async afterRender() {
        
        

        if(typeof this._id != 'undefined'){
            
            // call api gán giá trị
            var id:string = this._id;
            let data = await ProductAPI.find(id);
            let product = await data.json();
            // console.log(typeof product.name);
            (document.querySelector('#name') as HTMLInputElement).value = product.name;
            (document.querySelector('#price') as HTMLInputElement).value = product.price;
            (document.querySelector('#img') as HTMLInputElement).src = product.photo;
           

            let dataCate = await CategoryAPI.categoryIsne(product.categoryId);
            let categoryIsNe = await dataCate.json();
            let result = categoryIsNe.map((ele:Category)=>{
                return `
                <option value="${ele.id}">${ele.name}</option>
                `;
            }).join("");
            
             (document.querySelector('#category') as HTMLInputElement).innerHTML = `
            <option value="${product.categoryId}">${product.category.name}</option>
            ${result}
            `;
            // quy định show trạng thái
            let status = ()=>{
                if(product.status ==0){
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
            (document.querySelector('#status') as HTMLInputElement).innerHTML = status();

            // update sản phẩm
             let updateProduct = async()=>{

                const name:string =  (document.querySelector('#name') as HTMLInputElement).value;
                const price: number = parseInt( (document.querySelector('#price') as HTMLInputElement).value);
                const categoryId:number= parseInt((document.querySelector('#category') as HTMLInputElement).value);
                const status:number= parseInt((document.querySelector('#status') as HTMLInputElement).value);
                const imgOld:string = (document.querySelector('#img') as HTMLInputElement).src;
                const photo:any =  (document.querySelector('#image') as HTMLInputElement);
                const image:any = photo.files[0];
                // update trạng thái 0-pulic 1-private 2-cancel
                let editProduct = async(id:string,data:Product,status:number)=>{
                    if(status==2){
                        //cancel
                        await ProductAPI.delete(id)
                        .then(()=>{
                            window.location.href = '#/product/index';
                            location.reload();
                        })
                    }else{

                        // public|private
                        await ProductAPI.update(id, data)
                        .then(()=>{
                            window.location.href = '#/product/index';
                            location.reload();
                        })
                    }
                    
                }
                // kiểm tra update ảnh mới
                if(image){
                    const firebaseConfig = {
                        apiKey: "AIzaSyB4G8OEv42OHFkA-Sxqa7q0uqoNOMZwre4",
                        authDomain: "myproject-4370c.firebaseapp.com",
                        projectId: "myproject-4370c",
                        storageBucket: "myproject-4370c.appspot.com",
                        messagingSenderId: "554535979803",
                        appId: "1:554535979803:web:c78b0408dfd348656da1be",
                        measurementId: "G-T9JT0CFPE6"
                      };
                      
                      // Initialize Firebase
                      firebase.initializeApp(firebaseConfig);
    
                      let storageRef = firebase.storage().ref(`images/${image.name}`);
                      storageRef.put(image).then(()=>{
                          storageRef.getDownloadURL().then(async (url: string)=>{
                            const data: Product = new  Product(Number(id), name, price, url,status, categoryId);
                           await editProduct(id, data,data.status);
                          })
                      })
                }else{
                    const data: Product = new  Product(Number(id), name, price, imgOld,status, categoryId);
                    await editProduct(id,data,data.status);
                }
                
            }

            // submit dữ liệu
            document.querySelector('#product-data')!.addEventListener('submit', (e)=>{
                e.preventDefault();
                let validate:NodeListOf<Element> = document.querySelectorAll('.check-validate');
                let sum =0;
                validate.forEach((element:any) => {
                    if(element.value==''){
                        element.style.border = '1px solid #FF4D4D';
                        element.style.color = '#ffffff';
                        sum ++;
                    }
                });
                if(sum===0){
                    updateProduct();
                }

            })
        }
    }
}