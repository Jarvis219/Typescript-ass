var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from "../../Component.js";
import { SideBar } from "../Navbar/navbar.js";
import { CategoryAPI } from "../../api/CategoryAPI.js";
import { ProductAPI } from "../../api/ProductAPI.js";
import { Product } from '../../../Model/ProductModel.js';
import firebase from "firebase/app";
import 'firebase/storage';
var ProductCreat = /** @class */ (function (_super) {
    __extends(ProductCreat, _super);
    function ProductCreat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCreat.prototype.template = function () {
        return "\n            " + SideBar.render() + "\n            <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n            <!-- Main Content -->\n            <div id=\"content\">\n\n                <!-- Topbar -->\n                <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n                    <!-- Sidebar Toggle (Topbar) -->\n                    <form class=\"form-inline\">\n                        <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n                            <i class=\"fa fa-bars\"></i>\n                        </button>\n                    </form>\n\n                    <!-- Topbar Search -->\n                    <form\n                        class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\"\n                                aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"button\">\n                                    <i class=\"fas fa-search fa-sm\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <!-- Topbar Navbar -->\n                    <ul class=\"navbar-nav ml-auto\">\n\n                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n                        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fas fa-search fa-fw\"></i>\n                            </a>\n                            <!-- Dropdown - Messages -->\n                            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\"\n                                aria-labelledby=\"searchDropdown\">\n                                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control bg-light border-0 small\"\n                                            placeholder=\"Search for...\" aria-label=\"Search\"\n                                            aria-describedby=\"basic-addon2\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary\" type=\"button\">\n                                                <i class=\"fas fa-search fa-sm\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </li>\n\n                        <!-- Nav Item - Alerts -->\n                        <li class=\"nav-item dropdown no-arrow mx-1\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fas fa-bell fa-fw\"></i>\n                                <!-- Counter - Alerts -->\n                                <span class=\"badge badge-danger badge-counter\">3+</span>\n                            </a>\n                            <!-- Dropdown - Alerts -->\n                            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                                aria-labelledby=\"alertsDropdown\">\n                                <h6 class=\"dropdown-header\">\n                                    Alerts Center\n                                </h6>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"mr-3\">\n                                        <div class=\"icon-circle bg-primary\">\n                                            <i class=\"fas fa-file-alt text-white\"></i>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class=\"small text-gray-500\">December 12, 2019</div>\n                                        <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"mr-3\">\n                                        <div class=\"icon-circle bg-success\">\n                                            <i class=\"fas fa-donate text-white\"></i>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class=\"small text-gray-500\">December 7, 2019</div>\n                                        $290.29 has been deposited into your account!\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"mr-3\">\n                                        <div class=\"icon-circle bg-warning\">\n                                            <i class=\"fas fa-exclamation-triangle text-white\"></i>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class=\"small text-gray-500\">December 2, 2019</div>\n                                        Spending Alert: We've noticed unusually high spending for your account.\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n                            </div>\n                        </li>\n\n                        <!-- Nav Item - Messages -->\n                        <li class=\"nav-item dropdown no-arrow mx-1\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fas fa-envelope fa-fw\"></i>\n                                <!-- Counter - Messages -->\n                                <span class=\"badge badge-danger badge-counter\">7</span>\n                            </a>\n                            <!-- Dropdown - Messages -->\n                            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                                aria-labelledby=\"messagesDropdown\">\n                                <h6 class=\"dropdown-header\">\n                                    Message Center\n                                </h6>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"dropdown-list-image mr-3\">\n                                        <img class=\"rounded-circle\" src=\"img/undraw_profile_1.svg\"\n                                            alt=\"...\">\n                                        <div class=\"status-indicator bg-success\"></div>\n                                    </div>\n                                    <div class=\"font-weight-bold\">\n                                        <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a\n                                            problem I've been having.</div>\n                                        <div class=\"small text-gray-500\">Emily Fowler \u00B7 58m</div>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"dropdown-list-image mr-3\">\n                                        <img class=\"rounded-circle\" src=\"img/undraw_profile_2.svg\"\n                                            alt=\"...\">\n                                        <div class=\"status-indicator\"></div>\n                                    </div>\n                                    <div>\n                                        <div class=\"text-truncate\">I have the photos that you ordered last month, how\n                                            would you like them sent to you?</div>\n                                        <div class=\"small text-gray-500\">Jae Chun \u00B7 1d</div>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"dropdown-list-image mr-3\">\n                                        <img class=\"rounded-circle\" src=\"img/undraw_profile_3.svg\"\n                                            alt=\"...\">\n                                        <div class=\"status-indicator bg-warning\"></div>\n                                    </div>\n                                    <div>\n                                        <div class=\"text-truncate\">Last month's report looks great, I am very happy with\n                                            the progress so far, keep up the good work!</div>\n                                        <div class=\"small text-gray-500\">Morgan Alvarez \u00B7 2d</div>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                    <div class=\"dropdown-list-image mr-3\">\n                                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\"\n                                            alt=\"...\">\n                                        <div class=\"status-indicator bg-success\"></div>\n                                    </div>\n                                    <div>\n                                        <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone\n                                            told me that people say this to all dogs, even if they aren't good...</div>\n                                        <div class=\"small text-gray-500\">Chicken the Dog \u00B7 2w</div>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\n                            </div>\n                        </li>\n\n                        <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n                        <!-- Nav Item - User Information -->\n                        <li class=\"nav-item dropdown no-arrow\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Douglas McGee</span>\n                                <img class=\"img-profile rounded-circle\"\n                                    src=\"img/undraw_profile.svg\">\n                            </a>\n                            <!-- Dropdown - User Information -->\n                            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                                aria-labelledby=\"userDropdown\">\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Profile\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Settings\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Activity Log\n                                </a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Logout\n                                </a>\n                            </div>\n                        </li>\n\n                    </ul>\n\n                </nav>\n                <!-- End of Topbar -->\n\n                <!-- Begin Page Content -->\n                <div class=\"container-fluid\">\n\n                    <!-- Page Heading -->\n                    <h1 class=\"h3 mb-2 text-gray-800\">Product</h1>\n                   \n\n                    <!-- DataTales Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">Creat Product</h6>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"product\" id=\"product-data\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"check-validate form-control form-control-user\"\n                                        id=\"name\" aria-describedby=\"name\"\n                                        placeholder=\"Name product...\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"number\" class=\"check-validate form-control form-control-user\"\n                                        id=\"price\" aria-describedby=\"price\"\n                                        placeholder=\"Price ...\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"file\" class=\" form-control  \" style=\"border-radius: 30px; padding:10px 0 40px 15px;\"\n                                        id=\"image\" aria-describedby=\"image\"\n                                        placeholder=\"Photo product...\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <select name=\"status\" id=\"status\" class=\"check-validate form-control \"  style=\"border-radius: 30px;\" >\n                                        <option value=\"0\">puclic</option>\n                                        <option value=\"1\">private</option>\n                                    </select>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select name=\"category\" id=\"category\" class=\"check-validate form-control \"  style=\"border-radius: 30px;\" >\n                                      \n                                    </select>\n                                </div>\n                                <button class=\"btn btn-primary btn-user btn-block\">CREAT</button>\n                                \n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- /.container-fluid -->\n\n            </div>\n            <!-- End of Main Content -->\n\n            <!-- Footer -->\n            <footer class=\"sticky-footer bg-white\">\n                <div class=\"container my-auto\">\n                    <div class=\"copyright text-center my-auto\">\n                        <span>Copyright &copy; Your Website 2020</span>\n                    </div>\n                </div>\n            </footer>\n            <!-- End of Footer -->\n\n        </div>\n        <!-- End of Content Wrapper -->\n        ";
    };
    ProductCreat.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            // show danh mục sản phẩm   
            function selectCate() {
                return __awaiter(this, void 0, void 0, function () {
                    var data, cate, dataCate;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, CategoryAPI.all()];
                            case 1:
                                data = _a.sent();
                                return [4 /*yield*/, data.json()];
                            case 2:
                                cate = _a.sent();
                                dataCate = cate.map(function (ele) {
                                    return "\n            <option value=\"" + ele.id + "\">" + ele.name + "</option>\n            ";
                                }).join('');
                                document.getElementById('category').innerHTML = dataCate;
                                ;
                                return [2 /*return*/];
                        }
                    });
                });
            }
            // tạo sản phẩm
            function creatProduct() {
                return __awaiter(this, void 0, void 0, function () {
                    var firebaseConfig, img, images, storageRef;
                    var _this = this;
                    return __generator(this, function (_a) {
                        firebaseConfig = {
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
                        img = document.querySelector('#image');
                        console.log(typeof img);
                        images = img.files[0];
                        console.log(typeof images);
                        storageRef = firebase.storage().ref("images/" + images.name);
                        storageRef.put(images).then(function () {
                            storageRef.getDownloadURL().then(function (url) { return __awaiter(_this, void 0, void 0, function () {
                                var name, price, categoryId, status, photo, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            name = document.querySelector('#name').value;
                                            price = parseInt(document.querySelector('#price').value);
                                            categoryId = parseInt(document.querySelector('#category').value);
                                            status = parseInt(document.querySelector('#status').value);
                                            photo = url;
                                            data = new Product(0, name, price, photo, status, categoryId);
                                            return [4 /*yield*/, ProductAPI.create(data)
                                                    .then(function () {
                                                    window.location.href = '#/product/index';
                                                    location.reload();
                                                }).catch(function (err) { return console.log(err); })
                                                // }
                                            ];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [2 /*return*/];
                    });
                });
            }
            return __generator(this, function (_a) {
                selectCate();
                // creatProduct();
                document.querySelector('#product-data').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var validate = document.querySelectorAll('.check-validate');
                    var sum = 0;
                    validate.forEach(function (element) {
                        if (element.value == '') {
                            element.style.border = '1px solid #FF4D4D';
                            element.style.color = '#ffffff';
                            sum++;
                        }
                    });
                    if (sum === 0) {
                        creatProduct();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return ProductCreat;
}(Component));
export { ProductCreat };
