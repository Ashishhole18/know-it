import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public addProdut(user):Observable<any>
  {
    return this.http.post("http://localhost:8080/product/newproduct",user,{responseType:'text' as 'json'});


  }
  public getProductById(id):Observable<any>
  {
    return this.http.get("http://localhost:8080/product/getproductbyid?id="+id).pipe(
      tap(Product=>{
        console.log(Product)
      }
      )
    );
  }
  getProduct():Observable<any>
  {
    return this.http.get("http://localhost:8080/product/getallproduct").pipe(
      tap(Product=>{
        console.log(Product)
      }
      )
    );
  }
  getProductByBrand(name):Observable<any>
  {
    return this.http.get("http://localhost:8080/product/getbybrand?searchpattern="+name).pipe(
      tap(Product=>{
        console.log(Product)
      }
      )
    );
  }
  
}
