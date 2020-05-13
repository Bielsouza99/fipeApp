import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FipeService } from 'src/app/api/fipe.service';

@Component({
  selector: 'app-caminhao-valor',
  templateUrl: './caminhao-valor.page.html',
  styleUrls: ['./caminhao-valor.page.scss'],
})
export class CaminhaoValorPage implements OnInit {

  ano;
  marca;
  modelo;
  valor: any = [];
  constructor(private actRoute: ActivatedRoute, private fipeApi: FipeService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
      this.ano = params['ano'];
      this.modelo = params['modelo'];
    });

    this.fipeApi.ValorCaminhoes(this.marca, this.modelo, this.ano).subscribe(data => this.valor = data);
  }

}
