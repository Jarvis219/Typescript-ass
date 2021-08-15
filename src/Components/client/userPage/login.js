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
import { userAPI } from '../../api/userAPI.js';
import { User } from '../../../Model/UserModel.js';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.template = function () {
        return "\n        \n        \n        <div class=\"limiter\">\n\t\t<div class=\"container-login100\" style=\"background-image: url('public/images/bg-01.jpg');\">\n\t\t\t<div class=\"wrap-login100\">\n\t\t\t\t<form class=\"login100-form validate-form\" id=\"login-data\">\n\t\t\t\t\t<span class=\"login100-form-logo\">\n                    <i class=\"fab fa-apple \"></i>\n                    \t\t\t\t\t</span>\n\n\t\t\t\t\t<span class=\"login100-form-title p-b-34 p-t-27\">\n\t\t\t\t\t\tLog in\n\t\t\t\t\t</span>\n                    <div class=\"text-yellow-400 text-center font-serif\" id=\"error-message\">\n                    \n                    </div>\n\t\t\t\t\t<div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Password\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"text-center p-t-90\">\n\t\t\t\t\t\t<a class=\"txt1\" href=\"#\">\n\t\t\t\t\t\t\tForgot Password?\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n        \n\n        ";
    };
    Login.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                document.querySelector('#login-data').addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var username, password, user;
                    return __generator(this, function (_a) {
                        e.preventDefault();
                        username = document.querySelector('[name="username"]').value;
                        password = document.querySelector('[name="pass"').value;
                        user = new User(0, '', username, password);
                        if (username != '' && password != '') {
                            // console.log(2)
                            // try{
                            // let response =   await userAPI.login(user)
                            //    let data = await response.json();
                            //    console.log(data);
                            // }catch(err){
                            //     console.log(err);
                            // }
                            userAPI.login(user)
                                .then(function (data) { return data.json(); })
                                .then(function (data) {
                                // console.log("data: "+data)
                                if (typeof data == 'string') {
                                    document.querySelector('#error-message').innerHTML = "\n                        <span>" + data + "</span>\n                        ";
                                }
                                else {
                                    localStorage.setItem('username', JSON.stringify(data));
                                    window.location.href = '/';
                                }
                            }).catch(function (err) { return console.log(err); });
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return Login;
}(Component));
export { Login };
