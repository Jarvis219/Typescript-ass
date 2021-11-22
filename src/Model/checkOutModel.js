var CheckOut = /** @class */ (function () {
    function CheckOut(_id, _name, _phone, _email, _address, _product, _sumMoney, _status) {
        if (_status === void 0) { _status = 'not approved yet'; }
        this._id = _id;
        this._name = _name;
        this._phone = _phone;
        this._email = _email;
        this._address = _address;
        this._product = _product;
        this._sumMoney = _sumMoney;
        this._status = _status;
        this._id = _id,
            this._name = _name,
            this._email = _email;
        this._address = _address,
            this._product = _product,
            this._phone = _phone,
            this._sumMoney = _sumMoney,
            this._status = _status;
    }
    Object.defineProperty(CheckOut.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (_email) {
            this._email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (_phone) {
            this._phone = _phone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (_address) {
            this._address = _address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (_product) {
            this._product = _product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "sumMoney", {
        get: function () {
            return this._sumMoney;
        },
        set: function (_sumMoney) {
            this._sumMoney = _sumMoney;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckOut.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (_status) {
            this._status = _status;
        },
        enumerable: false,
        configurable: true
    });
    return CheckOut;
}());
export { CheckOut };
