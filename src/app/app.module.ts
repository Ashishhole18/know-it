import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { KartComponent } from './kart/kart.component';
import { FileComponent } from './file/file.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowsearchComponent } from './showsearch/showsearch.component';
import { ConfirmcartComponent } from './confirmcart/confirmcart.component';
import { AddedtocartComponent } from './addedtocart/addedtocart.component';
import { Pipe, PipeTransform } from '@angular/core';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   LoginComponent,
   RegistrationComponent,
   HomeComponent,
   ProductComponent,
   AllproductComponent,
   KartComponent,
   FileComponent,
   ProductdetailsComponent,
   ShowsearchComponent,
   ConfirmcartComponent,
   AddedtocartComponent,
   UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
