import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {
  modelLancamento: Lancamento = {
    nomeDoProduto:null,
    preco:0.0
};
  idCartao: number;
  idLancamento: number;
  constructor(private http:HttpClient) { }

  addLancamento(): void {
    if (this.idCartao == null){
      alert("Por favor, insira um id válido");
    } else {
      let url = "http://localhost:8080/v1/lancamento/add/" + this.idCartao;
      this.http.post(url, this.modelLancamento).subscribe(
        onSuccess => {alert("Lancamento gerado no cartão de id " + this.idCartao)},
        onFailure => {alert("Falha ao add lancamento. Verifique o id")}
      );
    }
  }

  delLancamento(): void{
    if (this.idLancamento == null){
      alert("Por favor, insira um id válido " + this.idLancamento)
    } else {
      let url = "http://localhost:8080/v1/lancamento/delete/" + this.idLancamento;
      this.http.delete(url).subscribe(
        onSuccess => {alert("Lancamento cancelado!")},
        onFailure => {alert("Lancamento inexistente ou cartão desativado.")}
      )
    }
  }

  ngOnInit() {
  }



}
export interface Lancamento {
  nomeDoProduto: string,
  preco: number
}
