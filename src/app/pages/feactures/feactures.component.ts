import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
    selector: 'app-feactures',
    templateUrl: './feactures.component.html',
    styleUrls: ['./feactures.component.css']
  })

  export class FeacturesComponent implements OnInit {

    constructor(public servicio: InfoPaginaService) { }
  
    ngOnInit(): void {
    }
  
  }