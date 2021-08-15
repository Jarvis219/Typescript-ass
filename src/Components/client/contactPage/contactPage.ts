import {Component} from '../../Component.js';
import { ContactAPI } from '../../api/ContactAPI.js';
import { Header } from '../header/header.js';
import { Footer } from '../footer/footer.js';
import { Contact } from '../../../Model/Contact.js';
export class ContactPage extends Component {
    public template(): string {
        return `
        <div>
        ${Header.render()}

        <!-- contact section -->

  <section class="contact_section layout_padding">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
      <div id="toast" class="mb-3">
       
      </div>
        <div class="form_container">
       
          <div class="heading_container">
            <h2>
              Contact Us
            </h2>
          </div>
          <form id="data-send">
            <div>
              <input type="text" id="name" placeholder="Full Name " />
            </div>
            <div>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <input type="tel" id="phone" placeholder="Phone number" />
            </div>
            <div>
              <input type="text" id="send" class="message-box" placeholder="Message" />
            </div>
            <div class="d-flex ">
              <button type="submit" id="btn-send" >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-box">
          <img src="public/images/contact-img.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- end contact section -->
        ${Footer.render()}
        </div>
        `;
    }


    public async afterRender() {
        await Header.afterRender();
        document.querySelector('#data-send')!.addEventListener('submit',  async (e)=>{
            e.preventDefault();
            // console.log(1)
            const name:string = (document.querySelector('#name') as HTMLInputElement).value;
            const email:string = (document.querySelector('#email') as HTMLInputElement).value;
            const phone:number = parseInt((document.querySelector('#phone') as HTMLInputElement).value);
            const message:string = (document.querySelector('#send') as HTMLInputElement).value;
            let send:Contact = new Contact(0, name,email,phone,message);
            // console.log(send)
            await ContactAPI.creat(send)
            .then(()=>{
                document.querySelector('#toast')!.innerHTML= ` <div class="mx-auto bg-green-300 py-2 text-white text-center font-serif rounded-lg" >
                Send contact message successfully
              </div>`;
            }).catch(err=>{
              document.querySelector('#toast')!.innerHTML= ` <div class="mx-auto bg-red-300 py-2 text-white text-center font-serif rounded-lg" >
                Send contact message failure!
              </div>`;
            })


        });
    }
}