import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatInputModule } from '@angular/material/input';



const routes:Routes=[
  {
    path:'signin',
    component:SignInComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  }
  
]
@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AuthModule { }
