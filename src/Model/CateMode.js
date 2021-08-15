var Category = /** @class */ (function () {
    // private readonly _id: number;
    function Category(_id, _cateName) {
        this._id = _id;
        this._cateName = _cateName;
        this._id = _id;
        this._cateName = _cateName;
    }
    Object.defineProperty(Category.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "name", {
        get: function () {
            return this._cateName;
        },
        set: function (_cateName) {
            this._cateName = _cateName;
        },
        enumerable: false,
        configurable: true
    });
    return Category;
}());
export { Category };
