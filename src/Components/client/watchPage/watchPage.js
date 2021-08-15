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
import { Header } from "../header/header.js";
import { Footer } from "../footer/footer.js";
import { ProductAPI } from "../../api/ProductAPI.js";
// import {Category} from '../../Model/CateMode.js';
var WachPage = /** @class */ (function (_super) {
    __extends(WachPage, _super);
    function WachPage(_id) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this._id = _id;
        return _this;
    }
    WachPage.prototype.template = function () {
        return "\n       <div>\n       " + Header.render() + "\n\n       <section class=\"shop_section layout_padding\">\n    <div class=\"container\">\n      <div class=\"heading_container heading_center\">\n        <h2 id=\"category-name\">\n          Latest Watches\n        </h2>\n      </div>\n      <div class=\"mx-auto flex justify-center items-center gap-10\">\n        <div>\n          <form>\n            <select class=\"sort-select form-select border border-blue-200 py-2 px-3 rounded text-blue-400\" >\n              <option selected>Open this select menu</option>\n              <option value=\"asc\">ASC</option>\n              <option value=\"desc\">DESC</option>\n            </select> \n          </form>\n        </div>\n        <div>\n\n        </div>\n      </div>\n      <div class=\"row\" id=\"data-watches\">\n        \n        \n      </div>\n      <div class=\"btn-box\">\n        <a href=\"\">\n          View All\n        </a>\n      </div>\n    </div>\n  </section>\n\n  <!-- end shop section -->\n\n       " + Footer.render() + "\n       </div>\n        ";
    };
    ;
    WachPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, dataCheck, resuleCheck, total, listData_1, btnAddtoCart, addToCart;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Header.afterRender()];
                    case 1:
                        _a.sent();
                        id = this._id;
                        return [4 /*yield*/, ProductAPI.all()];
                    case 2:
                        dataCheck = _a.sent();
                        return [4 /*yield*/, dataCheck.json()];
                    case 3:
                        resuleCheck = _a.sent();
                        total = resuleCheck.filter(function (element) {
                            return (element.categoryId == id);
                        });
                        if (typeof id == "string") {
                            listData_1 = function (totals, id, sort) {
                                if (sort === void 0) { sort = 'asc'; }
                                return __awaiter(_this, void 0, void 0, function () {
                                    var ids, products, dataSearch, data, result, _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                ids = id.toString();
                                                if (!(totals === 0)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, ProductAPI.searchProduct(ids, sort)];
                                            case 1:
                                                dataSearch = _c.sent();
                                                return [4 /*yield*/, dataSearch.json()];
                                            case 2:
                                                products = _c.sent();
                                                return [3 /*break*/, 6];
                                            case 3: return [4 /*yield*/, ProductAPI.findById(ids, sort)];
                                            case 4:
                                                data = _c.sent();
                                                return [4 /*yield*/, data.json()];
                                            case 5:
                                                products = _c.sent();
                                                _c.label = 6;
                                            case 6:
                                                result = products.map(function (element) {
                                                    if (element.status == 0) {
                                                        return "\n              <div class=\"col-sm-6 col-xl-3 overflow-hidden\" >\n              <div class=\"box\">\n                <a href=\"\">\n                  <div class=\"img-box\">\n                    <img src=\"" + element.photo + "\"  alt=\"\">\n                  </div>\n                  <div class=\"detail-box overflow-hidden h-20\">\n                    <h6>\n                      " + element.name + "\n                    </h6>\n                    <h6>\n                      Price:\n                      <span>\n                       $" + element.price + "\n                      </span>\n                      <div class=\"text-center text-4xl text-blue-400 hover:text-green-500\"><button data-id=\"" + element.id + "\" id=\"cara\" class=\"add-cart \"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i></button></div>\n                    </h6>\n                   \n                  </div>\n                 \n                  <div class=\"new\">\n                    <span>\n                      New\n                    </span>\n                  </div>\n                </a>\n              </div>\n            </div>\n  \n              ";
                                                    }
                                                }).join("");
                                                // console.log(products)
                                                _a = document.getElementById('category-name');
                                                return [4 /*yield*/, products[0].category.name];
                                            case 7:
                                                // console.log(products)
                                                _a.innerHTML = _c.sent();
                                                _b = document.getElementById('data-watches');
                                                return [4 /*yield*/, result];
                                            case 8:
                                                _b.innerHTML = _c.sent();
                                                btnAddtoCart();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            };
                            listData_1(total.length, id);
                            //  console.log(total.length,id)
                            // selecter sắp xếp theo giá asc|desc
                            document.querySelector('.sort-select').addEventListener('change', function (e) {
                                e.preventDefault();
                                var dataSort = document.querySelector('.sort-select').value;
                                // console.log(dataSort)
                                listData_1(total.length, id, dataSort);
                            });
                        }
                        btnAddtoCart = function () {
                            document.querySelectorAll('.add-cart').forEach(function (element) {
                                element.addEventListener('click', function (e) {
                                    e.preventDefault();
                                    if (element instanceof HTMLElement) {
                                        var cartId = element.dataset.id;
                                        if (typeof cartId == 'string') {
                                            addToCart(cartId);
                                        }
                                    }
                                });
                            });
                        };
                        addToCart = function (productId) {
                            // console.log(productId)
                            var cartLocalStorage = localStorage.getItem('cart');
                            var screenCart = null;
                            if (cartLocalStorage == null) {
                                screenCart = [];
                            }
                            else {
                                screenCart = JSON.parse(cartLocalStorage);
                            }
                            var cart = {
                                product: productId,
                                amount: 1
                            };
                            var checkCart = screenCart.findIndex(function (element) { return element.product == productId; });
                            // console.log(checkCart)
                            if (checkCart == -1) {
                                cart.amount = 1;
                                screenCart.push(cart);
                            }
                            else {
                                screenCart[checkCart].amount++;
                            }
                            localStorage.setItem('cart', JSON.stringify(screenCart));
                            // count amout cart
                            var countcart = document.getElementById('lblCartCount');
                            var sumItemCart = function () {
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
                            console.log(sumItemCart());
                            countcart.innerHTML = sumItemCart().toString();
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    return WachPage;
}(Component));
export { WachPage };
