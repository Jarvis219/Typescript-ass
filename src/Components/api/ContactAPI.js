var ContactAPI = /** @class */ (function () {
    function ContactAPI() {
    }
    ContactAPI.all = function () {
        var url = "http://localhost:3001/contacts";
        return fetch(url, { method: "GET" });
    };
    ContactAPI.find = function (id) {
        var url = "http://localhost:3001/contacts/" + id;
        return fetch(url, { method: "GET" });
    };
    ContactAPI.creat = function (data) {
        var url = "http://localhost:3001/contacts";
        var contact = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            status: data.status,
        };
        return fetch(url, { method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(contact)
        });
    };
    ContactAPI.delete = function (id) {
        var url = "http://localhost:3001/contacts/" + id;
        return fetch(url, { method: "DELETE" });
    };
    ContactAPI.update = function (id, data) {
        var url = "http://localhost:3001/contacts/" + id;
        var contact = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            status: data.status
        };
        return fetch(url, { method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(contact)
        });
    };
    return ContactAPI;
}());
export { ContactAPI };
