import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// PRIMENG

import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { ReactiveFormsModule} from '@angular/forms'
import {CardModule} from 'primeng/card';

//servicio Usuarios y firebase
import { UsuariosService } from '../servicios/usuarios.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    TriStateCheckboxModule,
    ReactiveFormsModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  providers:[
    UsuariosService
  ]
})
export class SharedModule { }
