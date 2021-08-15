export class Product {
    public constructor(private readonly _id:number, private _name:string, private _price:number, private _photo:string,private _status:number, private _categoryId:number) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._photo = _photo;
        this._status=_status;
        this._categoryId = _categoryId;
    }
    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get price(): number  {
        return this._price;
    }
    set price(price: number) {
        this._price = price;
    }
    get photo(): string {
        return this._photo;
    }
    set photo(photo: string) {
        this._photo = photo;
    }
    get status(): number {
        return this._status;
    }
    set status(status: number) {
        this._status = status;
    }
    get categoryId(): number {
        return this._categoryId;
    }
    set categoryId(categoryId: number) {
        this._categoryId = categoryId;
    }
}