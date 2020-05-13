import { Router } from '@angular/router';
import { FipeService } from './../api/fipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  marcas;

  constructor(private fipeApi: FipeService, private router: Router) {}

  ngOnInit () {
    this.fipeApi.MarcasCaminhoes().subscribe((data) => {
      this.marcas = data;
    })
  }

  listarModelos (marca) {
    this.router.navigate(['/caminhao-modelos/', marca]);
  }

}
