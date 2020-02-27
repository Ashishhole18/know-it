import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from '../product.service';
import { Product } from '../products';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product:Product;
  u_uid:string;
  prod_id:number;
  constructor(private route:ActivatedRoute,private src:ProductService,private router:Router) { 
    this.product=new Product(0,0,"","","","","",0,"","","","","",0);
  }
  productid:number;
  ngOnInit() {

    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.productid=id;
    this.src.getProductById(this.productid).subscribe(
      prd=>{
        this.product=prd;
        console.log("response",this.product);
        
        
      }

      )
  }
  addToCart()
  {
    this.u_uid=sessionStorage.getItem('userid');
    this.prod_id=this.product.p_prodid;
    sessionStorage.setItem('productid',""+this.prod_id);
    if(this.u_uid==null)
    {
      this.router.navigate(["/login"]);

    }
    else{
      this.router.navigate(["/confirmcart"]);
    }
    console.log("it Works");
  }

}
