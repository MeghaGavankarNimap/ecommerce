import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatDividerModule, MatIconModule,MatSelectModule,MatFormFieldModule,MatInputModule
  ],
  exports:[
    MatButtonModule, MatDividerModule, MatIconModule,MatSelectModule,MatFormFieldModule,MatInputModule
  ]
})
export class MaterialModule { }
