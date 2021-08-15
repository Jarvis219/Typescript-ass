import { Component } from "../../Component.js";
import { userAPI } from "../../api/userAPI.js";

export class UserDelete extends Component {
    public constructor(private _id:string|undefined){
        super();
        this._id=_id;
    }
    public template(): string {
        return`
        
        `;
    }
    public afterRender(){
        // console.log(this._id)
        const id:string = this._id;;
        async  function deleted(id:string){
                await userAPI.delete(id).then(()=>{
                    window.location.hash = '#/users/index';
                }).catch(err=>{
                    console.log(err)
                })
                }
                if( typeof id == "string"){
                    deleted(id)
                }
                
    }
}