var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserCreat } from "./Components/User/UserCreat.js";
import { UserEdit } from "./Components/User/UserEdit.js";
import { UserIndex } from "./Components/User/UserIndex.js";
import { CateCreat } from "./Components/Category/CateCreat.js";
import { CateIndex } from "./Components/Category/CateIndex.js";
import { CateEdit } from "./Components/Category/CateEdit.js";
import { ProductCreat } from "./Components/Product/ProductCreat.js";
import { UserDelete } from "./Components/User/UserRemove.js";
// let gui: Component = new UserIndex();
// gui.render();
// let creat: Component = new UserCreat();
// creat.render();
// let edit: Component = new editUser();
// edit.render();
const routes = () => {
    window.router
        .on('/users/index', () => __awaiter(void 0, void 0, void 0, function* () {
        const gui = new UserIndex();
        yield gui.render();
        gui.afterRender();
    }))
        .on('/category/index', () => __awaiter(void 0, void 0, void 0, function* () {
        const gui = new CateIndex();
        yield gui.render();
        gui.afterRender();
    }))
        .on('/users/creat', () => {
        const gui = new UserCreat();
        gui.render();
    })
        .on('/category/creat', () => {
        const gui = new CateCreat();
        gui.render();
    })
        .on('/product/creat', () => {
        const gui = new ProductCreat();
        gui.render();
    })
        .on('/users/edit/:id', (params) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        //    console.log(params)
        const id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
        // console.log(id);
        const gui = new UserEdit(id);
        yield gui.render();
    }))
        .on('/category/edit/:id', (params) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        //    console.log(params)
        const id = (_b = params === null || params === void 0 ? void 0 : params.data) === null || _b === void 0 ? void 0 : _b.id;
        // console.log(id);
        const gui = new CateEdit(id);
        yield gui.render();
    }))
        .on('/users/delete/:id', (params) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        const id = (_c = params === null || params === void 0 ? void 0 : params.data) === null || _c === void 0 ? void 0 : _c.id;
        const gui = new UserDelete(id);
        yield gui.render();
    }))
        .resolve();
};
routes();
