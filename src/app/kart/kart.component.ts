import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products';
import { KartService } from '../kart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {


  u_uid:string;
  userid:Number;
  msg:string="";
  productid:string="";
  prod:Product;
  
  carts:Cart;
  constructor(private router:Router,private srv:ProductService,private cartsrv:KartService) {

    this.prod=new Product(0,0,"","","","","",0,"","","","","",0);
    this.carts=new Cart(0,0,"","","",0,"","",0,"");
   }

 
  ngOnInit() {
    this.u_uid=sessionStorage.getItem('userid');
    this.userid=parseInt(this.u_uid);
    if(this.u_uid==null)
    {
      this.msg="No Item in Kart";
      console.log(this.msg);

    }
    else{
      console.log("Hello");      
      this.cartsrv.getProduct(this.userid).subscribe(
        prdo=>{
          this.carts= prdo;
          console.log(this.carts);
        }
      )
  }
}
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(["/allproduct"]);

  }

}
