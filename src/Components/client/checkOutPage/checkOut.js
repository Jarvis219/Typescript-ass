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
import { CheckOut } from "../../../Model/checkOutModel.js";
import { OrderAPI } from "../../api/OrderAPI.js";
var CheckOutPage = /** @class */ (function (_super) {
    __extends(CheckOutPage, _super);
    function CheckOutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckOutPage.prototype.template = function () {
        return "\n    <div >\n        " + Header.render() + "\n        <div class=\"container font-serif mb-8\">\n       \n            <main class=\"mx-auto\">\n                <div class=\"py-5 text-center\">\n               \n                <h2>Checkout form</h2>\n                </div>\n\n                <div class=\"row g-5\">\n                <div class=\"col-md-5 col-lg-4 order-md-last\">\n                    <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n                    <span class=\"text-primary\">Your cart</span>\n                    <span class=\"badge bg-primary rounded-pill \" id=\"count\">3</span>\n                    </h4>\n                    <ul class=\"list-group mb-3\" id=\"data-product\">\n                    </ul>\n                    <div class=\"list-group-item d-flex justify-content-between\">\n                        <span>Total (USD)</span>\n                        <strong >$<span id=\"sum-price\"></span></strong>\n                    </div>\n                </div>\n                <div class=\"col-md-7 col-lg-8\">\n                    <h4 class=\"mb-3\">Billing address</h4>\n                    <form class=\"needs-validation\" id=\"btn-checkout\" novalidate>\n                    <div class=\"row g-3 font-serif\">\n                        <div class=\"col-sm-6\">\n                        <label for=\"firstName\" class=\"form-label\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"names\" placeholder=\"name...\" value=\"\" required>\n                        <div class=\"invalid-feedback\">\n                            Valid first name is required.\n                        </div>\n                        </div>\n\n                        <div class=\"col-sm-6 my-1\">\n                        <label for=\"lastName\" class=\"form-label\">Phone</label>\n                        <input type=\"tel\" class=\"form-control\" id=\"phone\" placeholder=\"phone...\" value=\"\" required>\n                        <div class=\"invalid-feedback\">\n                            Valid last name is required.\n                        </div>\n                        </div>\n\n                        <div class=\"col-12 my-1\">\n                        <label for=\"username\" class=\"form-label\">Email</label>\n                        <div class=\"input-group has-validation\">\n                            <span class=\"input-group-text\">@</span>\n                            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" required>\n                        <div class=\"invalid-feedback\">\n                            Your username is required.\n                            </div>\n                        </div>\n                        </div>\n\n                        <div class=\"col-12  my-1\">\n                        <label for=\"address\" class=\"form-label\">Address</label>\n                        <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n                        <div class=\"invalid-feedback\">\n                            Please enter your shipping address.\n                        </div>\n                        </div>\n\n                    </div>\n\n                    <hr class=\"my-4\">\n\n                    <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"same-address\">\n                        <label class=\"form-check-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n                    </div>\n\n                    \n\n                    <hr class=\"my-4\">\n\n                    <button class=\"w-100 btn btn-primary btn-lg\" type=\"submit\">Continue to checkout</button>\n                    </form>\n                </div>\n                </div>\n            </main>\n        </div>\n        " + Footer.render() + "\n  </div>\n        ";
    };
    CheckOutPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            function listproduct() {
                var getCheckout = JSON.parse(localStorage.getItem('checkout'));
                var sumPrices = 0;
                var count = getCheckout.length;
                var datas = getCheckout.map(function (ele) {
                    sumPrices += parseInt(ele.sum);
                    return "\n                <li class=\"list-group-item d-flex justify-content-between lh-sm\">\n                <div>\n                <h6 class=\"my-0 names\">" + ele.product + "</h6>\n                <small class=\"text-muted \">X<span class=\"amounts\">" + ele.amount + "</span></small>\n                </div>\n                <span class=\"text-muted \">$<span class=\"totals\">" + ele.price + "</span></span>\n            </li>\n                ";
                }).join("");
                document.getElementById('data-product').innerHTML = datas;
                document.getElementById('sum-price').innerHTML = sumPrices.toString();
                document.getElementById('count').innerHTML = String(count);
                checkOut();
            }
            function checkOut() {
                var _this = this;
                document.getElementById('btn-checkout').addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var getCheckout, name, phone, email, address, sumMoney, product, order;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                e.preventDefault();
                                getCheckout = JSON.parse(localStorage.getItem('checkout'));
                                name = document.querySelector('#names').value;
                                phone = parseInt(document.querySelector('#phone').value);
                                email = document.querySelector('#email').value;
                                address = document.querySelector('#address').value;
                                sumMoney = parseInt(document.querySelector('#sum-price').innerHTML);
                                product = getCheckout;
                                order = new CheckOut(0, name, phone, email, address, product, sumMoney);
                                // console.log(order)
                                return [4 /*yield*/, OrderAPI.create(order)
                                        .then(function () {
                                        alert('Check out successfully!');
                                        localStorage.removeItem('checkout');
                                        localStorage.removeItem('cart');
                                        window.location.href = '/';
                                    }).catch(function (error) { console.log(error); })];
                            case 1:
                                // console.log(order)
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Header.afterRender()];
                    case 1:
                        _a.sent();
                        listproduct();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CheckOutPage;
}(Component));
export { CheckOutPage };
