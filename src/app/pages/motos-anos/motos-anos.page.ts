import { FipeService } from 'src/app/api/fipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-motos-anos',
  templateUrl: './motos-anos.page.html',
  styleUrls: ['./motos-anos.page.scss'],
})
export class MotosAnosPage implements OnInit {

  anos: any = [];
  modelo: any;
  marca: any;

  constructor(private fipeApi: FipeService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.modelo = params['modelo'];
      this.marca = params['marca'];
    });

    this.fipeApi.AnosMoto(this.marca, this.modelo).subscribe(data => this.anos = data);
  }

  listarValor(ano: any) {
    this.router.navigate(['/motos-valor/', this.marca, this.modelo, ano]);
  }

}
