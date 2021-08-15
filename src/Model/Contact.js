var Contact = /** @class */ (function () {
    function Contact(_id, _name, _email, _phone, _message, _status) {
        if (_status === void 0) { _status = 0; }
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._phone = _phone;
        this._message = _message;
        this._status = _status;
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._phone = _phone;
        this._message = _message;
        this._status = _status;
    }
    Object.defineProperty(Contact.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (_email) {
            this._email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (_phone) {
            this._phone = _phone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (_message) {
            this._message = _message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (_status) {
            this._status = _status;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
export { Contact };
