import { FipeService } from './../../api/fipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-anos',
  templateUrl: './carros-anos.page.html',
  styleUrls: ['./carros-anos.page.scss'],
})
export class CarrosAnosPage implements OnInit {

  marca;
  modelo;
  anos;

  constructor(private actRoute: ActivatedRoute, private router: Router, private fipeApi: FipeService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
      this.modelo = params['modelo'];
    });

    this.fipeApi.AnosCarro(this.marca, this.modelo).subscribe(data => {
      this.anos = data;
    });
  }

  listarValor(ano: any) {
    this.router.navigate(['/carros-valor', this.marca, this.modelo, ano]);
  }

}
