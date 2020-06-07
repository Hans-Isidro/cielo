import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.component.html',
  styleUrls: ['./ios.component.css']
})
export class IosComponent implements OnInit {

  constructor(public infoSercice: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
