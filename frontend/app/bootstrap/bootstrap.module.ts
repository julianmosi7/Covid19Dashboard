import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BsButtonComponent } from './bs-button/bs-button.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [BsNavbarComponent, BsButtonComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BsNavbarComponent,
    BsButtonComponent
  ]
})
export class BootstrapModule { }
