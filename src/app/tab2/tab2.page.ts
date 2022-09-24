import { FipeService } from './../api/fipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  marcas;

  constructor(private fipeApi: FipeService, private router: Router) {}

  ngOnInit() {
    this.fipeApi.MarcasMoto().subscribe((data) => {
      this.marcas = data;
    });
  }

  listarModelos(marca: any) {
    this.router.navigate(['/motos-modelos', marca]);
  }

}
