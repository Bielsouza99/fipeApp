import { FipeService } from './../../api/fipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-motos-modelos',
  templateUrl: './motos-modelos.page.html',
  styleUrls: ['./motos-modelos.page.scss'],
})
export class MotosModelosPage implements OnInit {

  marca: any;
  modelos: any = [];

  constructor(private fipeApi: FipeService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
    });

    this.fipeApi.ModelosMoto(this.marca).subscribe(data => this.modelos = data);
  }

  anos(modelo: any) {
    this.router.navigate(['/motos-anos/', this.marca, modelo]);
  }

}
