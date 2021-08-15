import {Component} from '../../Component.js';
import { userAPI } from '../../api/userAPI.js';
import {User} from '../../../Model/UserModel.js'

export class Registration extends Component {
    public template(): string {
        return `
        
        <div class="limiter">
		<div class="container-login100" style="background-image: url('public/images/bg-01.jpg');">
			<div class="wrap-login100">
				<form class="login100-form validate-form" id="sign-data">
					<span class="login100-form-logo">
                    <i class="fab fa-apple "></i>
                    					</span>

					<span class="login100-form-title p-b-34 p-t-27">
                    Registration
					</span>
                    <div class="text-yellow-400 text-center font-serif" id="error-message">
                    
                    </div>
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text"  name="username" placeholder="Username">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
                    <div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="email" name="email" placeholder="Email">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
                    <div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="confirm-pass" placeholder="Confirm Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Sign up
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
        

        `
    }

    public afterRender(){
        
        signup();

        function signup(){
            document.querySelector('#sign-data')!.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const name:string = (document.querySelector('[name="username"]') as HTMLInputElement).value;
                const email:string = (document.querySelector('[name="email"]') as HTMLInputElement).value;
                const pass:string = (document.querySelector('[name="pass"]') as HTMLInputElement).value; 
                const pass_confirm:string = (document.querySelector('[name="confirm-pass"]') as HTMLInputElement).value;
                 
                if(pass===pass_confirm){
                    let user:User = new User(0,name,email, pass)
                   try {
                   await userAPI.creat(user)
                   window.location.href= '#/login'
                   } catch (error) {
                    document.querySelector('#error-message')!.innerHTML =`
                    <span>${error}</span>
                    `
                   }
                }
        
        })
        }

    }
}