import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  product:Product;
  constructor(private srv:ProductService,public myapp: AppComponent) {
this.product=new Product(0,0,"","","","","",0,"","","","","",0);

   }
  ngOnInit() {
    this.srv.getProduct().subscribe(
      prod=>{
        this.product= prod;
      }
    );
  }
  




}
