import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'show',
    component:ShowComponent

  },
  {
    path:'',
    component:ShowComponent
  }
  
]

@NgModule({
  declarations: [
    ShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShowModule { }
