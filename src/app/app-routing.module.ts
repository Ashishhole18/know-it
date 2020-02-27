import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { KartComponent } from './kart/kart.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowsearchComponent } from './showsearch/showsearch.component';
import { ConfirmcartComponent } from './confirmcart/confirmcart.component';
import { AddedtocartComponent } from './addedtocart/addedtocart.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ToggleComponent } from './toggle/toggle.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'allproduct',component:AllproductComponent},
  {path:'kart',component:KartComponent},
  {path:'product',component:ProductComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'showsearch/:search',component:ShowsearchComponent},
  {path: '', redirectTo: '/allproduct', pathMatch: 'full'},
  {path:'confirmcart',component:ConfirmcartComponent},
  {path:'addedtocart',component:AddedtocartComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'toggle',component:ToggleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegistrationComponent,HomeComponent,AllproductComponent,KartComponent,AddedtocartComponent,ToggleComponent];