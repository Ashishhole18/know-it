import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'camerarental';
  search:string="";
  u_uid:string;
  constructor(private route:Router) {


   }
  ngOnInit() {
  }
  getSearch()
  {
    console.log(this.search);
    if(this.search)
    {
      this.route.navigate(['/showsearch',this.search]);
    }
  }

  getKart()
  {
    this.u_uid=sessionStorage.getItem('userid');
    if(this.u_uid==null)
    {
      this.route.navigate(["/login"]);

    }
    else{
      this.route.navigate(["/kart"]);
    }
   
  }

}
