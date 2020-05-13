import { ActivatedRoute, Router } from '@angular/router';
import { FipeService } from './../../api/fipe.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caminhao-modelos',
  templateUrl: './caminhao-modelos.page.html',
  styleUrls: ['./caminhao-modelos.page.scss'],
})
export class CaminhaoModelosPage implements OnInit {

  marca: any;
  modelos: any = [];

  constructor(private fipeApi: FipeService, private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
    });

    this.fipeApi.ModelosCaminhoes(this.marca).subscribe(data => this.modelos = data);
  }

  anos(modelo: any) {
    this.router.navigate(['/caminhao-anos/', this.marca, modelo]);
  }

}
