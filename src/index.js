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
/*///<reference path ="./Components/User/UserCreat.ts"/>
///<reference path ="./Components/Component.ts"/> */
// ---------------------------Admin-------------------------------//
import { UserCreat } from './Components/backend/User/UserCreat.js';
import { UserIndex } from './Components/backend/User/UserIndex.js';
import { UserEdit } from './Components/backend/User/UserEdit.js';
import { UserDelete } from './Components/backend/User/UserRemove.js';
import { CateCreat } from './Components/backend/Category/CateCreat';
import { CateEdit } from './Components/backend/Category/CateEdit';
import { CateIndex } from './Components/backend/Category/CateIndex';
import { ProductCreat } from './Components/backend/Product/ProductCreat.js';
import { ProductIndex } from './Components/backend/Product/ProductIndex.js';
import { ProductEdit } from './Components/backend/Product/ProductEdit.js';
import { OrderIndex } from './Components/backend/Order/orderIndex.js';
// ---------------------------Client-------------------------------//
import { HomePage } from './Components/client/homePage/homePage.js';
import { WachPage } from './Components/client/watchPage/watchPage.js';
import { AboutPage } from './Components/client/aboutPage/AboutPage.js';
import { ContactPage } from './Components/client/contactPage/contactPage.js';
import { ContactIndex } from './Components/backend/Contact/ContactIndex.js';
import { Login } from './Components/client/userPage/login.js';
import { CartPage } from './Components/client/cartPage/cart.js';
import { CheckOutPage } from './Components/client/checkOutPage/checkOut.js';
import { Registration } from './Components/client/userPage/registration.js';
// import { Route } from 'navigo';
import Navigo from 'navigo'; // When using ES modules.
var router = new Navigo('/', { hash: true, linksSelector: "a" });
//  declare const window:any; 
//  type Route = {
//     name: string;
//     path: string | RegExp;
//   };
//   type Match = {
//     url: string;
//     queryString: string;
//     hashString: string;
//     route: Route;
//     data: {[key:string]:string} | null ;
//     params: {[key:string]:string} | null;
//   };
if (JSON.parse(localStorage.getItem('username'))) {
    var user = JSON.parse(localStorage.getItem('username')).user;
}
var routes = function () {
    router
        .on('/', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new HomePage();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/login', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new Login();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/registration', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new Registration();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/watches/:id', function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var id, gui;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                    gui = new WachPage(id);
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/about', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new AboutPage();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    gui.afterRender();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/contacts', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new ContactPage();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/cart', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new CartPage();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/checkout', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gui = new CheckOutPage();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })
        .on('/users/index', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new UserIndex();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/category/index', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new CateIndex();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/product/index', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new ProductIndex();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/contact/index', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new ContactIndex();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/order/index', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new OrderIndex();
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/users/creat', function () {
        if (user) {
            if (user.permissions === 1) {
                var gui = new UserCreat();
                gui.render();
            }
            else {
                window.location.href = '/';
            }
        }
        else {
            window.location.href = '/';
        }
    })
        .on('/category/creat', function () {
        if (user) {
            if (user.permissions === 1) {
                var gui = new CateCreat();
                gui.render();
            }
            else {
                window.location.href = '/';
            }
        }
        else {
            window.location.href = '/';
        }
    })
        .on('/product/creat', function () {
        if (user) {
            if (user.permissions === 1) {
                var gui = new ProductCreat();
                gui.render();
            }
            else {
                window.location.href = '/';
            }
        }
        else {
            window.location.href = '/';
        }
    })
        .on('/users/edit/:id', function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var id, gui;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new UserEdit(id);
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/category/edit/:id', function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var id, gui;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new CateEdit(id);
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/product/edit/:id', function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var id, gui;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new ProductEdit(id);
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .on('/users/delete/:id', function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var id, gui;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                    if (!user) return [3 /*break*/, 4];
                    if (!(user.permissions === 1)) return [3 /*break*/, 2];
                    gui = new UserDelete(id);
                    return [4 /*yield*/, gui.render()];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    window.location.href = '/';
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    window.location.href = '/';
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); })
        .resolve();
};
routes();
