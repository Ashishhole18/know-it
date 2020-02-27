import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LogincheckService {

  constructor(private http:HttpClient) { }


  public userValidation(u_emailid,u_password):Observable<any>
  {
     return this.http.get<any>("http://localhost:8080/user/logincheck?u_emailid="+u_emailid+"&u_password="+u_password).pipe(tap(flower=>console.log("fetch Data"+flower)));

  }
  public userRegistration(user):Observable<any>
  {
    return this.http.post("http://localhost:8080/user/insertuser",user,{responseType:'text' as 'json'});


  }
  public display():Observable<any>
  {
    return this.http.get<any>("http://localhost:8080/product/getallproduct").pipe(tap(flower=>console.log("fetch Data"+flower)));
  }
  
}
