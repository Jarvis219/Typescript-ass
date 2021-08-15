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
import { CategoryAPI } from '../../api/CategoryAPI.js';
import { Banner } from './banner.js';
export var Header = {
    render: function () {
        return "\n        <div class=\"\" id=\"header-active\">\n        <div id=\"contact-header\">\n        \n        </div>\n        \n        <!-- header section strats -->\n        <header class=\"header_section shadow\">\n          <div class=\"container-fluid\">\n            <nav class=\"navbar navbar-expand-lg custom_nav-container \">\n              <a class=\"navbar-brand\" href=\"/\">\n                <img width=20 class=\"ml-10\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png\">\n              </a>\n    \n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"\"> </span>\n              </button>\n    \n              <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"navbar-nav\" id=\"menu-nav\">\n                  \n                </ul>\n                <div class=\" mr-4  flex justify-center items-center gap-3\">\n                  <div class=\"relative\">\n                  <form id=\"data-search\" class=\"\">\n                  <input type=\"text\" name=\"data_search\"  placeholder=\"Search...\" class=\"px-3 border border-gray-100 rounded\">\n                  <button id=\"btn-search\" class=\"absolute right-0   px-1 bg-gray-300 text-blue-400 text-sm rounded\"style=\"padding:2px 7px 4px 0;margin:0 0px 0\" >search</button>\n                  </form>\n                  </div>\n                  <div class=\"login-logout\">\n                    <a href=\"#/login\" class=\"signin\">\n                  <i class=\"fa fa-user\" aria-hidden=\"true\" style=\"font-size:19px;color:black\"></i>\n                  </a>\n                  <a href=\"#/registration\" class=\"inline-block \">\n                  <i class=\"fas fa-user-plus\" style=\"font-size:16px;color:black\"></i>\n                  </a>\n                  </div>\n                  <div  id=\"admin\">  </div>\n                  <div class=\"\"><a href=\"#/cart\">\n                  <i class=\"fa\" style=\"font-size:24px;color:black\">&#xf07a;</i>\n                  <span class='badge badge-warning ' id='lblCartCount'>  </span>\n                  </a></div>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </header>\n        <!-- end header section -->\n        <!-- slider section -->\n        <div id=\"banner-home-page\"></div>\n       \n      </div>\n        ";
    },
    afterRender: function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, url, data, cate, categories, _a, _b, countcart, sumItemCart;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //  console.log(location.href)
                        // const 
                        document.querySelector('#admin').addEventListener('click', function () {
                            window.location.href = '#/users/index';
                        });
                        // đăng nhập, đăng xuất check quyền truy cập page admin
                        if (JSON.parse(localStorage.getItem('username'))) {
                            user = JSON.parse(localStorage.getItem('username')).user;
                            if (user.permissions === 1) {
                                document.querySelector('#admin').innerHTML = "\n        <i class=\"fas fa-user-shield\" style=\"font-size:17px;color:black\"></i>\n        ";
                            }
                            document.querySelector('.login-logout').innerHTML = "\n      <i class=\"fas fa-sign-in-alt\"></i>\n      ";
                            document.querySelector('.login-logout').addEventListener('click', function () {
                                localStorage.removeItem('username');
                                window.location.href = '/';
                            });
                        }
                        url = location.href.split('/');
                        //  console.log(url)
                        //  console.log(url.length)
                        if (url.length === 6 && url[4] == 'watches' || url[4] == 'about' || url[4] == 'contacts' || url[4] == 'cart' || url[4] == 'checkout') {
                            document.querySelector('#wrapper').style.display = 'block';
                        }
                        if (location.href == 'http://localhost:7000/' || location.href == 'http://localhost:7000') {
                            document.querySelector('#banner-home-page').innerHTML = Banner.render();
                            document.querySelector('#header-active').classList.add('hero_area');
                            document.querySelector('#contact-header').innerHTML = "\n       <div class=\"hero_social\">\n       <a href=\"\">\n         <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n       </a>\n       <a href=\"\">\n         <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n       </a>\n       <a href=\"\">\n         <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n       </a>\n       <a href=\"\">\n         <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n       </a>\n     </div>\n       ";
                        }
                        return [4 /*yield*/, CategoryAPI.all()];
                    case 1:
                        data = _c.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        cate = _c.sent();
                        categories = cate.map(function (ele) {
                            return "\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/watches/" + ele.id + "\">" + ele.name + " </a>\n                  </li>\n                 \n      ";
                        }).join('');
                        // console.log(document.querySelector('#menu-nav'))
                        _a = document.querySelector('#menu-nav');
                        _b = "\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n                  </li>\n                  ";
                        return [4 /*yield*/, categories];
                    case 3:
                        // console.log(document.querySelector('#menu-nav'))
                        _a.innerHTML = _b + (_c.sent()) + "\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/about\"> About </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/contacts\">Contact Us</a>\n                  </li>\n    ";
                        document.querySelector('#data-search').addEventListener('submit', function (e) {
                            e.preventDefault();
                            var dataSearch = document.querySelector('[name="data_search"]').value;
                            // console.log(dataSearch);
                            window.location.href = "#/watches/" + dataSearch;
                            // (document.querySelector('#btn-search') as HTMLInputElement).disabled = true;
                            // return false;
                        });
                        countcart = document.getElementById('lblCartCount');
                        sumItemCart = function () {
                            var cartStorage = localStorage.getItem('cart');
                            var screenCart = null;
                            if (cartStorage == null) {
                                screenCart = [];
                            }
                            else {
                                screenCart = JSON.parse(cartStorage);
                            }
                            var totalItem = 0;
                            screenCart.forEach(function (element) {
                                totalItem += element.amount;
                            });
                            return totalItem;
                        };
                        // console.log(sumItemCart());
                        countcart.innerHTML = sumItemCart().toString();
                        return [2 /*return*/];
                }
            });
        });
    }
};
