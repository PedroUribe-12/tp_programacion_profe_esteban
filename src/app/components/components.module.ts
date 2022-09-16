import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { CafesService } from '../servicios/cafes.service';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CardNewService } from '../servicios/card-new.service';
import {CarouselModule} from 'primeng/carousel';
import { CrudTableComponent } from './crud-table/crud-table.component';
import {TableModule} from 'primeng/table';
import { CardsitasComponent } from './cardsitas/cardsitas.component';


@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    GaleriaComponent,
    CardNewsComponent,
    ContactComponent,
    CrudTableComponent,
    CardsitasComponent
    ],
  imports: [
    CommonModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RatingModule,
    FormsModule,
    CarouselModule,
    TableModule
  ],
  exports: [
    BannerComponent,
    CardComponent,
    GaleriaComponent,
    CardNewsComponent,
    CardsitasComponent
  ],
  providers:[
    CafesService,
    CardNewService
  ]
 
})
export class ComponentsModule { }
