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
import { Component } from '../../Component.js';
import { SideBar } from "../Navbar/navbar.js";
import { ProductAPI } from '../../api/ProductAPI.js';
import { Product } from '../../../Model/ProductModel.js';
var ProductIndex = /** @class */ (function (_super) {
    __extends(ProductIndex, _super);
    function ProductIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductIndex.prototype.template = function () {
        return "\n        " + SideBar.render() + "\n        <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n            <!-- Main Content -->\n            <div id=\"content\">\n\n                <!-- Topbar -->\n                <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n                    <!-- Sidebar Toggle (Topbar) -->\n                    <form class=\"form-inline\">\n                        <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n                            <i class=\"fa fa-bars\"></i>\n                        </button>\n                    </form>\n\n                    <!-- Topbar Search -->\n                    <form\n                        class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\"\n                                aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"button\">\n                                    <i class=\"fas fa-search fa-sm\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <!-- Topbar Navbar -->\n                    <ul class=\"navbar-nav ml-auto\">\n\n                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n                        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fas fa-search fa-fw\"></i>\n                            </a>\n                            <!-- Dropdown - Messages -->\n                            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\"\n                                aria-labelledby=\"searchDropdown\">\n                                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control bg-light border-0 small\"\n                                            placeholder=\"Search for...\" aria-label=\"Search\"\n                                            aria-describedby=\"basic-addon2\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary\" type=\"button\">\n                                                <i class=\"fas fa-search fa-sm\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </li>\n\n                        \n\n                        <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n                        <!-- Nav Item - User Information -->\n                        <li class=\"nav-item dropdown no-arrow\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Douglas McGee</span>\n                                <img class=\"img-profile rounded-circle\"\n                                    src=\"https://i.ytimg.com/vi/FlBlt5xVvWY/maxresdefault.jpg\">\n                            </a>\n                            <!-- Dropdown - User Information -->\n                            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                                aria-labelledby=\"userDropdown\">\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Profile\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Settings\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Activity Log\n                                </a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Logout\n                                </a>\n                            </div>\n                        </li>\n\n                    </ul>\n\n                </nav>\n                <!-- End of Topbar -->\n\n                <!-- Begin Page Content -->\n                <div class=\"container-fluid\">\n\n                    <!-- Page Heading -->\n                    <h1 class=\"h3 mb-2 text-gray-800\">Tables Product</h1>\n                    \n\n                    <!-- DataTales Example -->\n                    <div class=\"card shadow mb-4\">\n                        \n                        <div class=\"card-body\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered text-center mx-auto\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                            <th>price</th>\n                                            <th>photo</th>\n                                            <th>category</th>\n                                            <th>status</th>\n                                            <th colspan=\"2\">Orther</th>\n                                        </tr>\n                                    </thead>\n                                    <tfoot>\n                                        <tr>\n                                            <th>Name</th>\n                                            <th>price</th>\n                                            <th>photo</th>\n                                            <th>category</th>\n                                            <th>status</th>\n                                            <th colspan=\"2\">Orther</th>\n                                        </tr>\n                                    </tfoot>\n                                    <tbody id=\"data-product\">\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"flex justify-end items-center\">\n                             \n                                <div class=\"px-2 rounded-l-lg py-2  bg-gray-100 shadow-sm\"><button id=\"prev\" class=\"font-bold text-blue-500\">Prev</button></div>\n                                <div  class=\"px-3 shadow-sm   py-2  bg-gray-200  \"><span  class=\"font-bold text-blue-500\" id=\"page-number\">1</spanid></div>\n                                <div  class=\"px-2 rounded-r-lg py-2  bg-gray-100 shadow-sm\"><button  id=\"next\" class=\"font-bold text-blue-500\">Next</button></div>\n                                \n                           \n                            </div>\n                        </div>\n                       \n                    </div>\n                   \n                </div>\n                <!-- /.container-fluid -->\n\n            </div>\n            <!-- End of Main Content -->\n\n            <!-- Footer -->\n            <footer class=\"sticky-footer bg-white\">\n                <div class=\"container my-auto\">\n                    <div class=\"copyright text-center my-auto\">\n                        <span>Copyright &copy; Your Website 2020</span>\n                    </div>\n                </div>\n            </footer>\n            <!-- End of Footer -->\n\n        </div>\n        <!-- End of Content Wrapper -->\n        ";
    };
    ProductIndex.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            // xóa sp
            // cập nhật trạng thái sp 0-public 1-private 2-cancel
            function changeStatus() {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        document.querySelectorAll('.status').forEach(function (element) {
                            // console.log(element)
                            element.addEventListener('change', function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var id, sttChange, dataSttChange, stt, dataStt, question;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            e.preventDefault();
                                            if (!(element instanceof HTMLElement)) return [3 /*break*/, 6];
                                            id = element.dataset.id;
                                            if (!(typeof id === 'string')) return [3 /*break*/, 6];
                                            return [4 /*yield*/, ProductAPI.find(id)];
                                        case 1:
                                            sttChange = _a.sent();
                                            return [4 /*yield*/, sttChange.json()];
                                        case 2:
                                            dataSttChange = _a.sent();
                                            stt = parseInt(element.value);
                                            console.log(stt);
                                            if (!(stt == 1 || stt == 0)) return [3 /*break*/, 4];
                                            dataStt = new Product(0, dataSttChange.name, dataSttChange.price, dataSttChange.photo, stt, dataSttChange.categoryId);
                                            // console.log(dataStt)
                                            return [4 /*yield*/, ProductAPI.update(id, dataStt).then(function () {
                                                    // location.reload();
                                                })];
                                        case 3:
                                            // console.log(dataStt)
                                            _a.sent();
                                            return [3 /*break*/, 6];
                                        case 4:
                                            question = confirm('you are want to delete?');
                                            if (!question) return [3 /*break*/, 6];
                                            return [4 /*yield*/, ProductAPI.delete(id).then(function () {
                                                    location.reload();
                                                })];
                                        case 5:
                                            _a.sent();
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [2 /*return*/];
                    });
                });
            }
            var numberPage, sum, listDataPage;
            var _this = this;
            return __generator(this, function (_a) {
                numberPage = document.querySelector('#page-number').innerHTML = '1';
                sum = 1;
                document.getElementById('prev').addEventListener('click', function (e) {
                    e.preventDefault();
                    // console.log(sum)
                    sum -= parseInt(numberPage);
                    if (sum <= 1) {
                        sum = 1;
                    }
                    document.querySelector('#page-number').innerHTML = sum.toString();
                    listDataPage(sum);
                });
                document.getElementById('next').addEventListener('click', function (e) {
                    e.preventDefault();
                    sum += parseInt(numberPage);
                    // console.log(sum);
                    document.querySelector('#page-number').innerHTML = sum.toString();
                    listDataPage(sum);
                });
                listDataPage = function (num) {
                    if (num === void 0) { num = 1; }
                    return __awaiter(_this, void 0, void 0, function () {
                        var data, products, dataProduct;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, ProductAPI.pageList(num)];
                                case 1:
                                    data = _a.sent();
                                    return [4 /*yield*/, data.json()];
                                case 2:
                                    products = _a.sent();
                                    dataProduct = products.map(function (element) {
                                        // console.log(element.name)
                                        // console.log(element.category.name)
                                        var status = function () {
                                            if (element.status == 0) {
                                                return "\n                    <option value=\"0\">puclic</option>\n                    <option value=\"1\">private</option>\n                    <option value=\"2\">cancel</option>\n                    ";
                                            }
                                            else {
                                                return "\n                    <option value=\"1\">private</option>\n                    <option value=\"0\">puclic</option>\n                    <option value=\"2\">cancel</option>\n                    ";
                                            }
                                        };
                                        return "\n            <tr>\n            <td  class=\"border border-indigo-600 px-3  \" ><span class=\"block py-12\">" + element.name + "</span></td>\n            <td  class=\"border border-indigo-600 px-3  \"><span class=\" block py-12\">" + element.price + "</span></td>\n            <td  class=\"border border-indigo-600 px-3 \"><img src=\"" + element.photo + "\" width=\"100\" height=\"100\" class=\" block mx-auto \"></td>\n            <td  class=\"border border-indigo-600 px-3\"><span class=\" block py-12\">" + element.category.name + "</span></td>\n            <td  class=\"border border-indigo-600 px-3\"><form> \n            <select name=\"status\" id=\"status\" data-id=\"" + element.id + "\" class=\"status block py-12 w-24 mx-auto\"  style=\"border-radius: 30px;\" >" + status() + " </select> \n            </form></td>\n            <td class=\"border border-indigo-600 px-3 \" ><a href=\"#/product/edit/" + element.id + "\" data-navigo class=\"block my-12 mx-auto shadow bg-green-400 py-1 px-2 rounded text-white hover:bg-blue-400 \"><button>edit</button><a></td>\n            <td class=\"border border-indigo-600 px-3 \" ><button data-id=\"" + element.id + "\"  class=\"deleted block my-12 py-1 mx-auto shadow bg-red-400 px-2 rounded text-white hover:bg-gray-400\">delete</button></td>\n        </tr>\n            ";
                                    }).join("");
                                    document.getElementById('data-product').innerHTML = dataProduct;
                                    // console.log(document.getElementById('status'))
                                    changeStatus();
                                    document.querySelectorAll('.deleted').forEach(function (ele) {
                                        ele.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
                                            function deleted(id) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, ProductAPI.delete(id).then(function () {
                                                                    location.reload();
                                                                }).catch(function (err) {
                                                                    console.log(err);
                                                                })];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                });
                                            }
                                            var id, stt, dataStt, dataNew, question;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        e.preventDefault();
                                                        if (!(ele instanceof HTMLElement)) return [3 /*break*/, 5];
                                                        id = ele.dataset.id;
                                                        if (!(typeof id == "string")) return [3 /*break*/, 5];
                                                        return [4 /*yield*/, ProductAPI.find(id)];
                                                    case 1:
                                                        stt = _a.sent();
                                                        return [4 /*yield*/, stt.json()];
                                                    case 2:
                                                        dataStt = _a.sent();
                                                        if (!(dataStt.status == 0)) return [3 /*break*/, 4];
                                                        dataNew = new Product(0, dataStt.name, dataStt.price, dataStt.photo, 1, dataStt.categoryId);
                                                        // console.log(data)
                                                        return [4 /*yield*/, ProductAPI.update(id, dataNew)
                                                                .then(function (data) {
                                                                // console.log(data)
                                                                location.reload();
                                                            })];
                                                    case 3:
                                                        // console.log(data)
                                                        _a.sent();
                                                        return [3 /*break*/, 5];
                                                    case 4:
                                                        question = confirm('you are want to delete?');
                                                        if (question) {
                                                            deleted(id);
                                                        }
                                                        _a.label = 5;
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                listDataPage();
                return [2 /*return*/];
            });
        });
    };
    return ProductIndex;
}(Component));
export { ProductIndex };
