import { Component, OnInit } from '@angular/core';
import { Cafe } from 'src/app/models/cafe';
import { CafesService } from 'src/app/servicios/cafes.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {
  cafes!: Cafe[];
  constructor(private servicioCafes: CafesService) { }

  ngOnInit(): void {
    this.servicioCafes.getCafe().subscribe(Colcafes=>{
      this.cafes = Colcafes;
      console.log(Colcafes)
    })
  }

}
