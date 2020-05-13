import { ActivatedRoute, Router } from '@angular/router';
import { FipeService } from './../../api/fipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-modelos',
  templateUrl: './carros-modelos.page.html',
  styleUrls: ['./carros-modelos.page.scss'],
})
export class CarrosModelosPage implements OnInit {
  
  marca: any;
  modelos: any = [];

  constructor(private fipeApi: FipeService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
    });

    this.fipeApi.ModelosCarro(this.marca).subscribe((data) => {
      this.modelos = data;
    });
  }

  anos(modelo: any) {
    this.router.navigate(['/carros-anos/', this.marca, modelo]);
  }

}
