import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import{map} from 'rxjs/operators'
import { Router } from '@angular/router';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUp!:FormGroup;
  data:any;

  constructor(private fb:FormBuilder,private service:UserService,private router:Router) { 
   
  }

  ngOnInit(): void {
    
    this.SignUP()
  }

get controls(){
  return this.signUp;
}




SignUP(){
this.signUp=this.fb.group({
  name:['',Validators.required],
  mobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[789]{1}[0-9]{9}$/)]],
  email:[''],
  Password:['',[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,15}$/)]]
})      




  }

  submit(){
    
    console.log(this.signUp)
    if(!this.signUp.valid){
      this.signUp.markAllAsTouched()
      return false
      
    }
    else{
      this.data=this.signUp.getRawValue();
      return this.service.signUp(this.data).pipe(map(res=>{
       this.router.navigate(['/auth/signin'])
       // console.log(res)
      })).subscribe()  
   
 
   }
  }
   
}
