var OrderAPI = /** @class */ (function () {
    function OrderAPI() {
    }
    OrderAPI.all = function () {
        var url = 'http://localhost:3001/orders';
        return fetch(url, { method: "GET" });
    };
    OrderAPI.create = function (data) {
        var dataNew = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            product: data.product,
            sumMoney: data.sumMoney
        };
        var url = 'http://localhost:3001/orders';
        return fetch(url, { method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dataNew)
        });
    };
    OrderAPI.update = function (id, data) {
        var dataNew = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            product: data.product,
            sumMoney: data.sumMoney
        };
        var url = 'http://localhost:3001/orders';
        return fetch(url, { method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dataNew)
        });
    };
    OrderAPI.find = function (id) {
        var url = "http://localhost:3001/orders/" + id;
        return fetch(url, { method: "GET" });
    };
    OrderAPI.deleted = function (id) {
        var url = "http://localhost:3001/orders/" + id;
        return fetch(url, { method: "DELETE" });
    };
    return OrderAPI;
}());
export { OrderAPI };
