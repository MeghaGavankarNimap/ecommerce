import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['/auth/signup'])
  }

}
