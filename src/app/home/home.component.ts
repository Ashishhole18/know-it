import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';
import { Product } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:Product;
  constructor(private srv:LogincheckService) {

    //this.product=new Product("","","","","","","","","","");

   }
   data:any;
  emailid:string;
  ngOnInit() {
    this.srv.display().subscribe(
      prod=>{
        this.product= prod;
      }
    
    );
    this.data=sessionStorage.getItem('userid');
    console.log(this.product);
    function getdata()
    {
      this.name="hello";

    }
    

  }

}
