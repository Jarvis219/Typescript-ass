var ProductAPI = /** @class */ (function () {
    function ProductAPI() {
    }
    ProductAPI.all = function () {
        var url = 'http://localhost:3001/products?_expand=category';
        return fetch(url, { method: "GET" });
    };
    ProductAPI.find = function (id) {
        var url = "http://localhost:3001/products/" + id + "?_expand=category";
        return fetch(url, { method: "GET" });
    };
    ProductAPI.update = function (id, data) {
        var url = "http://localhost:3001/products/" + id;
        var products = {
            name: data.name,
            price: data.price,
            photo: data.photo,
            status: data.status,
            categoryId: data.categoryId
        };
        return fetch(url, { method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(products)
        });
    };
    ProductAPI.create = function (data) {
        var url = "http://localhost:3001/products";
        var products = {
            name: data.name,
            price: data.price,
            photo: data.photo,
            status: data.status,
            categoryId: data.categoryId
        };
        return fetch(url, { method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(products)
        });
    };
    ProductAPI.delete = function (id) {
        var url = "http://localhost:3001/products/" + id;
        return fetch(url, { method: "DELETE" });
    };
    // load các sản phẩm cùng danh mục
    ProductAPI.findById = function (id, sort) {
        if (sort === void 0) { sort = 'asc'; }
        var url = "http://localhost:3001/products?categoryId=" + id + "&_expand=category&_sort=price&_order=" + sort;
        return fetch(url, { method: "GET" });
    };
    // tìm kiếm và sắp xếp
    ProductAPI.searchProduct = function (data, sort) {
        if (sort === void 0) { sort = 'asc'; }
        var url = "http://localhost:3001/products?q=" + data + "&_expand=category&_sort=price&_order=" + sort;
        return fetch(url, { method: "GET" });
    };
    // phân trang
    ProductAPI.pageList = function (num) {
        if (num === void 0) { num = 1; }
        var url = "http://localhost:3001/products?_expand=category&_page=" + num + "&_limit=4&_sort=id&_order=desc";
        return fetch(url, { method: "GET" });
    };
    return ProductAPI;
}());
export { ProductAPI };
