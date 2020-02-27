import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products';
@Component({
  selector: 'app-showsearch',
  templateUrl: './showsearch.component.html',
  styleUrls: ['./showsearch.component.css']
})
export class ShowsearchComponent implements OnInit {

  product:Product;
  constructor(private route:ActivatedRoute,private srv:ProductService) {

    this.product=new Product(0,0,"","","","","",0,"","","","","",0);
   }
  getSerach:string;
  ngOnInit() {
    
    let id=this.route.snapshot.paramMap.get('search');
    this.getSerach=id;
    console.log(this.getSerach);
    this.srv.getProductByBrand(this.getSerach).subscribe(
      prd=>{
        this.product=prd;
        console.log("response",this.product);
      }
      )


    
  }

}
