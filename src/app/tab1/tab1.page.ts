import { FipeService } from './../api/fipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  marcas;
  modelos;
  anos;
  
  constructor(private fipeApi: FipeService, private router: Router) {}

  ngOnInit() {
    this.fipeApi.MarcasCarro().subscribe((data) => {
      //console.log(data);
      this.marcas = data;
    });
  }

  listarModelos (marca) {
    this.router.navigate(['/carros-modelos/', marca]);
  }


}
