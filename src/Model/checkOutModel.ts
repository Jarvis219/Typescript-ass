export class CheckOut{
    public constructor(private _id: number , private _name: string ,private _phone:number, private _email: string , private _address: string , private _product:object, private _sumMoney:number){
        this._id = _id,
        this._name = _name,
        this._email = _email
        this._address= _address,
        this._product = _product,
        this._phone= _phone,
        this._sumMoney = _sumMoney
    }

    get id(): number {
        return this._id;
    }

    set id(_id: number) {
        this._id = _id;
    }

    get name(): string {
        return  this._name;
    }

    set name(_name: string) {
        this._name = _name;
    }

    get email(): string {
        return this._email;
    }

    set email(_email: string) {
        this._email = _email;
    }

    get phone(): number {
        return this._phone;
    }

    set phone(_phone: number) {
        this._phone = _phone;
    }

    get address(): string {
        return this._address;
    }

    set address(_address: string) {
        this._address = _address;
    }

    get product(): object {
        return this._product;
    }

    set product(_product: object) {
        this._product = _product;
    }



    get sumMoney(): number {
        return this._sumMoney;
    }

    set sumMoney(_sumMoney: number) {
        this._sumMoney = _sumMoney;
    }
}