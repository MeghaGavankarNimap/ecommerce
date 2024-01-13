import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  isActive:boolean=false;
  profileval:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  menu(){
    console.log("jkhdjfk")
    this.isActive=true
  }

  profileFun(){
    this.profileval=!this.profileval;

  }


  signin(){
    this.router.navigate(['/auth/signin'])
  }

}
