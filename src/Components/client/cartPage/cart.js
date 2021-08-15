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
var CartPage = /** @class */ (function (_super) {
    __extends(CartPage, _super);
    function CartPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartPage.prototype.template = function () {
        return "\n        <div>\n        " + Header.render() + "\n\n        <div class=\"container my-20\">\n                    <div class=\"row flex justify-center items-center\"> \n                        <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Product</th>\n                                        <th>Quantity</th>\n                                        <th class=\"text-center\">Price</th>\n                                        <th class=\"text-center\">Total</th>\n                                        <th>\u00A0</th>\n                                    </tr>\n                                </thead>\n                                <tbody id=\"data-cart\">\n                                    \n                                </tbody>\n                                <tfoot>\n                                    <tr>\n                                        <td> \u00A0 </td>\n                                        <td> \u00A0 </td>\n                                        <td> \u00A0 </td>\n                                        <td><h3>Total</h3></td>\n                                        <td class=\"text-right\"><h3 id=\"monney-sum\">$31.53</h3></td>\n                                    </tr>\n                                    <tr>\n                                        <td> \u00A0 </td>\n                                        <td> \u00A0 </td>\n                                        <td> \u00A0 </td>\n                                        <td>  <a href=\"/\" >\n                                        <button type=\"button\" class=\"btn btn-default\">\n                                            <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continue Shopping\n                                        </button></a></td>\n                                        <td>\n                                        <a href=\"#/checkout\" >\n                                        <button type=\"button\" class=\"btn btn-success\">\n                                            Checkout <span class=\"glyphicon glyphicon-play\"></span>\n                                        </button></a></td>\n                                    </tr>\n                                </tfoot>\n                            </table>\n                        </div>\n                    </div>\n            </div>\n            " + Footer.render() + "\n        </div> \n        ";
    };
    CartPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            function listDataCart() {
                return __awaiter(this, void 0, void 0, function () {
                    var cart, totals, setCheckOut, count;
                    return __generator(this, function (_a) {
                        cart = JSON.parse(localStorage.getItem('cart'));
                        totals = [];
                        setCheckOut = [];
                        count = 0;
                        // console.log(data.length)
                        cart.forEach(function (element) {
                            new Promise(function (resolve, reject) {
                                console.log(typeof element.product);
                                resolve(ProductAPI.find(element.product));
                            })
                                .then(function (data) { return data.json(); })
                                .then(function (data) {
                                var monney = data.price * parseInt(element.amount);
                                setCheckOut.push({
                                    product: data.name,
                                    amount: element.amount,
                                    price: data.price,
                                    sum: monney,
                                });
                                return "\n                    <tr>\n                        <td class=\"col-sm-8 col-md-6\">\n                        <div class=\"media\">\n                            <a class=\"thumbnail pull-left\" href=\"#\"> <img class=\"media-object\" src=\"" + data.photo + "\" style=\"width: 72px; height: 72px;\"> </a>\n                            <div class=\"media-body ml-2\">\n                                <h4 class=\"media-heading\"><a href=\"#\">" + data.name + "</a></h4>\n                                <h5 class=\"media-heading\"> by <a href=\"#\">" + data.category.name + "</a></h5>\n                            </div>\n                        </div></td>\n                        <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                        <input type=\"email\" class=\"form-control text-center\" id=\"exampleInputEmail1\" value=\"" + element.amount + "\" disabled=\"disabled\">\n                        </td>\n                        <td class=\"col-sm-1 col-md-1 text-center \"><strong>$" + data.price + "</strong></td>\n                        <td class=\"col-sm-1 col-md-1 text-center \"><strong>$<span class=\"data-monney\">" + monney + "</span</strong></td>\n                        <td class=\"col-sm-1 col-md-1\">\n                        \n                        </tr>\n                    ";
                            }).then(function (data) {
                                // console.log(data.toString())
                                totals.push(data);
                                count = count + 1;
                                // console.log(cart.length)
                                if (count == cart.length) {
                                    // console.log(count)
                                    localStorage.setItem('checkout', JSON.stringify(setCheckOut));
                                    document.querySelector('#data-cart').innerHTML = totals.join("");
                                    sumMonney();
                                }
                            });
                            // let cart =  ProductAPI.find(element.product);
                            // let dataCart =  cart.json();
                            // let monney:number =  dataCart.price * parseInt(element.amount);
                            // return `
                            //     <tr>
                            //     <td class="col-sm-8 col-md-6">
                            //     <div class="media">
                            //         <a class="thumbnail pull-left" href="#"> <img class="media-object" src="${dataCart.photo}" style="width: 72px; height: 72px;"> </a>
                            //         <div class="media-body">
                            //             <h4 class="media-heading"><a href="#">Product name</a></h4>
                            //             <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                            //             <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                            //         </div>
                            //     </div></td>
                            //     <td class="col-sm-1 col-md-1" style="text-align: center">
                            //     <input type="email" class="form-control text-center" id="exampleInputEmail1" value="3" disabled="disabled">
                            //     </td>
                            //     <td class="col-sm-1 col-md-1 text-center"><strong>$${dataCart.price}</strong></td>
                            //     <td class="col-sm-1 col-md-1 text-center"><strong>$${monney}</strong></td>
                            //     <td class="col-sm-1 col-md-1">
                            //     <button type="button" class="btn btn-danger">
                            //         <span class="glyphicon glyphicon-remove"></span> Remove
                            //     </button></td>
                            //     </tr>
                            // `;
                        });
                        return [2 /*return*/];
                    });
                });
            }
            function sumMonney() {
                var totalM = document.querySelectorAll('.data-monney');
                //   console.log(totalM)
                var sumPrice = 0;
                totalM.forEach(function (ele) {
                    //   console.log(parseInt(ele.innerHTML))
                    sumPrice += parseInt(ele.innerHTML);
                });
                //   console.log(sumPrice);
                document.querySelector('#monney-sum').innerHTML = '$' + sumPrice.toString();
            }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Header.afterRender()];
                    case 1:
                        _a.sent();
                        listDataCart();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CartPage;
}(Component));
export { CartPage };
