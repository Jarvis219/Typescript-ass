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
import { OrderAPI } from "../../api/OrderAPI.js";
import { SideBar } from "../../backend/Navbar/navbar.js";
var OrderIndex = /** @class */ (function (_super) {
    __extends(OrderIndex, _super);
    function OrderIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderIndex.prototype.template = function () {
        return "\n        " + SideBar.render() + "\n        <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n            <!-- Main Content -->\n            <div id=\"content\">\n\n                <!-- Topbar -->\n                <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n                    <!-- Sidebar Toggle (Topbar) -->\n                    <form class=\"form-inline\">\n                        <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n                            <i class=\"fa fa-bars\"></i>\n                        </button>\n                    </form>\n\n                    <!-- Topbar Search -->\n                    <form\n                        class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\"\n                                aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"button\">\n                                    <i class=\"fas fa-search fa-sm\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <!-- Topbar Navbar -->\n                    <ul class=\"navbar-nav ml-auto\">\n\n                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n                        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fas fa-search fa-fw\"></i>\n                            </a>\n                            <!-- Dropdown - Messages -->\n                            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\"\n                                aria-labelledby=\"searchDropdown\">\n                                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control bg-light border-0 small\"\n                                            placeholder=\"Search for...\" aria-label=\"Search\"\n                                            aria-describedby=\"basic-addon2\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary\" type=\"button\">\n                                                <i class=\"fas fa-search fa-sm\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </li>\n\n                        \n\n                        <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n                        <!-- Nav Item - User Information -->\n                        <li class=\"nav-item dropdown no-arrow\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Douglas McGee</span>\n                                <img class=\"img-profile rounded-circle\"\n                                    src=\"https://i.ytimg.com/vi/FlBlt5xVvWY/maxresdefault.jpg\">\n                            </a>\n                            <!-- Dropdown - User Information -->\n                            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                                aria-labelledby=\"userDropdown\">\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Profile\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Settings\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Activity Log\n                                </a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Logout\n                                </a>\n                            </div>\n                        </li>\n\n                    </ul>\n\n                </nav>\n                <!-- End of Topbar -->\n\n                <!-- Begin Page Content -->\n                <div class=\"container-fluid\">\n\n                    <!-- Page Heading -->\n                    <h1 class=\"h3 mb-2 text-gray-800\">Tables Product</h1>\n                    \n\n                    <!-- DataTales Example -->\n                    <div class=\"card shadow mb-4\">\n                        \n                        <div class=\"card-body\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered text-center mx-auto\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                            <th>Email</th>\n                                            <th>Phone</th>\n                                            <th>Address</th>\n                                            <th>Sum Price</th>\n                                            <th>view</i></th>\n                                            <th colspan=\"2\">Orther</th>\n                                        </tr>\n                                    </thead>\n                                    <tfoot>\n                                        <tr>\n                                        <th>Name</th>\n                                            <th>Email</th>\n                                            <th>Phone</th>\n                                            <th>Address</th>\n                                            <th>Sum Price</th>\n                                            <th>view</i></th>\n                                            <th colspan=\"2\">Orther</th>\n                                        </tr>\n                                    </tfoot>\n                                    <tbody id=\"data-order\">\n\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"flex justify-end items-center\">\n                             \n                                <div class=\"px-2 rounded-l-lg py-2  bg-gray-100 shadow-sm\"><button id=\"prev\" class=\"font-bold text-blue-500\">Prev</button></div>\n                                <div  class=\"px-3 shadow-sm   py-2  bg-gray-200  \"><span  class=\"font-bold text-blue-500\" id=\"page-number\">1</spanid></div>\n                                <div  class=\"px-2 rounded-r-lg py-2  bg-gray-100 shadow-sm\"><button  id=\"next\" class=\"font-bold text-blue-500\">Next</button></div>\n                                \n                           \n                            </div>\n                        </div>\n                       \n                    </div>\n                   \n                </div>\n                <!-- /.container-fluid -->\n\n            </div>\n            <!-- End of Main Content -->\n\n        <div id=\"detail-order\" class=\" container mx-auto absolute mt-56 right-0 hidden\">\n            <div class=\"bg-gray-200 w-3/4  px-8\">\n                <div  class=\"flex justify-center items-center gap-10 py-4 \">\n                        <div class=\"text-sm\">\n                        <div>\n                            <span id=\"name-detail\">\n                                Name: kai\n                            </span>\n                        </div>\n                        <div>\n                            <span id=\"email-detail\">\n                                Email:@\n                            </span>\n                        </div>\n                        <div>\n                            <span id=\"phone-detail\">\n                                Phone:sdsadas\n                            </span>\n                        </div>\n                        <div>\n                            <span id=\"address-detail\">\n                                Address:sdas\n                            </span>\n                        </div>\n                    </div>\n                    <div>\n                        <table class=\"text-center text-xs\">\n                            <thead>\n                                <tr>\n                                    <th class=\"border-2 border-blue-200 p-1\">product</th>\n                                    <th class=\"border-2 border-blue-200 p-1\">amount</th>\n                                    <th class=\"border-2 border-blue-200 p-1\">price</th>\n                                    <th class=\"border-2 border-blue-200 p-1\">sum</th>\n                                </tr>\n                            </thead>\n                            <tbody id=\"data-detail\">\n                                <tr>\n                                    <td class=\"border-2 border-blue-200 p-1\">1</td>\n                                    <td class=\"border-2 border-blue-200 p-1\">1</td>\n                                    <td class=\"border-2 border-blue-200 p-1\">1</td>\n                                    <td class=\"border-2 border-blue-200 p-1\">1</td>\n                                </tr>\n                               \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                \n                <div class=\"text-right \"><button class=\"shadow bg-red-400 px-2 rounded text-white mr-10 mb-3 cancel\">Cancel</button></div>\n            </div>\n            \n        </div>\n\n            <!-- Footer -->\n            <footer class=\"sticky-footer bg-white\">\n                <div class=\"container my-auto\">\n                    <div class=\"copyright text-center my-auto\">\n                        <span>Copyright &copy; Your Website 2020</span>\n                    </div>\n                </div>\n            </footer>\n            <!-- End of Footer -->\n\n        </div>\n        <!-- End of Content Wrapper -->\n\n        ";
    };
    OrderIndex.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            function listOrder() {
                return __awaiter(this, void 0, void 0, function () {
                    var datas, orders, result, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, OrderAPI.all()];
                            case 1:
                                datas = _b.sent();
                                return [4 /*yield*/, datas.json()];
                            case 2:
                                orders = _b.sent();
                                result = orders.map(function (element) {
                                    return "\n                <tr class=\"col-" + element.id + "\">\n                    <td  class=\"border border-indigo-600 px-3  \" ><span class=\"block py-12\">" + element.name + "</span></td>\n                    <td  class=\"border border-indigo-600 px-3  \"><span class=\" block py-12\">" + element.email + "</span></td>\n                    <td  class=\"border border-indigo-600 px-3 \"><span class=\"block py-12\">0" + element.phone + "</span></td>\n                    <td  class=\"border border-indigo-600 px-3\"><span class=\" block py-12\">" + element.address + "</span></td>\n                    <td  class=\"border border-indigo-600 px-3\"><span class=\" block py-12\">$" + element.sumMoney + "</span> </td>\n                    <td  class=\"border border-indigo-600 px-3\"><span data-id=\"" + element.id + "\" class=\"view-order cursor-pointer block py-12\"><i class=\"far fa-eye\"></i></span></td>\n                    <td class=\"border border-indigo-600 px-3 \" ><a href=\"#/order/edit/" + element.id + "\"  data-navigo class=\"block my-12 mx-auto shadow bg-green-400 py-1 px-2 rounded text-white hover:bg-blue-400 \"><button disabled>edit</button><a></td>\n                    <td class=\"border border-indigo-600 px-3 \" ><button data-id=\"" + element.id + "\"  class=\"deleted block my-12 py-1 mx-auto shadow bg-red-400 px-2 rounded text-white hover:bg-gray-400\">delete</button></td>\n                </tr>\n                ";
                                }).join("");
                                _a = document.getElementById('data-order');
                                return [4 /*yield*/, result];
                            case 3:
                                _a.innerHTML = _b.sent();
                                checkView();
                                deleted();
                                return [2 /*return*/];
                        }
                    });
                });
            }
            function checkView() {
                var _this = this;
                document.querySelector('.cancel').addEventListener('click', function () {
                    document.querySelector('#detail-order').classList.toggle('hidden');
                });
                document.querySelectorAll('.view-order').forEach(function (ele) {
                    ele.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                        var id, response, data, result, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(ele instanceof HTMLElement)) return [3 /*break*/, 5];
                                    id = ele.dataset.id;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 5]);
                                    return [4 /*yield*/, OrderAPI.find(id)];
                                case 2:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.json()];
                                case 3:
                                    data = _a.sent();
                                    document.querySelector('#name-detail').innerHTML = 'Name: ' + data.name;
                                    document.querySelector('#email-detail').innerHTML = 'Email: ' + data.email;
                                    document.querySelector('#address-detail').innerHTML = 'Address: ' + data.address;
                                    document.querySelector('#phone-detail').innerHTML = 'Phone: 0' + data.phone;
                                    document.querySelector('#detail-order').classList.toggle('hidden');
                                    result = data.product.map(function (ele) {
                                        // console.log(ele)
                                        return "\n                                <tr >\n                                <td class=\"border-2 border-blue-200 p-1\">" + ele.product + "</td>\n                                <td class=\"border-2 border-blue-200 p-1\">" + ele.amount + "</td>\n                                <td class=\"border-2 border-blue-200 p-1\">$" + ele.price + "</td>\n                                <td class=\"border-2 border-blue-200 p-1\">$" + ele.sum + "</td>\n                              </tr>\n                                ";
                                    }).join('');
                                    document.getElementById('data-detail').innerHTML = result + "\n                            <tr class=\"font-bold text-blue-400\">\n                            <td colspan=\"1\uFE0F\" class=\"border-2 border-blue-200 p-1\">SUM</td>\n                            <td colspan=\"3\" id=\"sumproduct\" class=\"border-2 border-blue-200 p-1\">$" + data.sumMoney + "</td>\n                          </tr>\n                            ";
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _a.sent();
                                    console.log(error_1);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                });
            }
            function deleted() {
                document.querySelectorAll('.deleted').forEach(function (ele) {
                    ele.addEventListener('click', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var id, question, removeItem, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(ele instanceof HTMLElement)) return [3 /*break*/, 4];
                                        id = ele.dataset.id;
                                        question = confirm('are you want to delete ?');
                                        if (!question) return [3 /*break*/, 4];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, OrderAPI.deleted(id)];
                                    case 2:
                                        _a.sent();
                                        removeItem = document.querySelector(".col-" + id);
                                        removeItem.remove();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_2 = _a.sent();
                                        console.log(error_2);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    });
                });
            }
            return __generator(this, function (_a) {
                listOrder();
                return [2 /*return*/];
            });
        });
    };
    return OrderIndex;
}(Component));
export { OrderIndex };
