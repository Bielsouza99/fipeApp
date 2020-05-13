import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FipeService } from './../../api/fipe.service';

@Component({
  selector: 'app-caminhao-anos',
  templateUrl: './caminhao-anos.page.html',
  styleUrls: ['./caminhao-anos.page.scss'],
})
export class CaminhaoAnosPage implements OnInit {

  marca: any;
  modelo;
  anos;

  constructor(private fipeApi: FipeService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.marca = params['marca'];
      this.modelo = params['modelo'];
    });

    this.fipeApi.AnosCaminhoes(this.marca, this.modelo).subscribe(data => this.anos = data);
  }


  listarValor(ano: any) {
    this.router.navigate(['/caminhao-valor', this.marca, this.modelo, ano]);
  }

}
