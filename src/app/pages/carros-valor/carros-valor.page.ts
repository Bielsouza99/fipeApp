import { FipeService } from './../../api/fipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carros-valor',
  templateUrl: './carros-valor.page.html',
  styleUrls: ['./carros-valor.page.scss'],
})
export class CarrosValorPage implements OnInit {

  ano;
  marca;
  modelo;
  valor: any = [];

  constructor(private actRoute: ActivatedRoute, private fipeApi: FipeService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
      this.modelo = params['modelo'];
      this.ano = params['ano'];
    });

    this.fipeApi.ValorCarro(this.marca, this.modelo, this.ano).subscribe(data => this.valor = data);
  }

}
