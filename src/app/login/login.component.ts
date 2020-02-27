import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private srv:LogincheckService,private router:Router) { }
  u_password:string="";
  u_emailid:string="";
  prodid:string="";
  data:any;
  msg:String
  user:User=new User(0,0,"","",0,"","");
  ngOnInit() {
  }
checkValidation()
{
  console.log("hello");
  console.log(this.u_password);
  console.log(this.u_emailid);
  this.srv.userValidation(this.u_emailid,this.u_password).subscribe(
    (response:Response )=>{
        this.data=response;
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('email',this.u_emailid);
        sessionStorage.setItem('userid',this.data);
        this.prodid=sessionStorage.getItem('productid');
        if(this.prodid!=null)
        {
          console.log(this.data);
        this.router.navigate(["/confirmcart"]);
        }
        else
        {
          this.router.navigate(["/"]);
        }
      }
      else
      this.msg="Invalid usename or password";
    }
  );
  function getdata()
  {
    this.name="hello";

  }
  
}
}


