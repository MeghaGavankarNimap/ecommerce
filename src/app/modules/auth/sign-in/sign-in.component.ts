import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private router:Router,private fb:FormBuilder) { }
  signinForm!:FormGroup
  ngOnInit(): void {
  this.signin()
  
  }

  signin(){
  this.signinForm=this.fb.group({
  mobileNo:['',Validators.required],
  Password:['',Validators.required]

})
  }

  get cotrols(){
     return this.signinForm.controls
  }

  subSignIn(){
    console.log(this.signinForm)

  }

  signUp(){
    this.router.navigate(['/auth/signup'])
  }

}
