
import {Component} from "../../Component.js";
import {SideBar} from "../Navbar/navbar.js"
import { CategoryAPI }from "../../api/CategoryAPI.js";
import { ProductAPI } from "../../api/ProductAPI.js";
import {Product} from '../../../Model/ProductModel.js';
import {Category} from '../../../Model/CateMode.js'
import firebase from "firebase/app" ;
import 'firebase/storage';

export class ProductCreat extends Component {
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

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="...">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="...">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg">
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
                                    <input type="file" class=" form-control  " style="border-radius: 30px; padding:10px 0 40px 15px;"
                                        id="image" aria-describedby="image"
                                        placeholder="Photo product...">
                                </div>
                                <div class="form-group">
                                    <select name="status" id="status" class="check-validate form-control "  style="border-radius: 30px;" >
                                        <option value="0">puclic</option>
                                        <option value="1">private</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select name="category" id="category" class="check-validate form-control "  style="border-radius: 30px;" >
                                      
                                    </select>
                                </div>
                                <button class="btn btn-primary btn-user btn-block">CREAT</button>
                                
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
       
     // show danh mục sản phẩm   
    async function selectCate(){
        let data = await CategoryAPI.all();
        let cate = await data.json();
        // type ctg = number | string | object | null;
        let dataCate = cate.map((ele:Category)=>{
            return `
            <option value="${ele.id}">${ele.name}</option>
            `;
        }).join('');
        document.getElementById('category')!.innerHTML = dataCate;;
    }
     selectCate();
     
     // tạo sản phẩm
    async function creatProduct(){
        



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
        let img:any = (document.querySelector('#image') as HTMLInputElement);
        console.log(typeof img)
        let images:any = img.files[0];
        console.log(typeof images)
        // console.log(images);
          let storageRef = firebase.storage().ref(`images/${images.name}`);
              storageRef.put(images).then(()=>{
                  storageRef.getDownloadURL().then(async (url: string)=>{
                    //   console.log(url)
                        const  name:string= (document.querySelector('#name') as HTMLInputElement).value;
                        const  price:number= parseInt((document.querySelector('#price') as HTMLInputElement).value);
                        const  categoryId:number=parseInt((document.querySelector('#category') as HTMLInputElement).value);
                        const  status:number=parseInt((document.querySelector('#status') as HTMLInputElement).value);
                        const  photo:string= url;
                        // console.log(typeof price, typeof categoryId)
                        // if(typeof price =="number" && typeof categoryId =="number"){
                            const data:Product = new Product(0, name, price, photo, status, categoryId)
                            await ProductAPI.create(data)
                            .then(()=>{
                                window.location.href = '#/product/index';
                                location.reload();
                            }).catch(err=> console.log(err))
                            
                        // }
                  })
              })
    }
    // creatProduct();
    document.querySelector('#product-data')!.addEventListener('submit',(e)=>{
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
            creatProduct();
        }
    })

    }
}