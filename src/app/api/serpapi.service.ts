import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SerpApiService {

  base_url = 'https://serpapi.com/playground?q=Apple&tbm=isch&ijn=0';

  constructor(private http: HttpClient) { }

  getImages(tipo: any) {
    return this.http.get(`https://serpapi.com/search.json?q=${tipo}&tbm=isch&ijn=0&api_key=${environment.serApiKey}`)
  }

//   return this.http.get(`${this.base_url}/carros/marcas`);


}
