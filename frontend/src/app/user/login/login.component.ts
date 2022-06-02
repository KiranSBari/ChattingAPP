import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncrDecrService } from 'src/app/encr-decr.service';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Customer={
    username:'',
    password:''
  }
  constructor(private api:UserService,private router:Router,private EncrDecr:EncrDecrService) { }

  ngOnInit(): void {
  }

  logindata: any = [];
  getCustomerLogin(): void {

    if (!this.Customer.username){
    Swal.fire(`PROVIDE VALID USERNAME `);
    }
    else if(!this.Customer.password){
      Swal.fire(`PROVIDE VALID PASSWORD`);
      }
      else if (this.Customer.username =='admin@gmail.com' && this.Customer.password == 'nopass'){
        Swal.fire({
          title: "Admin LOGIN",
          text: " WELCOME ADMIN",
          icon: "success"
        })
        //this.Customer = JSON.parse(localStorage.getItem('localCart'));

      }
     else {
      this.api.customerlogin(this.Customer).subscribe(
        (user) => {
          // const logindata=console.log(this.Customer.customerEmail)
          // this.logindata = JSON.parse(localStorage.getItem('localCart'));
           console.log(this.logindata);

           console.log(user + " value in user.affectedRows");
          if (user== 1) {
            Swal.fire({
              title: "Customer LOGIN",
              text: " Welcome "+ this.Customer.username,
              icon: "success",
              
            })
              //localStorage.setItem("key","value");
              let username=this.Customer.username;
              let pass=this.Customer.password;
              var encrypted = this.EncrDecr.set('123456$#@$shweta', this.Customer.username);
              this.logindata=localStorage.setItem("UserData",JSON.stringify(encrypted));
              
              this.router.navigate(['chat']);
            
          }
            else {
            Swal.fire({
              title: "Customer LOGIN",
              text: "INVALID USER CREDENTIAL",
              icon: "warning",
            })
          }
        }
      );
    }
  }

}
