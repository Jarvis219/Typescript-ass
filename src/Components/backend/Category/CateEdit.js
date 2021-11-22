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
import { CategoryAPI } from "../../api/CategoryAPI.js";
import { Component } from "../../Component.js";
import { Category } from "../../../Model/CateMode.js";
import { SideBar } from "../Navbar/navbar.js";
var CateEdit = /** @class */ (function (_super) {
    __extends(CateEdit, _super);
    function CateEdit(_id) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this._id = _id;
        return _this;
    }
    CateEdit.prototype.template = function () {
        return "\n        " + SideBar.render() + "\n        <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n            <!-- Main Content -->\n            <div id=\"content\">\n\n                <!-- Topbar -->\n                <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n                    <!-- Sidebar Toggle (Topbar) -->\n                    <form class=\"form-inline\">\n                        <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n                            <i class=\"fa fa-bars\"></i>\n                        </button>\n                    </form>\n\n                    <!-- Topbar Search -->\n                    <form\n                        class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\"\n                                aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"button\">\n                                    <i class=\"fas fa-search fa-sm\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <!-- Topbar Navbar -->\n                    <ul class=\"navbar-nav ml-auto\">\n\n                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n                        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fas fa-search fa-fw\"></i>\n                            </a>\n                            <!-- Dropdown - Messages -->\n                            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\"\n                                aria-labelledby=\"searchDropdown\">\n                                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"check-validate form-control bg-light border-0 small\"\n                                            placeholder=\"Search for...\" aria-label=\"Search\"\n                                            aria-describedby=\"basic-addon2\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary\" type=\"button\">\n                                                <i class=\"fas fa-search fa-sm\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </li>\n\n                        \n\n                        <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n                        <!-- Nav Item - User Information -->\n                        <li class=\"nav-item dropdown no-arrow\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Douglas McGee</span>\n                                <img class=\"img-profile rounded-circle\"\n                                    src=\"https://i.ytimg.com/vi/FlBlt5xVvWY/maxresdefault.jpg\">\n                            </a>\n                            <!-- Dropdown - User Information -->\n                            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                                aria-labelledby=\"userDropdown\">\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Profile\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Settings\n                                </a>\n                                <a class=\"dropdown-item\" href=\"#\">\n                                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Activity Log\n                                </a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                                    Logout\n                                </a>\n                            </div>\n                        </li>\n\n                    </ul>\n\n                </nav>\n                <!-- End of Topbar -->\n\n                <!-- Begin Page Content -->\n                <div class=\"container-fluid\">\n\n                    <!-- Page Heading -->\n                    <h1 class=\"h3 mb-2 text-gray-800\">Category</h1>\n                   \n\n                    <!-- DataTales Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">Creat Category</h6>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"cate\" id=\"btn-cate\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control form-control-user\"\n                                        id=\"name\" aria-describedby=\"name\"\n                                        placeholder=\"Name category...\">\n                                </div>\n                                <button class=\"btn btn-primary btn-user btn-block\">CREAT</button>\n                                \n                                \n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- /.container-fluid -->\n\n            </div>\n            <!-- End of Main Content -->\n\n            <!-- Footer -->\n            <footer class=\"sticky-footer bg-white\">\n                <div class=\"container my-auto\">\n                    <div class=\"copyright text-center my-auto\">\n                        <span>Copyright &copy; Your Website 2020</span>\n                    </div>\n                </div>\n            </footer>\n            <!-- End of Footer -->\n\n        </div>\n        <!-- End of Content Wrapper -->\n        ";
    };
    CateEdit.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, dataCate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this._id != 'undefined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, CategoryAPI.find(this._id)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        dataCate = _a.sent();
                        //   console.log(dataCate);
                        document.querySelector('#name').value = dataCate.name;
                        document.querySelector('#btn-cate').addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var inPName, name_1, cate;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        if (!(document.querySelector('.check-validate').value == ' ')) return [3 /*break*/, 1];
                                        document.querySelector('.check-validate').style.border = '1px solid #FF4D4D';
                                        return [3 /*break*/, 3];
                                    case 1:
                                        inPName = document.querySelector('#name');
                                        name_1 = inPName.value;
                                        cate = new Category(Number(this._id), name_1);
                                        if (!(typeof this._id != 'undefined')) return [3 /*break*/, 3];
                                        //   console.log(this._id)
                                        return [4 /*yield*/, CategoryAPI.update(this._id, cate).then(function () {
                                                window.location.hash = '#/category/index';
                                            })];
                                    case 2:
                                        //   console.log(this._id)
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CateEdit;
}(Component));
export { CateEdit };
