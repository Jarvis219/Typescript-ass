import {Component} from '../../Component.js';
import { userAPI } from '../../api/userAPI.js';
import {User} from '../../../Model/UserModel.js'
export class Login extends Component {
    public template(): string {
        return `
        
        
        <div class="limiter">
		<div class="container-login100" style="background-image: url('public/images/bg-01.jpg');">
			<div class="wrap-login100">
				<form class="login100-form validate-form" id="login-data">
					<span class="login100-form-logo">
                    <i class="fab fa-apple "></i>
                    					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>
                    <div class="text-yellow-400 text-center font-serif" id="error-message">
                    
                    </div>
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text" name="username" placeholder="Username">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>


					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
        

        `;
        
    }
    public async afterRender(){
        document.querySelector('#login-data')!.addEventListener('submit',async (e)=>{
            e.preventDefault();
            const username = (document.querySelector('[name="username"]') as HTMLInputElement).value;
            const password = (document.querySelector('[name="pass"') as HTMLInputElement).value;
            const user: User= new User(0,'',username, password)
            if(username!='' && password!=''){
                // console.log(2)
                // try{
                // let response =   await userAPI.login(user)
                //    let data = await response.json();
                //    console.log(data);
                // }catch(err){
                //     console.log(err);
                // }
                 userAPI.login(user)
                .then((data)=>data.json())
                .then(data=>{
                    // console.log("data: "+data)
                    if(typeof data=='string'){
                        document.querySelector('#error-message')!.innerHTML =`
                        <span>${data}</span>
                        `;
                    }else{
                        localStorage.setItem('username', JSON.stringify(data));
                        window.location.href= '/';
                    }
                }).catch(err=>console.log(err))
            }
        })

    }

}