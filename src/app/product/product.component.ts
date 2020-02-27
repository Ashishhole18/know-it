import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';
import { Router } from '@angular/router';
import { FileService } from '../file.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  u_id:any;
  product:Product;
  selectedFiles: FileList;
  currentFile: File;
  filestr:any;
  data:string="hello";
  constructor(private src:ProductService,private router:Router,private fileService: FileService) { 
    this.product=new Product(0,0,"","","","","",0,"","","","","",0);
  }

  ngOnInit() {
    this.u_id=sessionStorage.getItem('userid');

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    const fileName = event.target.files[0].name;
    console.log("1st file",fileName);
    this.filestr=fileName;
    console.log("2st file",this.filestr);
    this.product.p_imageurl1="assets\\images\\"+this.filestr;
    console.log("3st file",this.product.p_imageurl1);
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadFile(this.currentFile).subscribe(response => {
		//this.selectedFiles.value="";
     if (response instanceof HttpResponse) {
		// this.msg = response.body;
        console.log(response.body);
      }	  
    });    
  }
  onRegistration()
  {
    console.log("In Function");
    console.log(this.product.p_brands);
    console.log(this.product.p_deposit);
    console.log(this.product.p_model);
    console.log(this.product.p_description);
    console.log(this.product.p_avlfrom);
    console.log(this.product.u_uid);
    console.log(this.u_id);

    this.product.u_uid=this.u_id;
    this.src.addProdut(this.product).subscribe(
      (response:Response )=>{
        console.log("response",response);
        if(response)
        {
          this.router.navigate(["/registration"]);
        }
        
      }

      )

  }

}
