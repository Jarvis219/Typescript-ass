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
import { ContactAPI } from '../../api/ContactAPI.js';
import { Header } from '../header/header.js';
import { Footer } from '../footer/footer.js';
import { Contact } from '../../../Model/Contact.js';
var ContactPage = /** @class */ (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactPage.prototype.template = function () {
        return "\n        <div>\n        " + Header.render() + "\n\n        <!-- contact section -->\n\n  <section class=\"contact_section layout_padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n      <div id=\"toast\" class=\"mb-3\">\n       \n      </div>\n        <div class=\"form_container\">\n       \n          <div class=\"heading_container\">\n            <h2>\n              Contact Us\n            </h2>\n          </div>\n          <form id=\"data-send\">\n            <div>\n              <input type=\"text\" id=\"name\" placeholder=\"Full Name \" />\n            </div>\n            <div>\n              <input type=\"email\" id=\"email\" placeholder=\"Email\" />\n            </div>\n            <div>\n              <input type=\"tel\" id=\"phone\" placeholder=\"Phone number\" />\n            </div>\n            <div>\n              <input type=\"text\" id=\"send\" class=\"message-box\" placeholder=\"Message\" />\n            </div>\n            <div class=\"d-flex \">\n              <button type=\"submit\" id=\"btn-send\" >\n                SEND\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"img-box\">\n          <img src=\"public/images/contact-img.jpg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- end contact section -->\n        " + Footer.render() + "\n        </div>\n        ";
    };
    ContactPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Header.afterRender()];
                    case 1:
                        _a.sent();
                        document.querySelector('#data-send').addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var name, email, phone, message, send;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        name = document.querySelector('#name').value;
                                        email = document.querySelector('#email').value;
                                        phone = parseInt(document.querySelector('#phone').value);
                                        message = document.querySelector('#send').value;
                                        send = new Contact(0, name, email, phone, message);
                                        // console.log(send)
                                        return [4 /*yield*/, ContactAPI.creat(send)
                                                .then(function () {
                                                document.querySelector('#toast').innerHTML = " <div class=\"mx-auto bg-green-300 py-2 text-white text-center font-serif rounded-lg\" >\n                Send contact message successfully\n              </div>";
                                            }).catch(function (err) {
                                                document.querySelector('#toast').innerHTML = " <div class=\"mx-auto bg-red-300 py-2 text-white text-center font-serif rounded-lg\" >\n                Send contact message failure!\n              </div>";
                                            })];
                                    case 1:
                                        // console.log(send)
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ContactPage;
}(Component));
export { ContactPage };
