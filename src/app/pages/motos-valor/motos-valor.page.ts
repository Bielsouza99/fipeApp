import { ActivatedRoute } from '@angular/router';
import { FipeService } from 'src/app/api/fipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motos-valor',
  templateUrl: './motos-valor.page.html',
  styleUrls: ['./motos-valor.page.scss'],
})
export class MotosValorPage implements OnInit {

  marca;
  modelo;
  ano;
  valor: any = [];

  constructor(private fipeApi: FipeService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
      this.modelo = params['modelo'];
      this.ano = params['ano'];
    });


    this.fipeApi.ValorMoto(this.marca, this.modelo, this.ano).subscribe(data => this.valor = data);
  }

}
