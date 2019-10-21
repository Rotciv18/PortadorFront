import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-portador',
  templateUrl: './portador.component.html',
  styleUrls: ['./portador.component.css']
})
export class PortadorComponent implements OnInit {
  model:Proposta = {
    nome: '',
    email:'',
    cpf:'',
    dataNascimento:'',
    nomeDoPai:'',
    nomeDaMae:''
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  enviarProposta(): void{
    let url = 'http://localhost:8080/v1/protected/portador/add'
    let headers = new HttpHeaders({authorization: 'Basic ' + btoa('admin:123')});
    this.http.post(url, this.model, {headers: headers}).subscribe(
      onSuccess => {alert("Proposta enviada! Um e-mail será enviado ao confirmá-la.")},
      onFailure => {alert("Erro ao enviar proposta")}
    );
  }
}

export interface Proposta {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  nomeDoPai: string;
  nomeDaMae: string;
}
