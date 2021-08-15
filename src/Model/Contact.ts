export class Contact {
    public constructor(private _id:number, private _name:string, private _email:string, private _phone:number, private _message:string, private _status:number=0){
        this._id = _id;
        this._name= _name;
        this._email= _email;
        this._phone= _phone;
        this._message= _message;
        this._status= _status;
        
    }

    public get id():number{
        return this._id;
    }
    public set id(_id:number){
        this._id= _id;
    }

    public get name():string{
        return this._name;
    }
    public set name(_name:string){
        this._name= _name;
    }

    public get email():string{
        return this._email;
    }
    public set email(_email:string){
        this._email= _email;
    }

    public get phone():number{
        return this._phone;
    }
    public set phone(_phone:number){
        this._phone= _phone;
    }

    public get message():string{
        return this._message;
    }
    public set message(_message:string){
        this._message= _message;
    }

    public get status():number{
        return this._status;
    }
    public set status(_status:number){
        this._status= _status;
    }

}