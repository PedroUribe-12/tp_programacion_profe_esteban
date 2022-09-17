import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';

//importamos librerias de FireStore y el servicio Cafe
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {CafesService} from '../../servicios/cafes.service';
//modulos de primeng
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { ComponentsModule } from 'src/app/components/components.module';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TriStateCheckboxModule,
    ComponentsModule,
    TableModule,
    ToolbarModule
  ],
  providers: [CafesService]
})
export class AdminModule { }
