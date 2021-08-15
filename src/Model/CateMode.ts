export class Category {
    // private readonly _id: number;
  public constructor(private readonly _id :number, private _cateName:string){
      this._id=_id;
      this._cateName = _cateName;
  }
  get id(): number {
    return this._id;
}

    get name(): string {
        return this._cateName;
    }
    set name(_cateName: string) {
        this._cateName = _cateName;
    }
}

