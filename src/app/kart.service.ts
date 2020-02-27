import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class KartService {

  constructor(private http:HttpClient) { }


  getProduct(prodid):Observable<any>
  {
    return this.http.get("http://localhost:8080/cart/getallprod?user_uid="+prodid).pipe(
      tap(Product=>{
        console.log(Product)
      }
      )
    );
  }




  public addCart(cart):Observable<any>
  {
    return this.http.post("http://localhost:8080/cart/addkart",cart,{responseType:'text' as 'json'});


  }
}
