var Product = /** @class */ (function () {
    function Product(_id, _name, _price, _photo, _status, _categoryId) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._photo = _photo;
        this._status = _status;
        this._categoryId = _categoryId;
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._photo = _photo;
        this._status = _status;
        this._categoryId = _categoryId;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "photo", {
        get: function () {
            return this._photo;
        },
        set: function (photo) {
            this._photo = photo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "categoryId", {
        get: function () {
            return this._categoryId;
        },
        set: function (categoryId) {
            this._categoryId = categoryId;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
export { Product };
