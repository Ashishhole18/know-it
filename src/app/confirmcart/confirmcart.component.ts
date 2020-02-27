import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';
import { Cart } from '../cart';
import { KartService } from '../kart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmcart',
  templateUrl: './confirmcart.component.html',
  styleUrls: ['./confirmcart.component.css']
})
export class ConfirmcartComponent implements OnInit {
  productid: string;
  prod:Product;
  cart:Cart;
  data:any;
  userid:string="";
  constructor(private srv:ProductService,private cartser:KartService,private router:Router) {

    this.prod=new Product(0,0,"","","","","",0,"","","","","",0);
    this.cart=new Cart(0,0,"","","",0,"","",0,"");
   }

  ngOnInit() {
    this.productid=sessionStorage.getItem('productid');
      this.srv.getProductById(parseInt(this.productid)).subscribe(
        prd=>{
          this.prod= prd;
        }
      );
  }

  addToCart()
  {
    this.userid=sessionStorage.getItem('userid');
    this.cart.brand=this.prod.p_brands;
    console.log(this.cart.user_uid);
    this.cart.user_uid=parseInt(this.userid);
    this.cart.modelno=this.prod.p_model;
    this.cart.description=this.prod.p_description;
    this.cart.dayto=this.prod.p_avlto;
    this.cart.dayfrom=this.prod.p_avlfrom;
    this.cart.p_imageurl1=this.prod.p_imageurl1;
    this.cart.cost=this.prod.perdayprice;
    this.cart.prod_id=this.prod.p_prodid;
    this.cartser.addCart(this.cart).subscribe(
      (response:Response )=>{
          this.data=response;
        console.log(response);
        
          sessionStorage.removeItem('productid');
          console.log(sessionStorage.getItem('productid'));
          this.router.navigate["/addedtocart"];
      }
    );
    console.log("Confirm cart works");
  }
}
