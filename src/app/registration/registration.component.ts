import { Component, OnInit } from '@angular/core';
import { UserReg } from '../userregi';
import { LogincheckService } from '../logincheck.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private srv:LogincheckService,private router:Router) { }

  fname:String="";
  lname:String="";
  email:String="";
  password:String="";
  repassword:String="";
  aadhaar:String="";
  msg:String="";
  emailid:string;
  user:UserReg=new UserReg("","","","","");
  ngOnInit() {
  }
  
  registration()
  {
    
    console.log(this.user.u_firstname);
    console.log(this.user.u_lastname);
    console.log(this.user.u_emailid);
    console.log(this.user.u_password);
    console.log(this.repassword);
    console.log(this.user.u_aadhaarno);
    console.log("hello");

    if(this.user.u_password==this.repassword)
    {

      this.srv.userRegistration(this.user).subscribe(
        (response:Response )=>{
          console.log("response",response);
          if(response)
          {
            this.router.navigate(["/home"]);
          }
          
        }

        );
        
        
    }
    else{
      this.msg="password not same";
    }
    
    
    
  }

}
