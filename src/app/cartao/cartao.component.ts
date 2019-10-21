import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  model:Portador = {
    id: null
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addCartao(): void{
    //let headers = new HttpHeaders({authorization: 'Basic ' + btoa('admin:123')});
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (this.model.id == null || this.model.id == undefined){
      alert("Por favor, insira um ID válido");
    } else {
      let url = "http://localhost:8080/v1/cartao/add/" + this.model.id;
      this.http.post(url, null, {headers:headers}).subscribe(
        onSuccess => {alert("Cartão adicionado ao portador!");},
        onFailure => {alert("Erro ao adicionar o cartão. Verifique se o id está correto");}
      );
    }
  }

}

export interface Portador {
  id: number;
}
