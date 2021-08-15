var CategoryAPI = /** @class */ (function () {
    function CategoryAPI() {
    }
    CategoryAPI.all = function () {
        var url = 'http://localhost:3001/categories';
        return fetch(url, { method: "GET" });
    };
    CategoryAPI.find = function (id) {
        var url = "http://localhost:3001/categories/" + id;
        return fetch(url, { method: "GET" });
    };
    CategoryAPI.create = function (data) {
        var url = 'http://localhost:3001/categories';
        var categories = {
            name: data.name
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(categories)
        });
    };
    CategoryAPI.update = function (id, data) {
        var url = "http://localhost:3001/categories/" + id;
        var categories = {
            name: data.name
        };
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(categories)
        });
    };
    CategoryAPI.delete = function (id) {
        var url = "http://localhost:3001/categories/" + id;
        return fetch(url, { method: "DELETE" });
    };
    CategoryAPI.categoryIsne = function (id) {
        var url = "http://localhost:3001/categories?id_ne=" + id;
        return fetch(url, { method: "GET" });
    };
    return CategoryAPI;
}());
export { CategoryAPI };
