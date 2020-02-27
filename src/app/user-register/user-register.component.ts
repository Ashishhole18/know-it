import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { UserReg } from '../userregi';
import { LogincheckService } from '../logincheck.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  register:UserReg;

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private frombuilder:FormBuilder,private userService:LogincheckService,
    private alertService: AlertService,) { }
    private router: Router

  ngOnInit() {
    this.registerForm=this.frombuilder.group({
      u_firstname: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(45)]],
      u_lastname: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(45)]],
      u_password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$'), Validators.minLength(8),Validators.maxLength(15)]],
      u_emailid: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      u_aadhaarno: ['', [Validators.required,Validators.pattern('[0-9]\\d{11}'),Validators.minLength(12),Validators.maxLength(12)]],
     
    });

  }
 
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.userRegistration(this.registerForm.value)
          .pipe()
          .subscribe(
              data => {
                  console.log(data);
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/allproduct']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
