import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';

import{GoogleMapsModule} from '@angular/google-maps';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    GoogleMapsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class ContactModule { }
